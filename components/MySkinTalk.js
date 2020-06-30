//* #### IMPORTS #### *//

import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import {
  Button,
  Card,
  Modal,
  Text,
  Icon as KittenIcon,
  Divider,
} from "@ui-kitten/components";
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import AddQuestion from "./MySkinTalk-components/AddQuestion";
import AddAnswer from "./MySkinTalk-components/AddAnswer";
import Qcard from "./MySkinTalk-components/Qcard";
import AnswerCard from "./MySkinTalk-components/AnswerCard";
import QuestionsList from "./MySkinTalk-components/QuestionsList";
import SearchField from "./MySkinTalk-components/SearchField";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MySkinTalk = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  //* #### STATES #### *//

  const [visible, setVisible] = useState(false);
  const [db_questions, set_db_questions] = useState([]);
  const [showData, setShowData] = useState([]);
  const [qANDa, setQandA] = useState({ question: '', answer: '' });
  const [inputVisible, setInputVisible] = useState(false);
  const [pagination, setPagination] = useState(entriesPerScroll);

  //* #### FUNCTIONS/METHODS #### *//

  //### Question Functions ###//
  const getQuestions = (favList, update) => {
    connectAPI("questions?start=0&numbers=" + pagination, "GET", false, token).then((data) => {
      const questionsList = data.map(obj => favList.find(favObj => favObj.id === obj.id) || obj) //if is favorite, replace obj with obj from favList
      if (data.length > showData.length || update) {
        setShowData(questionsList);
      }
      set_db_questions(questionsList);
    });
  };

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
  const getAnswers = (id) => {
    connectAPI(
      "questions/" + id + "?start=0&numbers=" + entriesPerScroll, "GET", false, token).then((data) => {
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
        getQuestions(data, update);
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
        setShowData(data)
      });
  }


  //* #### ACCESSORY COMPONENTS TO BE RENDERED #### *//
  const LoadMoreButton = () => 
  showData.length<entriesPerScroll ? null:(
  <Button
  
    onPress={() => { 
      pagination > showData.length ? setPagination(entriesPerScroll):setPagination(prev => prev + 10) 
    }}
    style={styles.button}
    status='warning'
  >
    {pagination > showData.length ? 'WENIGER FRAGEN LADEN': 'MEHR FRAGEN LADEN'}
  </Button>
)

  // &#9734; => NOT fav
  // &#9733; => IS fav
  const FavButton = (query) => {
    return (
      <TouchableOpacity
        status="warning"
        size='small'
        onPress={() => {
          if (query.question !== undefined) {
            toggleFav(query.id)
            setQandA(prev => ({ question: { ...query, isFav: !query.isFav }, answer: prev.answer }));
          }
        }}
      >
        {query.isFav ? <Text style={styles.button}>&#9733;</Text> :
          <Text style={{alignSelf:'stretch'}}>&#9734;</Text>}
      </TouchableOpacity>
    );
  };

  const PlusIcon = (props) => <KittenIcon {...props} name="plus" />;

  const InputField = () => (
    <>
      <SearchField placeholder={'Suche...'} onSubmit={searchKeyword} />
      {showData.length < db_questions.length ? <Button
        style={{alignSelf:'stretch', marginHorizontal:30, marginTop:15}}
        size="small"
        status="warning"
        onPress={() => getFavorites()}
      >
        RESET SUCHE
      </Button> : null}
      <Divider />
      <Button
      size="small"
        style={{alignSelf:'stretch', margin:30, marginVertical:15}}
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
   
        <Card  style={styles.modalCard} disabled={true}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Qcard
              query={qANDa.question}
              favButton={FavButton}
            />
        
            {qANDa.answer.map((reply) => (
              <AnswerCard key={reply.id} reply={reply} />
            ))}
          </ScrollView>
          <SafeAreaView keyboardDismissMode={'none'}  style={styles.answerCardButtons}>
              <AddAnswer onSubmit={(reply) => submitAnswer(reply)} />

              <Button
                size="small"
                onPress={() => setVisible(false)}
                style={{ alignSelf: "stretch" }}
                status="warning"

              >
                SCHLIESSEN
              </Button>
           </SafeAreaView>
        </Card>
        
      </Modal>
    ) : null;
  };

  // //* #### USE-EFFECT/COMPONENT-DID-MOUNT #### *//

  useEffect(() => {
    getFavorites('update!')
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
      <LoadMoreButton />
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
    alignSelf:'stretch',
  },
  inputField: {
    
    height: 120,
    padding:10,   
    marginBottom: 10,
  },
  list: {
    width: "100%",
    backgroundColor: globalcss.container.backgroundColor,
  },
  listitem: {
     flex:1,
     backgroundColor: globalcss.container.backgroundColor },
  modal: {
     flex:1,
     width: screenWidth * 0.85,
     height: screenHeight * 0.85,
     marginBottom:20
     },
  modalCard: { flex:1,
    alignItems:'stretch',
    backgroundColor:'#FFF',
    borderColor: "gray",
    borderRadius: 10,
   },
   answerCardButtons:{
    flex:1,
    width:'100%',
    backgroundColor:'#FFF',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
    marginBottom:20
   },
});

//* #### EXPORT #### *//

export default MySkinTalk;
