//* #### IMPORTS #### *//

import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Button,
  Card,
  Modal,
  Text,
  List,
  ListItem,
  Icon as KittenIcon,
  Divider,
} from "@ui-kitten/components";
import Icon from "react-native-vector-icons/FontAwesome";
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";
import { ScrollView } from "react-native-gesture-handler";
import AddQuestion from "./MySkinTalk-components/AddQuestion";
import AddAnswer from "./MySkinTalk-components/AddAnswer";
import Qcard from "./MySkinTalk-components/Qcard";
import AnswerCard from "./MySkinTalk-components/AnswerCard";
import QuestionsList from "./MySkinTalk-components/QuestionsList";

const MySkinTalk = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  //* #### STATES #### *//

  const [visible, setVisible] = useState(false);
  const [db_questions, set_db_questions] = useState([]);
  // const [db_answers, set_db_answers] = useState([]);
  const [question, setQuestion] = useState("question");
  const [answer, setAnswer] = useState([]);
  const [favQuestionsList, setFavQuestionsList] = useState([]);
  const [fav, setFav] = useState(false);
  let favCol = fav ? "yellow" : "grey";
  const alertMessages = {
    newQuestion: "Ihre Frage wurde erfolgreich gespeichert!",
    newAnswer: "Ihre Antwort wurde erfolgreich gespeichert!",
    newFavorite: "Die Frage wurde erfolgreich als Favorit gespeichert!",
    delFavorite: "Die Frage wurde von Ihre Favoriten gelöscht",
  };

  const [inputVisible, setInputVisible] = useState(false);

  //* #### FUNCTIONS/METHODS #### *//

  //### Question Functions ###//
  const getQuestions = () => {
    connectAPI(
      "questions?start=0&numbers=" + entriesPerScroll,
      "GET",
      false,
      token
    ).then((data) => {
      set_db_questions(data);
    });
  };
  /*  LinX: const findQuestion = (question) => {
    for (const query of db_questions) {
      if (question === query.subject) {
        return query.id;
      }
    }
  }; */
  const submitQuestion = (subject, question) => {
    const QUESTION = {
      subject: subject,
      question: question,
    };
    connectAPI("questions", "POST", QUESTION, token).then((data) => {
      getQuestions();
      // console.log(data);
      toggleFav(data.insertId, alertMessages.newQuestion);
    });
  };

  //### Answer Functions ###//
  const getAnswers = (id) => {
    connectAPI(
      "questions/" + id + "?start=0&numbers=" + entriesPerScroll,
      "GET",
      false,
      token
    ).then((data) => {
      let qAnda = [];
      if (data[1].length > 0) {
        for (const item of data[1]) {
          /* else if (answer.answer) {
            setAnswer((prev) => {
              let noDuplicates = [...prev, answer].filter(
                (item, i, self) =>
                  i === self.findIndex((replyObj) => replyObj.id === item.id)
              ); 
              return [...prev, answer];
            });
          } */

          qAnda.push(item);
        }
      }
      setQuestion(data[0]);
      setAnswer(qAnda);
      setVisible(true);
    });
  };
  const submitAnswer = (answer) => {
    const ANSWER = {
      answer: answer,
      question_id: question.id,
    };
    connectAPI("answers", "POST", ANSWER, token).then((data) => {
      getQuestions();
      getAnswers(question.id);
      // console.log(data);
      alert(alertMessages.newAnswer);
    });
  };

  //### Favorite Functions ###//
  const getFavorites = () => {
    connectAPI(
      "favorites?start=0&numbers=" + entriesPerScroll, //entriesPerScroll,
      "GET",
      false,
      token
    ).then((data) => {
      setFavQuestionsList(data);
    });
  };
  const isFavorite = (targetID /* LinX: = question.id */) => {
    getFavorites();
    for (const favQuestion of favQuestionsList) {
      if (favQuestion.id == targetID) {
        console.log("listed");
        setFav(true);
      } else {
        console.log("not listed");
        setFav(false);
      }
    }
  };

  //const FavIcon = (toggleMe) => {
  //  return <Icon onPress={toggleMe} size={20} color={favCol} name="star" />;
  //};

  const toggleFav = (targetID, message) => {
    //toggle fav
    connectAPI(
      "favorites/" + targetID, //entriesPerScroll,
      "POST",
      false,
      token
    ).then((data) => {
      // console.log(data)
      let msg_log = data.insertId == 0 ? "UN-favorited" : "favorited";
      console.log(msg_log);
      let msg = data.insertId == 0 ? alertMessages.delFavorite : message;
      alert(msg);
    });
  };
  // const toggleStarCol = () => {
  //   //set favIcon color
  //   // const isFav = isFavorite()
  //   // console.log(isFav, 'isFav?')

  //   // setFav(prev => !prev)
  // }

  const PlusIcon = (props) => <KittenIcon {...props} name="plus" />;

  //* #### ACCESSORY COMPONENTS TO BE RENDERED #### *//
  //LinX: Removed React.memo as it does not make sense
  const InputField = () => (
    <>
      <Button
        style={styles.button}
        status="warning"
        accessoryRight={PlusIcon}
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
  //LinX: Removed React.memo as it does not make sense
  const CardPopup = () => {
    return question.subject ? (
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
          setVisible(false);
        }}
        style={styles.modal}
      >
        <Card disabled={true}>
          <Qcard
            query={question}
            /*favIcon={() =>
                  FavIcon(() =>
                    toggleFav(question.id, alertMessages.newFavorite)
                  )
                }*/
          />
          {answer.map((reply) => (
            <AnswerCard key={reply.id} reply={reply} />
          ))}

          <AddAnswer onSubmit={(reply) => submitAnswer(reply)} />

          <Button
            size="tiny"
            onPress={() => setVisible(false)}
            style={{ alignSelf: "center" }}
          >
            SCHLIESSEN
          </Button>
        </Card>
      </Modal>
    ) : null;
  };

  // //* #### USE-EFFECT/COMPONENT-DID-MOUNT #### *//

  useEffect(() => {
    getQuestions();
    getFavorites();
  }, []);

  //* #### FINAL RENDER #### *//

  return (
    <SafeAreaView style={styles.container}>
      <InputField />
      <QuestionsList
        style={styles.list}
        data={db_questions}
        //LinX:   findQuestion={findQuestion}
        getAnswers={getAnswers}
        visible={visible}
        setVisible={setVisible}
        /*favIcon={() => FavIcon(console.log(""))}*/
      />
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
  list: {
    width: "100%",
    backgroundColor: globalcss.container.backgroundColor,
  },
  listitem: { backgroundColor: globalcss.container.backgroundColor },
  modal: { width: "90%", zIndex: 500 },
  star: { color: "red" },
});

//* #### EXPORT #### *//

export default MySkinTalk;