import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import * as globalcss from "../styles/globalcss";
import { Card, Text } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;

const Home = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Card style={styles.cards}>
          <Text style={styles.text}>UV-Index</Text>
        </Card>

        <ImageBackground
          source={{
            uri:
              "https://askthescientists.com/wp-content/uploads/2017/08/skin-cells.jpg",
          }}
          style={{
            width: screenWidth * 0.8,
            height: screenWidth * 0.8,
          }}
          imageStyle={{ borderRadius: 20, opacity: 0.7 }}
          blurRadius={0}
        >
          <Card style={styles.cards}>
            <Text style={styles.text}>Erkrankung</Text>
          </Card>
        </ImageBackground>
        <Card style={styles.cards}>
          <Text style={styles.text}>Vorbeugung</Text>
        </Card>
        <Card style={styles.cards}>
          <Text style={styles.text}>Diagnose</Text>
        </Card>
        <Card style={styles.cards}>
          <Text style={styles.text}>Lebensweise</Text>
        </Card>
        <Card style={styles.cards}>
          <Text style={styles.text}>Service</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: globalcss.container.backgroundColor,
  },
  cards: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    borderRadius: 20,
    marginBottom: 50,
    borderWidth: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default Home;
