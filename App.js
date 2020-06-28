import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Connect from "./components/Connect";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AsyncStorage from "@react-native-community/async-storage";

export default class App extends Component {
  state = {
    token: false,
    user_id: false,
    user_name: false,
    items: false,
    error: false,
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

  handlerLogout = async () => {
    try {
      await AsyncStorage.removeItem("@storage_token");
      this.setState({
        token: false,
        user_id: false,
        user_name: false,
        items: false,
        error: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

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
              handlerLogout={this.handlerLogout}
            />
          ) : (
            <Connect handlerConnect={this.handlerConnect} />
          )}
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
