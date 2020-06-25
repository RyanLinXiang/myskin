import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, TextInput } from "react-native";
import {
    Button,
    //   Card,
    Modal,
    Text,
    //   List,
    //   ListItem,
    Icon as KittenIcon,
    Input,
    //   Divider,
} from "@ui-kitten/components";
import Icon from 'react-native-vector-icons/FontAwesome';
// import connectAPI from "../helpers/api";
// import * as globalcss from "../styles/globalcss";
// import FavButoon from "./MySkinTalk-components/FavButton";
// import { ScrollView } from "react-native-gesture-handler";

const AddQuestion = (props) => {
    const [subject, setSubject] = useState('');
    const [question, setQuestion] = useState('');
    const [visible, setVisible] = useState(false);
    const [subjAlert, setSubjAlert] = useState(false);
    const [questAlert, setQuestAlert] = useState(false);

    const subjAlertMsg = () => (<Text style={styles.alerts}>Es fehlt ein Titel</Text>);
    const questAlertMsg = () => (<Text style={styles.alerts}>Bitte schreiben Sie eine Beschreibung</Text>);

    const PlusIcon = (props) => (
        <KittenIcon {...props} name='plus' />
    );
    return (
        <View>
            <Button style={styles.button} status='warning' accessoryRight={PlusIcon} onPress={() => setVisible(true)}>FRAGE STELLEN</Button>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <TextInput
                    editable
                    multiline
                    maxLength={100}
                    numberOfLines={10}
                    placeholder='Frage...'
                    style={styles.inputSubject}
                    onChangeText={nextValue => setSubject(nextValue)}
                    value={subject}
                />
                {subjAlert ? subjAlertMsg(): false}
                <TextInput
                    editable
                    maxLength={1000}
                    multiline
                    numberOfLines={10}
                    placeholder='Beschreibung...'
                    style={styles.inputQuestion}
                    onChangeText={nextValue => setQuestion(nextValue)}
                    value={question}
                />
                {questAlert ? questAlertMsg(): false}

                <Button onPress={() => {
                    if (subject.length < 2) {
                        setSubjAlert(true)
                        setQuestAlert(false)
                    } else if (question.length < 2 && subject.length > 2) {
                        setQuestAlert(true)
                    } else {
                        props.onSubmit(subject, question)
                        setVisible(false)
                        setQuestion('')
                        setSubject('')
                        setQuestAlert(false)
                        setSubjAlert(false)
                    }
                }} style={styles.button} status='warning' accessoryRight={PlusIcon} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    alerts: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 2},
        alignSelf:'center',
        padding: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
        alignSelf: 'stretch'
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputSubject: {
        width: 300,
        margin: 10,
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 20,
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    inputQuestion: {
        width: 300,
        margin: 10,
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 20,
        height: 400,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    view: {
        flexWrap: 'wrap',
        width: '100%',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default AddQuestion