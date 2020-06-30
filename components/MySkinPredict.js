import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { BarIndicator, WaveIndicator } from "react-native-indicators";
import { Button, Icon } from "@ui-kitten/components";
import * as tf from "@tensorflow/tfjs";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as jpeg from "jpeg-js";
import * as globalcss from "../styles/globalcss";
import BlinkView from "react-native-blink-view";

class MySkinPredict extends React.Component {
  state = {
    isTfReady: false,
    isModelReady: false,
    predictions: null,
    image: null,
    tfjsmodel: null,
  };

  async componentDidMount() {
    try {
      await tf.ready();
      this.setState({
        isTfReady: true,
      });

      let tfjsmodel;

      const tfmodel = require("../assets/model/model.json");
      const weights = require("../assets/model/weights.bin");
      tfjsmodel = await tf.loadGraphModel(bundleResourceIO(tfmodel, weights));

      this.setState({ isModelReady: true, tfjsmodel });
      this.getPermissionAsync();
    } catch (e) {
      console.log(e);
    }
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert(
          "Ohne die Erlaubnis zur Kameranutzung kann leider keine Analyse gestartet werden. Die Daten verbleiben komplett auf diesem Mobilgerät."
        );
      }
    }
  };

  imageToTensor(rawImageData) {
    const TO_UINT8ARRAY = true;
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);

    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];

      offset += 4;
    }

    const img = tf.tensor3d(buffer, [width, height, 3]);

    const shorterSide = Math.min(width, height);

    const startingHeight = (height - shorterSide) / 2;
    const startingWidth = (width - shorterSide) / 2;
    const endingHeight = startingHeight + shorterSide;
    const endingWidth = startingWidth + shorterSide;

    const sliced_img = img.slice(
      [startingWidth, startingHeight, 0],
      [endingWidth, endingHeight, 3]
    );

    const resized_img = tf.image.resizeBilinear(sliced_img, [224, 224]);

    const expanded_img = resized_img.expandDims(0);
    return expanded_img.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
  }

  classifyImage = async () => {
    try {
      const imageAssetPath = Image.resolveAssetSource(this.state.image);
      const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
      const rawImageData = await response.arrayBuffer();
      const imageTensor = this.imageToTensor(rawImageData);
      const options = { centerCrop: true };
      const predictions = await this.state.tfjsmodel.predict(
        imageTensor,
        options
      );
      this.setState({ predictions });
    } catch (error) {
      console.log(error);
    }
  };

  handlerSelectImage = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!response.cancelled) {
        const source = { uri: response.uri };
        this.setState({ image: source });
        this.classifyImage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  handlerReset = () => {
    this.setState({
      predictions: null,
      image: null,
    });
  };

  render() {
    const { isTfReady, isModelReady, predictions, image } = this.state;

    let status;
    let loading;

    // Status Logics:

    if (isTfReady && isModelReady && !image && !predictions) {
      status = (
        <Text style={styles.statusText}>mySkin: Predict ist bereit.</Text>
      );
      loading = false;
    } else if (isModelReady && image && predictions) {
      status = <Text style={styles.statusText}>Analyse abgeschlossen.</Text>;
      loading = false;
    } else if (isModelReady && image && !predictions) {
      status = (
        <React.Fragment>
          <Text style={styles.statusText}>Analyse läuft ... bitte warten.</Text>
        </React.Fragment>
      );
      loading = "predict";
    } else {
      status = (
        <React.Fragment>
          <Text style={styles.statusText}>
            Modell wird geladen ... bitte kurz warten.{" "}
          </Text>
        </React.Fragment>
      );
      loading = "model";
    }

    // Output Logics

    let output;

    if (!loading) {
      if (image && !predictions)
        output = <Image source={image} style={styles.uploadedImage} />;
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
          <BlinkView blinking={true} delay={1000}>
            <Icon
              style={{
                width: 100,
                height: 100,
              }}
              name="image-outline"
            />
          </BlinkView>
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

    return (
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <Text style={styles.status}>{status}</Text>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={
              isModelReady && this.state.tfjsmodel.predict && !predictions
                ? this.handlerSelectImage
                : undefined
            }
          >
            {output}
          </TouchableOpacity>
          {isModelReady && image && predictions ? (
            <React.Fragment>
              <Button onPress={this.handlerReset} size="tiny" status="warning">
                Neu starten
              </Button>
              <Text style={styles.warning}>
                Die oben dargestellte Zahl ist die Wahrscheinlichkeit, dass Ihr
                Muttermal ein Melanom sein könnte. Dabei beruht die Berechnung
                auf einem Modell der Künstlichen Intelligenz. Dieses Modell
                basiert auf 10.000 Bildern von Melanomen und von
                Nicht-Melanomen. Je kleiner die Wahrscheinlichkeit, desto
                unwahrscheinlicher ist es, dass Ihr Muttermal ein Melanom ist.
                Die Berechnung ist ohne Gewähr. Bitte konsultieren Sie auf jeden
                Fall Ihren Hautarzt für eine gesicherte Diagnose.
              </Text>
            </React.Fragment>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalcss.container.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  innercontainer: {
    flex: 1,
    marginTop: -100,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 16,
  },
  status: { marginBottom: 20 },
  imageContainer: {
    width: 300,
    height: 300,
    padding: 5,
    borderRadius: 10,
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 1,
  },

  warning: {
    marginTop: 20,
    fontSize: 10,
    width: "90%",
  },

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

export default MySkinPredict;
