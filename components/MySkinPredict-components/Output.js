import React from "react";
import { BarIndicator, WaveIndicator } from "react-native-indicators";
import { Icon } from "@ui-kitten/components";
import * as Animatable from "react-native-animatable";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";

const Output = (props) => {
  const { loading, image, predictions, isModelReady, error } = props;
  let output;

  if (!error) {
    if (!loading) {
      if (image && !predictions) output = <Image source={image} />;
      else if (image && predictions) {
        output = (
          <React.Fragment>
            <ImageBackground
              source={image}
              blurRadius={50}
              style={styles.predictedImage}
              imageStyle={styles.predictedImageExtras}
            >
              <View
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 150,
                }}
              >
                <Animatable.Text
                  animation={"pulse"}
                  duration={2000}
                  style={styles.predictedNumberHeader}
                >
                  <Text>Wahrscheinlichkeit für Melanom:</Text>
                </Animatable.Text>

                <Animatable.Text
                  animation={"bounceIn"}
                  duration={5000}
                  style={styles.predictedNumber}
                >
                  <Text>
                    {Math.round(predictions.dataSync()[0] * 100)}
                    <Text style={styles.predictedNumberPercentage}> %</Text>
                  </Text>
                </Animatable.Text>
              </View>
            </ImageBackground>
          </React.Fragment>
        );
      } else if (isModelReady && !image)
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
            <BarIndicator
              size={80}
              style={styles.indicator}
              color="darkorange"
            />
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
  } else
    output = (
      <React.Fragment>
        <ImageBackground
          source={image}
          blurRadius={50}
          style={styles.predictedImage}
          imageStyle={styles.predictedImageExtras}
        >
          <Text>Bitte versuchen Sie es nochmal.</Text>
        </ImageBackground>
      </React.Fragment>
    );

  return output;
};

const styles = StyleSheet.create({
  predictedImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  predictedImageExtras: { borderRadius: 150 },
  predictedNumberHeader: { fontSize: 12, color: "white" },
  predictedNumberPercentage: { fontSize: 24, color: "white" },
  predictedNumber: {
    fontSize: 64,
    fontWeight: "bold",
    color: "darkorange",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: { height: 10, width: 10 },
  },
  indicator: {
    flex: 1,
  },
});

export default Output;
