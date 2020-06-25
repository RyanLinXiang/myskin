//* #### IMPORTS #### *//

import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
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
import { ScrollView, TextInput } from "react-native-gesture-handler";

const AddAnswer = (props) => {

    const [showInput, setShowInput] = useState(false)
    const [answer, setAnswer] = useState('')
    const [buttonText, setButtonText] = useState('ANTWORTEN')
    const buttonHandler = () => {
        if (buttonText == 'ANTWORT') {
            setShowInput(true)
            setButtonText('ABSENDEN')
        } else {
            props.onSubmit(answer)
            setShowInput(false)
            setButtonText('ANTWORTEN')
            setAnswer('')
        }

    }

    return (
        <View style={styles.questionContainer}>
            {showInput ? <TextInput
                editable
                multiline
                maxLength={1000}
                numberOfLines={10}
                placeholder='Antwort...'
                style={styles.inputSubject}
                onChangeText={nextValue => setAnswer(nextValue)}
                value={answer}
            /> : false}
            <Button
                size="tiny"
                onPress={buttonHandler}
            >
                {buttonText}
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    questionContainer: {
        flex: 1,
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
        paddingBottom: 10,
        marginBottom: 10,
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
});

export default AddAnswer