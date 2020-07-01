//* #### IMPORTS #### *//
import React, { useRef } from "react";
import { StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { Button, Modal, Icon as KittenIcon } from "@ui-kitten/components";
import Form from "react-native-form";

const AddQuestion = (props) => {
  //* #### VARIABLES/HANDLERS #### *//
  const FormRef = useRef(null);

  const addQuestionHandler = () => {
    const { QuestionInput, SubjectInput } = FormRef.current.getValues();
    if (SubjectInput.length < 2) {
      alert("Es fehlt ein Titel");
    } else if (QuestionInput.length < 2 && SubjectInput.length > 2) {
      alert("Bitte schreiben Sie eine Beschreibung");
    } else {
      props.onSubmit(SubjectInput, QuestionInput);
      props.setVisible(false);
    }
  };

  //* #### FINAL RENDER #### *//
  return (
    <Modal
      visible={props.visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => props.setVisible(false)}
    >
      <ScrollView>
        <Form ref={FormRef}>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              editable
              multiline
              maxLength={100}
              numberOfLines={10}
              placeholder="Betreff..."
              style={styles.inputSubject}
              name="SubjectInput"
              type="TextInput"
            />
            <TextInput
              editable
              maxLength={1000}
              multiline
              numberOfLines={10}
              placeholder="Frage..."
              style={styles.inputQuestion}
              name="QuestionInput"
              type="TextInput"
            />
            <Button
              onPress={addQuestionHandler}
              type="Submit"
              size="small"
              style={styles.button}
              size="small"
              status="warning"
            >FRAGE STELLEN</Button>
          </KeyboardAvoidingView>
        </Form>
      </ScrollView>
    </Modal>
  );
};

//* #### STYLESHEET #### *//
const styles = StyleSheet.create({
  alerts: {
    color: "darkorange",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 2 },
    alignSelf: "center",
    padding: 10,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  button: {
    margin: 10,
    alignSelf: "stretch",
    marginBottom: 150 // Boxes in Modal TOP-Position :) -> Keyboard
  },
  indicator: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputSubject: {
    width: 300,
    margin: 10,
    padding: 10,
    alignSelf: "stretch",
    fontSize: 20,
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  inputQuestion: {
    width: 300,
    margin: 10,
    padding: 10,
    height: 150,
    alignSelf: "stretch",
    fontSize: 17,
    height: 150,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
});

//* #### EXPORT #### *//
export default AddQuestion;
