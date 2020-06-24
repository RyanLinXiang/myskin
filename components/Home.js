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
import UVIndex from "./Home-components/UVIndex";

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
          <UVIndex />
        </Card>

        <ImageBackground
          source={{
            uri:
              "https://askthescientists.com/wp-content/uploads/2017/08/skin-cells.jpg",
          }}
          style={styles.bgimagesStd}
          imageStyle={styles.bgimages}
          blurRadius={0}
        >
          <Card style={styles.cards}>
            <Text style={styles.text}>Erkrankung</Text>
          </Card>
        </ImageBackground>

        <ImageBackground
          source={{
            uri:
              "https://get.pxhere.com/photo/beach-sea-water-nature-sand-wing-sun-photography-warm-sunlight-flower-summer-swim-insect-holiday-blue-leisure-heat-fauna-invertebrate-stand-rays-parasol-recovery-macro-photography-sand-beach-radiation-heiss-sun-protection-uv-radiation-hitzefrei-uva-rays-712414.jpg",
          }}
          style={styles.bgimagesStd}
          imageStyle={styles.bgimages}
          blurRadius={0}
        >
          <Card style={styles.cards}>
            <Text style={styles.text}>Vorbeugung</Text>
          </Card>
        </ImageBackground>

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
    borderWidth: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "black",
  },
  bgimagesStd: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    marginBottom: 50,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "darkgrey",
    shadowOffset: { height: 10, width: 10 },
  },
  bgimages: { borderRadius: 20, opacity: 0.7 },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default Home;
