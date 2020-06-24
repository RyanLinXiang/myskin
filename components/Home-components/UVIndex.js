import React from "react";
import { Stylesheet,Text, View, ActivityIndicator } from "react-native";

var request = require("request");

var options = { method: 'GET',
 url: 'https://api.openuv.io/api/v1/uv',
 qs: { lat: '-33.34', lng: '115.342', dt: '2018-01-24T10:50:52.283Z' },
 headers: 
  { 'content-type': 'application/json',
    'x-access-token': '5e344565bfffc560eaea3c26d3e5e3d3'} };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

// const UVIndex = (props) => <Text>UV Index</Text>;

export default UVIndex;
