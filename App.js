import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Connect from "./components/Connect";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AsyncStorage from "@react-native-community/async-storage";

export default class App extends Component {
  state = {
    token: false,
    user_id: false,
    user_name: false,
    items: false,
    error: false,
    view: "home",
  };

  entriesPerScroll = 10;

  handlerConnect = async (token, user_id, user_name, error = false) => {
    if (!error) {
      try {
        await AsyncStorage.setItem("@storage_token", token);
        this.setState({
          token: token,
          user_id: user_id,
          user_name: user_name,
          items: false,
          error: false,
        });
      } catch (e) {
        console.log(e);
      }
    } else this.setState({ error: error });
  };

<<<<<<< HEAD
  handlerNavigation = (view) => {
    switch (view) {
      case "predict":
        this.setState({ view: "predict" });

        break;
      case "home":
        this.setState({ view: "home" });

        break;
      case "talk":
        this.setState({ view: "talk" });

        break;

      default:
        this.setState({ view: "talk" });
        break;
=======
  componentDidMount = async () => {
    try {
      const token = await AsyncStorage.getItem("@storage_token");
      if (token !== null) {
        const { user_id, user_name } = require("jwt-decode")(token);
        this.setState({
          token: token,
          user_id: user_id,
          user_name: user_name,
          items: false,
          error: false,
        });
      }
    } catch (e) {
      console.log(e);
>>>>>>> master
    }
  };

  render() {
    const { token, user_id, user_name } = this.state;
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          {token ? (
            <Navigation
              token={token}
              user_id={user_id}
              user_name={user_name}
              entriesPerScroll={this.entriesPerScroll}
            />
          ) : (
            <Connect handlerConnect={this.handlerConnect} />
          )}
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
