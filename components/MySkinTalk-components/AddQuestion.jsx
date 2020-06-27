import React, { useRef } from "react";
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from "react-native";
import { Button, Modal, Icon as KittenIcon } from "@ui-kitten/components";
import Form from "react-native-form";



const AddQuestion = (props) => {

    const FormRef = useRef(null);

    const addQuestionHandler = () => {
        const { QuestionInput, SubjectInput } = FormRef.current.getValues()
        // console.log(QuestionInput, SubjectInput)
        if (SubjectInput.length < 2) {
            alert('Es fehlt ein Titel')
        } else if (QuestionInput.length < 2 && SubjectInput.length > 2) {
            alert('Bitte schreiben Sie eine Beschreibung')
        } else {
            props.onSubmit(SubjectInput, QuestionInput)
            props.setVisible(false)
        }
    }

    const PlusIcon = (props) => (
        <KittenIcon {...props} name='plus' />
    );
    return (
        <KeyboardAvoidingView style={styles.outercontainer} behavior="padding">
            <View>
                <Modal
                    visible={props.visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => props.setVisible(false)}
                >
                    <Form ref={FormRef}>
                        <TextInput
                            editable
                            multiline
                            maxLength={100}
                            numberOfLines={10}
                            placeholder='Frage...'
                            style={styles.inputSubject}
                            name='SubjectInput'
                            type="TextInput"
                        />
                        <TextInput
                            editable
                            maxLength={1000}
                            multiline
                            numberOfLines={10}
                            placeholder='Beschreibung...'
                            style={styles.inputQuestion}
                            name='QuestionInput'
                            type="TextInput"
                        />

                        <Button onPress={addQuestionHandler} type='Submit' style={styles.button} status='warning' accessoryRight={PlusIcon} />
                    </Form>
                </Modal>
            </View>
        </KeyboardAvoidingView>
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
        shadowOffset: { width: 1, height: 2 },
        alignSelf: 'center',
        padding: 10,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        margin: 2,
        alignSelf: 'stretch'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
    outercontainer: {
        // flex: 1,
        // width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
        // marginBottom: 0,
      },
    view: {
        flexWrap: 'wrap',
        width: '100%',
    },
});

export default AddQuestion