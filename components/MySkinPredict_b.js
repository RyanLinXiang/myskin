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
      console.log(predictions);
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
    console.log(predictions);
    const {
      isTfReady,
      isModelReady,
      predictions,
      image,
      tfjsmodel,
    } = this.state;

    let status;

    if (isTfReady && isModelReady && !image && !predictions)
      status = <Text>mySkin: Predict ist bereit.</Text>;
    else if (isModelReady && image && predictions) status = null;
    else if (isModelReady && image && !predictions)
      status = <Text>"Analyse läuft ... bitte warten"</Text>;
    else
      status = (
        <React.Fragment>
          <Text>Model wird geladen ... bitte kurz warten.</Text>
          <ActivityIndicator size="small" />
        </React.Fragment>
      );

    let outputs;

    if (image && !predictions)
      outputs = <Image source={image} style={styles.uploadedImage} />;
    else if (predictions)
      outputs = <Text style={styles.predictions}>{predictions[0] + "%"}</Text>;
    else if (isModelReady && !image)
      outputs = <Text>Bitte ein Bild auswählen</Text>;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.statusContainer}>{status}</View>

        <TouchableOpacity
          style={styles.uploadContainer}
          onPress={
            isModelReady && !predictions ? this.handlerSelectImage : undefined
          }
        >
          {outputs}
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
    height: "100%",
  },
  text: {
    fontSize: 16,
  },
  statusContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  uploadContainer: {
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
  uploadedImage: {
    width: 250,
    height: 250,
    position: "absolute",
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },

  noticeContainer: {
    marginTop: 40,
  },
});

export default MySkinPredict;
