import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import * as tf from "@tensorflow/tfjs";
import * as tfAutoML from "@tensorflow/tfjs-automl";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as jpeg from "jpeg-js";
//import AsyncStorage from "@react-native-community/async-storage";

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

      /*       tfjsmodel = await AsyncStorage.getItem("@storage_tfjsmodel");
      tfjsmodel = JSON.parse(tfjsmodel);
      if (tfjsmodel !== null) {
        console.log("hello");
        this.setState({
          tfjsmodel,
        });
      } else {
        tfjsmodel = await tfAutoML.loadImageClassification(
          "https://myskin-server.herokuapp.com/model/model.json"
        );
        console.log("hello2");
        this.setState({ isModelReady: true, tfjsmodel });
        await AsyncStorage.setItem(
          "@storage_tfjsmodel",
          JSON.stringify(tfjsmodel)
        );
        this.getPermissionAsync();
        console.log("Success");
      } */

      //tfjsmodel = await tfAutoML.loadImageClassification("https://myskin-server.herokuapp.com/model/model.json" );
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
        alert("Sorry, we need camera roll permissions to make this work!");
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

  selectImage = async () => {
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
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.loadingContainer}>
          <Text style={styles.commonTextStyles}>
            TFJS ready? {isTfReady ? <Text>✅</Text> : ""}
          </Text>

          <View style={styles.loadingModelContainer}>
            <Text style={styles.text}>Model ready? </Text>
            {isModelReady ? (
              <Text style={styles.text}>✅</Text>
            ) : (
              <ActivityIndicator size="small" />
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={
            isModelReady && this.state.tfjsmodel.predict
              ? this.selectImage
              : undefined
          }
        >
          {image && <Image source={image} style={styles.imageContainer} />}

          {isModelReady && !image && (
            <Text style={styles.transparentText}>Tap to choose image</Text>
          )}
        </TouchableOpacity>
        <View style={styles.predictionWrapper}>
          {isModelReady && image && (
            <Text style={styles.text}>
              Predictions: {predictions ? "" : "Predicting..."}
            </Text>
          )}
          {isModelReady && predictions
            ? console.log("Hello" + predictions)
            : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171f24",
    alignItems: "center",
  },
  loadingContainer: {
    marginTop: 80,
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
  loadingModelContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  imageWrapper: {
    width: 280,
    height: 280,
    padding: 10,
    borderColor: "#cf667f",
    borderWidth: 5,
    borderStyle: "dashed",
    marginTop: 40,
    marginBottom: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 250,
    height: 250,
    position: "absolute",
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
  predictionWrapper: {
    height: 100,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  transparentText: {
    color: "#ffffff",
    opacity: 0.7,
  },
  footer: {
    marginTop: 40,
  },
  poweredBy: {
    fontSize: 20,
    color: "#e69e34",
    marginBottom: 6,
  },
  tfLogo: {
    width: 125,
    height: 70,
  },
});

export default MySkinPredict;
