import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class UVIndex extends Component {
  state = {
    location: null,
    geocode: null,
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
  };

  render() {
    const { location, geocode, errorMessage } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {location && geocode ? (
          <Text>
            {"Latitude: " +
              location.latitude +
              ", Longitude: " +
              location.longitude +
              " Geocode: " +
              geocode[0].city}
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

