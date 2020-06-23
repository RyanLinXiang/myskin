import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MySkinPredict from "./MySkinPredict";
import MySkinTalk from "./MySkinTalk";
import Home from "./Home";

const Navigation = (props) => {
  function predict() {
    return <MySkinPredict {...props} />;
  }

  function talk() {
    return <MySkinTalk {...props} />;
  }

  function home() {
    return <Home />;
  }

  const Drawer = createDrawerNavigator();

  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="mySkin: Home" component={home} />
        <Drawer.Screen name="mySkin: Predict" component={predict} />
        <Drawer.Screen name="mySkin: Talk" component={talk} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Navigation;
