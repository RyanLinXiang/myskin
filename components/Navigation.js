import React from "react";
import { NavigationContainer, View } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MySkinPredict from "./MySkinPredict";
import MySkinTalk from "./MySkinTalk";
import Home from "./Home";
import ViewBuilder from "./ViewBuilder";
import MySkinFavorites from "./MySkinFavorites";
import { Icon } from "@ui-kitten/components";

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

  const Drawer = createDrawerNavigator();

  return (
    <React.Fragment>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={home}
            options={{
              title: "Home",
              drawerIcon: () => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill="darkgrey"
                  name="home-outline"
                />
              ),
            }}
          />
          <Drawer.Screen
            name="mySkin: Predict"
            component={predict}
            options={{
              title: "mySkin: Predict",
              drawerIcon: () => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill="darkgrey"
                  name="bar-chart-outline"
                />
              ),
            }}
          />
          <Drawer.Screen
            name="mySkin: Talk"
            component={talk}
            options={{
              title: "mySkin: Talk",
              drawerIcon: () => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill="darkgrey"
                  name="message-circle-outline"
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Lieblingsfragen"
            component={favorites}
            options={{
              title: "Lieblingsfragen",
              drawerIcon: () => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill="darkgrey"
                  name="heart-outline"
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Logout"
            component={logout}
            options={{
              title: "Logout",
              drawerIcon: () => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill="darkgrey"
                  name="log-out-outline"
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Navigation;
