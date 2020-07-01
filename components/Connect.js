import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Button,
  Image,
  TextInput,
  Alert,
} from "react-native";
import Form from "react-native-form";
import * as globalcss from "../styles/globalcss";
import connectAPI from "../helpers/api";

const Connect = (props) => {
  const [mode, toggleMode] = useState("login");

  const FormRef = React.createRef();

  const handlerToggleMode = () => {
    mode === "login" ? toggleMode("register") : toggleMode("login");
  };

  const handlerLogin = () => {
    const { user_name, password } = FormRef.current.getValues();
    connectAPI("login", "POST", { user_name, password }, false).then((data) => {
      if (!data.error)
        props.handlerConnect(data.token, data.user_id, data.user_name, false);
      else {
        Alert.alert("Fehler", data.error, [
          {
            text: "OK",
          },
        ]);
      }
    });
  };

  const handlerRegister = () => {
    const { user_name, password, email } = FormRef.current.getValues();
    connectAPI("register", "POST", { user_name, password, email }, false).then(
      (data) => {
        if (!data.error) {
          Alert.alert("Wilkommen!", data.success, [
            {
              text: "OK",
            },
          ]);

          handlerToggleMode();
        } else {
          Alert.alert("Fehler", data.error, [
            {
              text: "OK",
            },
          ]);
        }
      }
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require("../assets/logo.png")} style={styles.logoImage} />
      <Form ref={FormRef}>
        <TextInput
          style={styles.input}
          placeholder="Your user name"
          type="TextInput"
          name="user_name"
          textContentType="username"
          autoCapitalize="none"
          maxLength={10}
        />
        <TextInput
          style={styles.input}
          placeholder="Your password"
          type="TextInput"
          name="password"
          textContentType="password"
          secureTextEntry={true}
          maxLength={10}
        />
        {mode === "register" ? (
          <React.Fragment>
            <TextInput
              style={styles.input}
              placeholder="Your email"
              type="TextInput"
              name="email"
              textContentType="emailAddress"
              maxLength={50}
            />
            <Button title="Register" type="Submit" onPress={handlerRegister} />
            <Button title="Login" type="Submit" onPress={handlerToggleMode} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button title="Login" type="Submit" onPress={handlerLogin} />
            <Button
              title="Register"
              type="Submit"
              onPress={handlerToggleMode}
            />
          </React.Fragment>
        )}
      </Form>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: globalcss.container,
  logoImage: { width: 250, height: 250, margin: 10 },
  input: {
    // fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
});

export default Connect;
