import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Connect from "./components/Connect";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

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
    );
  }
}
