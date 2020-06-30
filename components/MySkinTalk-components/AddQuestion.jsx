import React, { useRef } from "react";
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { Button, Modal, Icon as KittenIcon } from "@ui-kitten/components";
import Form from "react-native-form";

const AddQuestion = (props) => {
  const FormRef = useRef(null);

  const addQuestionHandler = () => {
    const { QuestionInput, SubjectInput } = FormRef.current.getValues();
    // console.log(QuestionInput, SubjectInput)
    if (SubjectInput.length < 2) {
      alert("Es fehlt ein Titel");
    } else if (QuestionInput.length < 2 && SubjectInput.length > 2) {
      alert("Bitte schreiben Sie eine Beschreibung");
    } else {
      props.onSubmit(SubjectInput, QuestionInput);
      props.setVisible(false);
    }
  };

  const PlusIcon = (props) => <KittenIcon {...props} name="plus" />;

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
              status="warning"
            >
              FRAGE STELLEN
            </Button>
            </KeyboardAvoidingView>
          </Form>
        </ScrollView>
     
    </Modal>
  );
};

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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    margin: 10,
    alignSelf: "stretch",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
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
    fontSize: 17,
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
    alignSelf: "stretch",
    fontSize: 17,
    height: 150,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#FFF",
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
    flexWrap: "wrap",
    width: "100%",
  },
});

export default AddQuestion;
