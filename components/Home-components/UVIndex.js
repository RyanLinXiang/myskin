import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Card, Text } from "@ui-kitten/components";
import ArticleUVIndex from "./articles/ArticleUVIndex";
import * as globalcss from "../../styles/globalcss";

export default class UVIndex extends Component {
  state = {
    location: null,
    geocode: null,
    uvi: null,
    uvLoaded: false,
    errorMessage: "",
  };

  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };

  componentWillUnmount() {
    console.log("Unmount");
    this.mount = false;
  }

  componentDidMount = async () => {
    this.mount = true;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
    this._getUVI(latitude, longitude);
  };

  _getUVI = (latitude, longitude) => {
    fetch(`http://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`, {
      headers: {
        "content-type": "application/json",
        "x-access-token": "5e344565bfffc560eaea3c26d3e5e3d3",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let uvi;
        if (json.error) uvi = 4;
        else uvi = json.result.uv.toFixed(1);
        this.setState({
          uvi: uvi,
          uvLoaded: true,
        });
      });
  };

  getCurrentDate = () => {
    const today = new Date();
    let hh = today.getHours();
    let min = today.getMinutes();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;
    hh = hh < 10 ? "0" + hh : hh;
    min = min < 10 ? "0" + min : min;

    return dd + "." + mm + "." + yyyy + ", " + hh + ":" + min;
  };

  render() {
    const { location, geocode, uvi, uvLoaded, errorMessage } = this.state;

    return !this.props.api ? (
      <ArticleUVIndex />
    ) : (
      <Card style={styles.cards}>
        {location && geocode && uvLoaded ? (
          <React.Fragment>
            <Text style={styles.titleUVIndex}>UV-Index</Text>
            <Text style={styles.UVIndex}>{uvi}</Text>
            <Text style={styles.textUVIndex}> {geocode[0].city} </Text>
            <Text style={styles.dateUVIndex}> {this.getCurrentDate()} </Text>
          </React.Fragment>
        ) : (
          <ActivityIndicator size="large" color="#CCCCCC" />
        )}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cards: globalcss.cards,
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 90,
  },
  textUVIndex: {
    color: "white",
    fontSize: 20,
    textAlign: "right",
    fontWeight: "bold",
  },
  titleUVIndex: {
    color: "white",
    fontSize: 30,
    textAlign: "right",
    fontWeight: "bold",
  },
  UVIndex: {
    color: "darkorange",
    fontSize: 90,
    textAlign: "right",
    fontWeight: "bold",
  },
  dateUVIndex: {
    color: "darkorange",
    fontSize: 20,
    textAlign: "right",
    fontWeight: "bold",
  },
});
