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

  handlerConnect = (token, user_id, user_name, error = false) => {
    if (!error) {
      this.setState({
        token: token,
        user_id: user_id,
        user_name: user_name,
        items: false,
        error: false,
      });
    } else this.setState({ error: error });
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
