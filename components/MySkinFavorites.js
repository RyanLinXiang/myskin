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
import Icon from 'react-native-vector-icons/FontAwesome';
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";
import { ScrollView } from "react-native-gesture-handler";
import AddQuestion from "./MySkinTalk-components/AddQuestion";
import AddAnswer from "./MySkinTalk-components/AddAnswer";
import Qcard from './MySkinTalk-components/Qcard';
import AnswerCard from './MySkinTalk-components/AnswerCard';
import QuestionsList from "./MySkinTalk-components/QuestionsList";

const MySkinFavorites = (props) => {
    const { token, user_id, user_name, entriesPerScroll } = props;



    //* #### STATES #### *//

    const [visible, setVisible] = useState(false);
    const [question, setQuestion] = useState('question')
    const [answer, setAnswer] = useState([])
    const [favQuestionsList, setFavQuestionsList] = useState([])
    const [fav, setFav] = useState(false)



    //* #### FUNCTIONS/METHODS #### *//

    //### Question Functions ###//
    const findQuestion = (question) => {
        for (const query of favQuestionsList) {
            if (question === query.subject) {
                return query.id
            }
        }
    }
    const submitQuestion = (subject, question) => {
        const QUESTION = {
            "subject": subject,
            "question": question
        }
        connectAPI(
            "questions",
            "POST",
            QUESTION,
            token
        ).then((data) => {
            getFavorites();
            console.log(data);
            toggleFav(data.insertId)
            alert('Ihre Frage wurde erfolgreich gespeichert!');
        });
    }

    //### Answer Functions ###//
    const getAnswers = (id) => {
        connectAPI(
            "questions/" + id + "?start=0&numbers=" + entriesPerScroll,
            "GET",
            false,
            token
        ).then((data) => {
            for (const answerArray of data) {
                if (answerArray.length < 1) {
                    setAnswer([])
                    continue
                }
                for (const answer of answerArray) {
                    if (answer.question) {
                        setQuestion(answer)
                    } else if (answer.answer) {
                        setAnswer(prev => {
                            let noDuplicates = [...prev, answer].filter((item, i, self) => i === self.findIndex((replyObj) => (replyObj.id === item.id)));
                            return [...noDuplicates]
                        })
                    }
                }
            }
        });
    }
    const submitAnswer = (answer) => {
        const ANSWER = {
            "answer": answer,
            "question_id": question.id
        }
        connectAPI(
            "answers",
            "POST",
            ANSWER,
            token
        ).then((data) => {
            getQuestions();
            getAnswers(question.id)
            // console.log(data);
            alert('Ihre Antwort wurde erfolgreich gespeichert!');
        });
    }

    //### Favorite Functions ###//
    const getFavorites = () => {
        connectAPI(
            "favorites?start=0&numbers=" + entriesPerScroll,
            "GET",
            false,
            token
        ).then((data) => {
            setFavQuestionsList(data)
        });
    }
    const FavIcon = (toggleMe) => {
        return <Icon onPress={toggleMe} size={20} color={'yellow'} name="star" />
    }
    const toggleFav = (targetID) => {
        connectAPI(
            "favorites/" + targetID,
            "POST",
            false,
            token
        ).then((data) => {
            // console.log(data)
            let msg_log = (data.insertId == 0) ? 'UN-favorited' : 'favorited'
            console.log(msg_log)
            let msg = (data.insertId == 0) ? 'Die Frage wurde von Ihre Favoriten gelöscht' : 'Die Frage wurde erfolgreich als Favorit gespeichert!'
            alert(msg);
            getFavorites();
            setVisible(false)
        });
    }
    
    

    //* #### USE-EFFECT/COMPONENT-DID-MOUNT #### *//

    useEffect(() => {
        console.log('favorites screen updated')
        getFavorites();
    }, []);



    //* #### FINAL RENDER #### *//

    return (
        <SafeAreaView style={styles.container}>
            <Text>{Math.random()}</Text>
            <AddQuestion onSubmit={(subject, question) => submitQuestion(subject, question)} />
            <QuestionsList
                style={styles.list}
                data={favQuestionsList}
                findQuestion={findQuestion}
                getAnswers={getAnswers}
                visible={visible}
                setVisible={setVisible}
                favIcon={() => FavIcon(console.log(''))} />

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
                style={styles.modal}
            >
                <Card disabled={true}>
                    <ScrollView>
                        <Qcard
                            query={question}
                            favIcon={() => FavIcon(() => toggleFav(question.id))} />
                        {answer.map(reply => <AnswerCard key={reply.id}
                            reply={reply} />)}
                    </ScrollView>
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
    modal: { width: "90%" },
    star: { color: 'red' }
});



//* #### EXPORT #### *//

export default MySkinFavorites;
