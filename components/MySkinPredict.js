import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import * as tf from "@tensorflow/tfjs";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as jpeg from "jpeg-js";
import * as globalcss from "../styles/globalcss";

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
      console.log("Success");
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

    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];

      offset += 4;
    }

    const img = tf.tensor3d(buffer, [width, height, 3]);

    // use the shorter side as the size to which we will crop
    const shorterSide = Math.min(width, height);

    // calculate beginning and ending crop points
    const startingHeight = (height - shorterSide) / 2;
    const startingWidth = (width - shorterSide) / 2;
    const endingHeight = startingHeight + shorterSide;
    const endingWidth = startingWidth + shorterSide;

    // return image data cropped to those points
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

  render() {
    const { isTfReady, isModelReady, predictions, image } = this.state;

    let status;

    if (isTfReady && isModelReady && !image && !predictions)
      status = (
        <Text style={styles.statusText}>mySkin: Predict ist bereit.</Text>
      );
    else if (isModelReady && image && predictions)
      status = <Text style={styles.statusText}>Analyse abgeschlossen</Text>;
    else if (isModelReady && image && !predictions)
      status = (
        <Text style={styles.statusText}>Analyse läuft ... bitte warten</Text>
      );
    else
      status = (
        <React.Fragment>
          <Text>Modell wird geladen ... bitte kurz warten.</Text>
          <ActivityIndicator size="small" />
        </React.Fragment>
      );

    let output;

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
      output = <Text>Bitte ein Bild auswählen</Text>;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.status}>{status}</Text>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={
            isModelReady && this.state.tfjsmodel.predict
              ? this.handlerSelectImage
              : undefined
          }
        >
          {output}
        </TouchableOpacity>
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
  statusText: {
    fontSize: 16,
  },
  status: { marginBottom: 20 },
  imageContainer: {
    width: 300,
    height: 300,
    padding: 5,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    borderColor: "darkgrey",
    borderWidth: 1,
    borderStyle: "solid",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    marginTop: 40,
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
});

export default MySkinPredict;
