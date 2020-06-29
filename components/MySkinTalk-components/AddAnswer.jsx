//* #### IMPORTS #### *//

import React, { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Divider } from "@ui-kitten/components";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as globalcss from "../../styles/globalcss";

const AddAnswer = (props) => {

    const [showInput, setShowInput] = useState(false)
    const [answer, setAnswer] = useState('')
    const [buttonText, setButtonText] = useState('ANTWORTEN')
    const buttonHandler = () => {
        if (buttonText == 'ANTWORTEN') {
            setShowInput(true)
            setButtonText('SPEICHERN') //'ABSENDEN'
        } else {
            props.onSubmit(answer)
            setShowInput(false)
            setButtonText('ANTWORTEN')
            setAnswer('')
        }
    };
  

    return (
        <KeyboardAvoidingView style={styles.outercontainer} behavior="padding">
        <Divider />
            <View style={styles.questionContainer}>
                {showInput ? ( <TextInput
                    editable
                    multiline
                    maxLength={1000}
                    numberOfLines={10}
                    placeholder='Antwort...'
                    style={styles.inputSubject}
                    onChangeText={nextValue => setAnswer(nextValue)}
                    value={answer}
                /> ): (false)}
                <Button
                    size="tiny"
                    onPress={buttonHandler}
                    style={ styles.button }
                    status="warning"
                >
                    {buttonText}
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
  }


const styles = StyleSheet.create({
    questionContainer: {
        flex: 1, 
        backgroundColor: "#fff",
        // borderBottomWidth: 1,
        // borderColor: 'red',
        paddingBottom: 40,
        marginBottom: 10,
    },
    inputSubject: {
        width: 300,
        marginVertical: 15,
        padding: 10,
        alignSelf: 'stretch',
        // fontSize: 15,
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    button:{
        alignSelf:'stretch',
        marginVertical: 10,  
    }
});


export default AddAnswer;
