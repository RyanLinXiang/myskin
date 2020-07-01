//* #### IMPORTS #### *//
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { Button, Card, Modal, Icon as KittenIcon } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";
import AddQuestion from "./MySkinTalk-components/AddQuestion";
import AddAnswer from "./MySkinTalk-components/AddAnswer";
import QuestionCard from "./MySkinTalk-components/QuestionCard";
import AnswerCard from "./MySkinTalk-components/AnswerCard";
import QuestionsList from "./MySkinTalk-components/QuestionsList";
import SearchField from "./MySkinTalk-components/SearchField";
import LoadMoreButton from "./MySkinTalk-components/LoadMoreButton";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MySkinFavorites = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  //* #### STATES #### *//
  const [visible, setVisible] = useState(false);
  const [db_fav_questions, set_db_fav_questions] = useState([]);
  const [showData, setShowData] = useState([]);
  const [qANDa, setQandA] = useState({ question: '', answer: '' });
  const [inputVisible, setInputVisible] = useState(false);
  const [pagination, setPagination] = useState(entriesPerScroll);

  //* #### FUNCTIONS/METHODS #### *//
  //### Question Functions ###//
  const submitQuestion = (subject, question) => {
    const QUESTION = {
      subject: subject,
      question: question,
    };
    connectAPI("questions", "POST", QUESTION, token).then((data) => {
      getFavorites();
      toggleFav(data.insertId);
    });
  };

  //### Answer Functions ###//
  const getAnswers = (queryID) => {
    connectAPI(
      "questions/" + queryID + "?start=0&numbers=" + entriesPerScroll, "GET", false, token).then((data) => {
        let allAnswers = [];
        if (data[1].length > 0) {
          for (const item of data[1]) {
            allAnswers.push(item);
          }
        }
        let isFavoriteOrNot = showData.find(isfavObj => isfavObj.id === data[0].id).isFav // find isFav attribute to include in question object
        setQandA({ question: { ...data[0], isFav: isFavoriteOrNot }, answer: allAnswers });
        setVisible(true);
      });
  };
  const submitAnswer = (answer) => {
    const ANSWER = {
      answer: answer,
      question_id: qANDa.question.id,
    };
    connectAPI("answers", "POST", ANSWER, token).then((data) => {
      getFavorites();
      getAnswers(qANDa.question.id);
    });
  };

  //### Favorite Functions ###//
  const getFavorites = (update) => {
    connectAPI(
      "favorites?start=0&numbers=" + pagination, "GET", false, token).then((data) => {
        data.forEach((element) => {
          element.isFav = true;
        }); // add prop isFav
        if (data.length > showData.length || update) {
          setShowData(data);
        }
        set_db_fav_questions(data)
      });
  };

  const toggleFav = (targetID) => {
    connectAPI(
      "favorites/" + targetID, "POST", false, token).then((data) => {
        getFavorites('update!');
      });
  };

  //### Search Functions ###//
  const searchKeyword = (keyword) => {
    const encoded = encodeURIComponent(keyword)
    connectAPI(
      "questions/search/" + encoded + "?start=0&numbers=" + entriesPerScroll, "GET", false, token).then((data) => {
        let favSearch = data.filter(query => db_fav_questions.some(favQuery => favQuery.id === query.id)); //only keep if searched question is a favorite
        setShowData(favSearch)
      });
  };

  //### Delete Functions ###//
  const deleteQuestion = (targetID) => {
    connectAPI(
      "questions/" + targetID, "DELETE", false, token).then((data) => {
        alert('Ihre Frage würde gelöscht')
        setVisible(false)
      });
  };

  const deleteAnswer = (target) => {
    connectAPI(
      "answers/" + target.id, "DELETE", false, token).then((data) => {
        getAnswers(target.question_id)
      });
  };


  //* #### ACCESSORY COMPONENTS TO BE RENDERED #### *//
  const DelButton = (targetID, QorA) => (
    <TouchableOpacity
      status="danger"
      size='large'
      onPress={() => { 
        if (QorA === 'Q') {
          deleteQuestion(targetID); 
          getFavorites('update!');
        } else if (QorA === 'A') {
          deleteAnswer(targetID); 
          getFavorites('update!');
        }
      }}
    >
      <KittenIcon
        fill={'red'}
        style={styles.iconButton}
        name='trash-2-outline'
      />
    </TouchableOpacity>
  );

  const FavButton = (query) => (
    <TouchableOpacity
      status="warning"
      size="large"
      onPress={() => {
        if (query.question !== undefined) {
          toggleFav(query.id);
          setQandA(prev => ({ question: { ...query, isFav: !query.isFav }, answer: prev.answer }));
        }
      }}
    >
      {query.isFav ? <KittenIcon
        fill={'red'}
        style={styles.iconButton}
        name='heart'
      /> : <KittenIcon
          fill={'grey'}
          style={styles.iconButton}
          name='heart-outline'
        />}
    </TouchableOpacity>
  );

  // const PlusIcon = (props) => <KittenIcon {...props} name='plus' />;

  const InputField = () => (
    <>
      <SearchField
        placeholder={"Favoriten-Suche..."}
        onSubmit={searchKeyword}
      />
      {showData.length < db_fav_questions.length ? <Button
        // style={styles.button}
        style={{ alignSelf: "stretch", marginHorizontal: 30, marginTop: 15 }}
        status="warning"
        onPress={() => getFavorites()}
      >
        RESET SUCHE
            </Button> : null}
      <Button
        // style={styles.button}
        style={{ alignSelf: "stretch", margin: 30, marginVertical: 15 }}
        status="warning"
        // accessoryRight={PlusIcon}
        onPress={() => setInputVisible(true)}
      >
        FRAGE STELLEN
            </Button>
      <AddQuestion
        visible={inputVisible}
        setVisible={setInputVisible}
        onSubmit={(subject, question) => submitQuestion(subject, question)}
      />
    </>
  );

  const CardPopup = () => {
    return qANDa.question.subject ? (
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        style={styles.modal}
      >
        <Card 
        style={styles.modalCard} 
        disabled={true} 
        >
           <ScrollView showsVerticalScrollIndicator={false}>
          <QuestionCard
            query={qANDa.question}
            favButton={FavButton}
            user={user_id}
            DelButton={(queryID) => DelButton(queryID, 'Q')}
          />
          {qANDa.answer.map(reply => (
            <AnswerCard
              key={reply.id}
              reply={reply}
              user={user_id}
              DelButton={(replyID) => DelButton(replyID, 'A')}
            />
          ))}
           <SafeAreaView
            keyboardDismissMode={"none"}
            style={styles.answerCardButtons}
          >
          <AddAnswer 
          setVisible={setVisible} 
          onSubmit={(reply) => submitAnswer(reply)} />
          </SafeAreaView>
          </ScrollView>
        </Card>
      </Modal>
    ) : null;
  };

  //* #### USE-EFFECT/COMPONENT-DID-MOUNT #### *//
  useEffect(() => {
    getFavorites("update!");
  }, [pagination]);

  //* #### FINAL RENDER #### *//
  return (
    <SafeAreaView style={styles.container}>
      <InputField />
      <QuestionsList
        style={styles.list}
        data={showData}
        getAnswers={getAnswers}
        visible={visible}
        setVisible={setVisible}
        favButton={FavButton}
      />
      {showData.length == pagination ? <LoadMoreButton
        num1={pagination}
        num2={showData.length}
        num3={entriesPerScroll}
        setPagination={setPagination}
      /> : <LoadMoreButton
          num1={pagination}
          num2={showData.length}
          num3={entriesPerScroll}
          setPagination={setPagination}
        />}
      <CardPopup />
    </SafeAreaView>
  );
};

//* #### STYLESHEET #### *//
const styles = StyleSheet.create({
  container: globalcss.container,
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  button: {
    // fontSize: 20,
    alignSelf: "stretch",
    color: "darkorange",
  },
  iconButton: {		
    fontSize: 25,		
    color: 'red',		
    width: 25,		
    height: 25,		
  },
  inputField: {
    height: 120,
    padding: 10,
    marginBottom: 10,
  },
  list: {
    width: "100%",
    backgroundColor: globalcss.container.backgroundColor,
  },
  listitem: { flex: 1, backgroundColor: globalcss.container.backgroundColor },
  modal: { width: "90%" },
  star: { color: "red" },

  modal: {
    flex: 1,
    width: screenWidth * 0.85,
    height: screenHeight * 0.85,
    marginBottom: 20,
  },
  modalCard: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#FFF",
    borderColor: "gray",
    borderRadius: 10,
  },
  answerCardButtons: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
  },
});

//* #### EXPORT #### *//
export default MySkinFavorites;
