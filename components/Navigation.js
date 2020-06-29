import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MySkinPredict from "./MySkinPredict";
import MySkinTalk from "./MySkinTalk";
import Home from "./Home";
import Playground from "./Playground";
import Reminder from "./Home-components/Reminder";

import ViewBuilder from "./ViewBuilder";
import MySkinFavorites from "./MySkinFavorites";

const Navigation = (props) => {
  function predict({ navigation }) {
    return (
      <ViewBuilder navigation={navigation}>
        <MySkinPredict {...props} />
      </ViewBuilder>
    );
  }

  function talk({ navigation }) {
    return (
      <ViewBuilder navigation={navigation}>
        <MySkinTalk {...props} />
      </ViewBuilder>
    );
  }

  function home({ navigation }) {
    return (
      <ViewBuilder navigation={navigation}>
        <Home />
      </ViewBuilder>
    );
  }
  function favorites({ navigation }) {
    return (
      <ViewBuilder navigation={navigation}>
        <MySkinFavorites {...props} />
      </ViewBuilder>
    );
  }

  function logout() {
    props.handlerLogout();
    return <React.Fragment></React.Fragment>;
  }

  function playground() {
    return <Playground {...props} />;
  }

  const Drawer = createDrawerNavigator();

  return (
    <React.Fragment>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="mySkin: Home"
            component={home}
            options={{ title: "Home" }}
          />
          <Drawer.Screen
            name="mySkin: Predict"
            component={predict}
            options={{ title: "MySkin: Predict" }}
          />
          <Drawer.Screen
            name="mySkin: Talk"
            component={talk}
            options={{ title: "MySkin: Talk" }}
          />
          <Drawer.Screen
            name="mySkin: Favorites"
            component={favorites}
            options={{ title: "MySkin: Favorites" }}
          />
          <Drawer.Screen
            name="Logout"
            component={logout}
            options={{ title: "Logout" }}
          />
          <Drawer.Screen
            name="Playground"
            component={playground}
            options={{ title: "Playground" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Navigation;