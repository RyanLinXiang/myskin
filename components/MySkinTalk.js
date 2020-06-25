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
import Icon from 'react-native-vector-icons/FontAwesome';
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";
import FavButoon from "./MySkinTalk-components/FavButton";
import { ScrollView } from "react-native-gesture-handler";
import AddQuestion from "./MySkinTalk-components/AddQuestion";
import Qcard from './MySkinTalk-components/Qcard';
import AnswerCard from './MySkinTalk-components/AnswerCard';

const MySkinTalk = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  const [visible, setVisible] = useState(false);
  const [db_questions, set_db_questions] = useState([]);
  const [db_answers, set_db_answers] = useState([]);
  const [fav, setFav] = useState(false)
  let favCol = fav ? '#e6e600' : 'grey'
  const [question, setQuestion] = useState('question')
  const [answer, setAnswer] = useState([])

  const getQuestions = () => {
    connectAPI(
      "questions?start=0&numbers=" + 50,//entriesPerScroll,
      "GET",
      false,
      token
    ).then((data) => {
      set_db_questions(data);
    });
  }
  const getAnswers = (id) => {
    connectAPI(
      "questions/" + id + "?start=0&numbers=" + entriesPerScroll,
      "GET",
      false,
      token
    ).then((data) => {
      set_db_answers([]);
      
      for (const answerArray of data) {
        if(answerArray.length<1){
          setAnswer([])
          continue
        }
        for (const answer of answerArray) {
          if (answer.question) {
            setQuestion(answer)
          } else if (answer.answer) {
            setAnswer(prev => [...prev, answer])
          }
        }
      }
    });
  }
  const findQuestion = (question) => {
    for (const query of db_questions) {
      if (question === query.subject) {
        return query.id
      }
    }
  }

  const findAnswer = (questionID) => {
    getAnswers(questionID)
    // console.log(db_answers, 'all answers******************************************************************')
    // for (const answerArray of db_answers) {
    //   for (const answerObj of answerArray) {
    //     console.log(answerObj, 'single answer---------------------------')
    //   }
    // }
  }


  useEffect(() => {
    getQuestions();
  }, []);

  const renderItemAccessory = (props) => (
    <React.Fragment>
      <FavButoon />
    </React.Fragment>
  );

  const renderItemIcon = (props) => <KittenIcon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <React.Fragment>
      <ListItem
        onPress={function (me) {
          const questionText = this.children.props.children[1].props.children[0].props.component;
          const queryID = findQuestion(questionText)
          getAnswers(queryID)
          setVisible(true)
        }
        }
        title={item.subject}
        accessoryLeft={renderItemIcon}
        accessoryRight={renderItemAccessory}
        style={styles.listitem}
      />
      <Divider />
    </React.Fragment>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>{Math.random()}</Text>
      <AddQuestion />
      <List style={styles.list} data={db_questions} renderItem={renderItem} />

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        style={styles.modal}
      >
        <Card disabled={true}>
          <ScrollView>
            <Qcard query={question} />
            {answer.map(reply => <AnswerCard key={reply.id} reply={reply} />)}
          </ScrollView>

          <Button
            size="tiny"
            onPress={() => setVisible(false)}
            style={{ alignSelf: "center" }}
          >
            Close
          </Button>
        </Card>

      </Modal>
    </SafeAreaView>
  );
};

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
  modal: { width: "90%" },
  star: { color: 'red' }
});

export default MySkinTalk;
