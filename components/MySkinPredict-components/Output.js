import React from "react";
import { StyleSheet, Text, Image, ImageBackground } from "react-native";
import { BarIndicator, WaveIndicator } from "react-native-indicators";
import { Button, Icon } from "@ui-kitten/components";
import * as Animatable from "react-native-animatable";

const Output = (props) => {
  const { loading, image, predictions, isModelReady } = props;

  let output;

  if (!loading) {
    if (image && !predictions) output = <Image source={image} />;
    else if (image && predictions)
      output = (
        <React.Fragment>
          <ImageBackground
            source={image}
            blurRadius={50}
            style={styles.predictedImage}
          >
            <Text style={styles.predictedNumberHeader}>
              Wahrscheinlichkeit für Melanom:
            </Text>
            <Text style={styles.predictedNumber}>
              {Math.round(predictions.dataSync()[0] * 100)}
              <Text style={styles.predictedNumberPercentage}> %</Text>
            </Text>
          </ImageBackground>
        </React.Fragment>
      );
    else if (isModelReady && !image)
      output = (
        <Animatable.View animation={"wobble"} duration={3000}>
          <Icon
            style={{
              width: 100,
              height: 100,
            }}
            name="image-outline"
          />
        </Animatable.View>
      );
  } else {
    switch (loading) {
      case "model":
        output = (
          <BarIndicator size={80} style={styles.indicator} color="darkorange" />
        );
        break;
      case "predict":
        output = (
          <WaveIndicator
            size={80}
            count={10}
            style={styles.indicator}
            color="darkorange"
          />
        );
      default:
        break;
    }
  }

  return output;
};

const styles = StyleSheet.create({
  predictedImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  predictedNumberHeader: { fontSize: 12, color: "white" },
  predictedNumberPercentage: { fontSize: 22, color: "white" },
  predictedNumber: {
    fontSize: 58,
    fontWeight: "bold",
    color: "white",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "darkgrey",
    shadowOffset: { height: 10, width: 10 },
  },
  indicator: {
    flex: 1,
  },
});

export default Output;
