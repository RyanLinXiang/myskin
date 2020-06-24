import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MySkinPredict from "./MySkinPredict";
import MySkinTalk from "./MySkinTalk";
import Home from "./Home";
import { ModalWithBackdropShowcase as Playground } from "./Playground";
import {
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  Avatar,
} from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as globalcss from "../styles/globalcss";

const Navigation = (props) => {
  function predict() {
    return <MySkinPredict {...props} />;
  }

  function talk() {
    return <MySkinTalk {...props} />;
  }

  function home({ navigation }) {
    return (
      <View style={styles.container}>
        <SafeAreaView
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            zIndex: "200",
            width: "100%",
          }}
        >
          <TopNavigation
            accessoryLeft={() =>
              toggleAction(navigation.toggleDrawer, navigation.navigate)
            }
            title={renderTitle}
            alignment="center"
          />
        </SafeAreaView>
        <Home />
      </View>
    );
  }

  function playground() {
    return <Playground {...props} />;
  }

  const Drawer = createDrawerNavigator();
  const MenuIcon = (props) => <Icon {...props} name="menu-outline" />;
  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

  const toggleAction = (handlerToggleDrawer, handlerNavigate) => {
    return (
      <React.Fragment>
        <TopNavigationAction
          icon={MenuIcon}
          onPress={() => handlerToggleDrawer()}
        />
        <TopNavigationAction
          icon={HomeIcon}
          onPress={() => handlerNavigate("mySkin: Home")}
        />
      </React.Fragment>
    );
  };

  const renderTitle = (props) => {
    return (
      <View style={styles.titleContainer}>
        <Avatar
          style={styles.avatar}
          source={require("../assets/logoavatar.png")}
          size="giant"
        />
      </View>
    );
  };

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
            name="Playground"
            component={playground}
            options={{ title: "Playground" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: globalcss.container.backgroundColor },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginHorizontal: 16,
  },
});

export default Navigation;
