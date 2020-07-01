import React from "react";
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  Avatar,
} from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";

const ViewBuilder = (props) => {
  const navigation = props.navigation;

  const MenuIcon = (props) => <Icon {...props} name="menu-outline" />;
  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
  const FavoritesIcon = (props) => <Icon {...props} name="heart-outline" />; //Dan added this

  const toggleAction = (handlerToggleDrawer, handlerNavigate) => {
    return (
      <React.Fragment>
        <TopNavigationAction
          icon={MenuIcon}
          onPress={() => navigation.toggleDrawer()}
        />
        <TopNavigationAction
          icon={HomeIcon}
          onPress={() => navigation.navigate("Home")}
        />
        <TopNavigationAction
          icon={FavoritesIcon}
          onPress={() => navigation.navigate("Lieblingsfragen")}
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
      <SafeAreaView style={styles.container}>
        <TopNavigation
          accessoryLeft={() =>
            toggleAction(navigation.toggleDrawer, navigation.navigate)
          }
          title={renderTitle}
          alignment="center"
        />
      </SafeAreaView>
      {props.children}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginHorizontal: 16,
  },
});

export default ViewBuilder;
