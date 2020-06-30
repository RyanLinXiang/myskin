//* #### IMPORTS #### *//

import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
    Button,
    Card,
    Modal,
    Text,
    Icon as KittenIcon,
} from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";
import AddQuestion from "./MySkinTalk-components/AddQuestion";
import AddAnswer from "./MySkinTalk-components/AddAnswer";
import Qcard from "./MySkinTalk-components/Qcard";
import AnswerCard from "./MySkinTalk-components/AnswerCard";
import QuestionsList from "./MySkinTalk-components/QuestionsList";
import SearchField from "./MySkinTalk-components/SearchField";

const MySkinFavorites = (props) => {
    const { token, user_id, user_name, entriesPerScroll } = props;

    //* #### STATES #### *//

    const [visible, setVisible] = useState(false);
    const [db_fav_questions, set_db_fav_questions] = useState([]);
    const [showData, setShowData] = useState([]);
    const [qANDa, setQandA] = useState({question: '', answer: ''});
    const [inputVisible, setInputVisible] = useState(false);

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
            setQandA({question: { ...data[0], isFav: isFavoriteOrNot }, answer: allAnswers});
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
            "favorites?start=0&numbers=" + entriesPerScroll, "GET", false, token).then((data) => {
                data.forEach((element) => {
                    element.isFav = true;
                }); // add prop isFav
                if (data.length > showData.length || update) {
                    setShowData(data);
                }
                set_db_fav_questions(data)
            });
    }
    const toggleFav = (targetID) => {
        connectAPI(
            "favorites/" + targetID, "POST", false, token).then((data) => {
                getFavorites('update!');
            });
    }

    //### Search Functions ###//
    const searchKeyword = (keyword) => {
        const encoded = encodeURIComponent(keyword)
        connectAPI(
            "questions/search/" + encoded + "?start=0&numbers=" + entriesPerScroll, "GET", false, token).then((data) => {
                let favSearch = data.filter(query => db_fav_questions.some(favQuery => favQuery.id === query.id)); //only keep if searched question is a favorite
                setShowData(favSearch)
            });
    }



    //* #### ACCESSORY COMPONENTS TO BE RENDERED #### *//
    // &#9734; => NOT fav
    // &#9733; => IS fav
    const FavButton = (query) => (
        <TouchableOpacity
            status="warning"
            size='large'
            onPress={() => {
                if (query.question !== undefined) {
                  toggleFav(query.id);
                  setQandA(prev => ({question: {...query, isFav: !query.isFav}, answer: prev.answer}));
                }
              }}
        >
            {query.isFav ? <Text style={styles.button}>&#9733;</Text> :
                <Text style={styles.button}>&#9734;</Text>}
        </TouchableOpacity>
    );

    const PlusIcon = (props) => <KittenIcon {...props} name='plus' />;

    const InputField = () => (
        <>
            <SearchField placeholder={'Favoriten-Suche...'} onSubmit={searchKeyword} />
            {showData.length < db_fav_questions.length ? <Button
                style={styles.button}
                status='danger'
                onPress={() => getFavorites()}
            >
                RESET SUCHE
            </Button> : null}
            <Button
                style={styles.button}
                status='warning'
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
    const CardPopup = () => {
        return qANDa.question.subject ? (
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
                style={styles.modal}
            >
                <Card disabled={true}>
                    <Qcard
                        query={qANDa.question}
                        favButton={FavButton}
                    />
                    {qANDa.answer.map(reply => <AnswerCard key={reply.id}
                        reply={reply} />)}
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


    //* #### USE-EFFECT/COMPONENT-DID-MOUNT #### *//

    useEffect(() => {
        getFavorites();
    }, []);



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
        fontSize: 25,
        color: 'darkorange',
    },
    inputField: {
        height: 120,
        marginBottom: 10,
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
