import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Picker,
  KeyboardAvoidingView,
} from "react-native";
import Form from "react-native-form";

export default class Playground extends Component {
  FormRef = React.createRef();
  state = { message: "" };
  handlerChange = (text) => {
    this.setState({ message: text });
  };

  handlerSubmit = () => {
    const { TextTest, PickerSelect } = this.FormRef.current.getValues();

    this.setState({ message: TextTest });
    console.log(TextTest, PickerSelect);
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.outercontainer} behavior="padding">
        <Form ref={this.FormRef}>
          <View style={styles.innercontainer}>
            <View style={styles.textinputcontainer}>
              <TextInput
                type="TextInput"
                name="TextTest"
                placeholder="My text"
                value={this.state.message}
                onChangeText={this.handlerChange}
                style={styles.textinput}
              />
            </View>
            <View style={styles.pickercontainer}>
              <Picker
                type="Picker"
                name="PickerSelect"
                itemStyle={styles.selection}
              >
                <Picker.Item label="All" />
                <Picker.Item label="One" value={1} />
                <Picker.Item label="Two" value={2} />
                <Picker.Item label="Three" value={3} />
              </Picker>
            </View>
            <View style={styles.buttoncontainer}>
              <Button onPress={this.handlerSubmit} title="Post" />
            </View>
          </View>
        </Form>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  outercontainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  innercontainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  selection: {
    // fontFamily: "Avenir",
    fontSize: 16,
    height: 40,
  },
  textinput: {
    // fontFamily: "Avenir",
    fontSize: 16,
    height: 38,
    borderTopColor: "#E4E4E4",
    borderBottomColor: "#E4E4E4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 10,
  },
  textinputcontainer: { flex: 4 },
  pickercontainer: { flex: 1 },
  buttoncontainer: { flex: 1 },
});
