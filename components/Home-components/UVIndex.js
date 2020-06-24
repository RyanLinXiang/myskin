import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import GeoLocation from './location';

export default class UVIndex extends Component {
  state = {
      uvLoaded: false,
      error: null,
      uvi: null,
  };

  componentDidMount(){
      navigator.geolocation.getCurrentPosition(
          position => {
              this._getUVI(position.coords.latitude, position.coords.longitude);
          },




          error => {
              this.setState({
                  error
              });
          },
      );
  }
  
  _getUVI = (lat, lon) => {

    console.log(lat,lon)

      fetch(
          `http://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lon}`,
          {
              headers: {
                  "x-access-token": "5e344565bfffc560eaea3c26d3e5e3d3"
              },
          })
      .then(response => response.json())
      .then(json => {
          this.setState({
              uvi: json.result.uv,
              uvLoaded: true,
          })
      });
  };

  render() {

      const { uvLoaded, error, uvi, } = this.state;

      console.log(this.state)
      console.log(uvi)

      return (
          <View style={styles.container}>
              <StatusBar hidden={true} />
          <Text>{uvi}</Text>
          <GeoLocation />
          </View>
      );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
errorText: {
  color: 'red',
  backgroundColor: 'transparent',
  marginBottom: 40,
},
loading: {
  flex: 1,
  backgroundColor: '#FDF6AA',
  justifyContent: 'flex-end',
  paddingLeft: 25,
},
loadingText: {
  fontSize: 38,
  marginBottom: 90,
},
});