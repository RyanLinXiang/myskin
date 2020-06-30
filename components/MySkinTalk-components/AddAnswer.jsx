//* #### IMPORTS #### *//

import React, { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Dimensions } from "react-native";
import { Button } from "@ui-kitten/components";
import { TextInput } from "react-native-gesture-handler";
const screenWidth = Dimensions.get("window").width;

const AddAnswer = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [answer, setAnswer] = useState("");
  const [buttonText, setButtonText] = useState("ANTWORTEN");
  const buttonHandler = () => {
    if (buttonText == "ANTWORTEN") {
      setShowInput(true);
      setButtonText("ABSENDEN");
    } else if (answer.length<2) {
      alert("Leere Antworten können nicht geschpeichert werden.")
    } else {
      props.onSubmit(answer);
      setShowInput(false);
      setButtonText("ANTWORTEN");
      setAnswer("");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.outercontainer} behavior="padding">
      <View style={styles.questionContainer}>
        {showInput ? (
          <TextInput
            editable
            multiline
            maxLength={1000}
            numberOfLines={10}
            placeholder="Antwort..."
            style={styles.inputSubject}
            onChangeText={(nextValue) => setAnswer(nextValue)}
            value={answer}
          />
        ) : (
          false
        )}
        <Button size="small" onPress={buttonHandler} status="warning">
          {buttonText}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    paddingBottom: 10,
    marginBottom: 10,
  },
  inputSubject: {
    width: screenWidth * 0.8,
    width: 300,
    margin: 10,
    padding: 10,
    alignSelf: "stretch",
    fontSize: 16,
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
});

export default AddAnswer;
