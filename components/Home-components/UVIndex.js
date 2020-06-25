import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

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

  componentDidMount = async () => {
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
        this.setState({
          uvi: json.result.uv,
          uvLoaded: true,
        });
      });
  };

  render() {
    const { location, geocode, uvi, uvLoaded, errorMessage } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {location && geocode && uvLoaded ? (
          <Text>
            {"Latitude: " +
              location.latitude.toFixed(2) +
              ", Longitude: " +
              location.longitude.toFixed(2) +
              " Geocode: " +
              geocode[0].city +
              " UV-Index: " +
              uvi.toFixed(1)}
          </Text>
        ) : (
          <Text>UV Index</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
});
