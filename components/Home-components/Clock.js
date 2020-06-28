import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.skinScreening);
  }

  getTimeUntil(skinScreening) {
    const time = Date.parse(skinScreening) - Date.parse(new Date());

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.skinScreening), 1000);
  }

  render() {
    return (
      <View>
        <Text> {this.state.days} Tage </Text>
        <Text> {this.state.hours} Stunden </Text>
        <Text> {this.state.minutes} Minuten </Text>
        <Text> {this.state.seconds} Sekunden </Text>
      </View>
    );
  }
}
