import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import MySkinPredict from "./MySkinPredict";
import MySkinTalk from "./MySkinTalk";
import Home from "./Home";
import ViewBuilder from "./ViewBuilder";
import MySkinFavorites from "./MySkinFavorites";
import { Icon } from "@ui-kitten/components";
import { SafeAreaView, Image, StyleSheet } from "react-native";

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

  const CustomDrawerContent = (props) => {
    return (
      <React.Fragment>
        <SafeAreaView style={styles.headerContainer}>
          <Image
            source={require("../assets/logoavatar.png")}
            style={styles.headerLogo}
          />
        </SafeAreaView>

        <DrawerContentScrollView {...props} style={styles.navItemsList}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerContentOptions={navListItems}
        >
          <Drawer.Screen
            name="Home"
            component={home}
            options={{
              title: "Home",
              drawerIcon: ({ color }) => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill={color}
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
              drawerIcon: ({ color }) => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill={color}
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
              drawerIcon: ({ color }) => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill={color}
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
              drawerIcon: ({ color }) => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill={color}
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
              drawerIcon: ({ color }) => (
                <Icon
                  style={{ width: 25, height: 25 }}
                  fill={color}
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

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
  },
  headerLogo: { width: 250, height: 250 },
  navItemsList: { marginTop: -50 },
});

const navListItems = {
  activeTintColor: "white",
  inactiveTintColor: "darkgrey",
  activeBackgroundColor: "darkorange",
  inactiveBackgroundColor: "white",
};
