import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import * as tf from "@tensorflow/tfjs";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as jpeg from "jpeg-js";
import Output from "./MySkinPredict-components/Output";
import Status from "./MySkinPredict-components/Status";
import { Button, Text, Modal, Card } from "@ui-kitten/components";
import * as globalcss from "../styles/globalcss";
import ArticlePredict from "./Home-components/articles/ArticlePredict";

class MySkinPredict extends React.Component {
  state = {
    isTfReady: false,
    isModelReady: false,
    predictions: null,
    image: null,
    tfjsmodel: null,
    error: false,

    showModal: false,
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

  classifyImage = async (source) => {
    try {
      const imageAssetPath = Image.resolveAssetSource(source);
      const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
      const rawImageData = await response.arrayBuffer();
      const imageTensor = this.imageToTensor(rawImageData);
      //const options = { centerCrop: true };
      const predictions = await this.state.tfjsmodel.predict(
        imageTensor
        //options
      );
      this.setState({ predictions, tooltip: true });
    } catch (error) {
      this.setState({ error });
    }
  };

  handlerSelectImage = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [4, 3],
      });

      if (!response.cancelled) {
        const source = { uri: response.uri };
        this.setState({ image: source });
        this.classifyImage(source);
      }
    } catch (error) {
      this.setState({ error });
    }
  };

  handlerReset = () => {
    this.setState({
      predictions: null,
      image: null,
      error: false,
    });
  };

  handlerToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const {
      isTfReady,
      isModelReady,
      predictions,
      image,
      error,
      showModal,
    } = this.state;

    let loading;

    if (isTfReady && isModelReady && !image && !predictions) loading = false;
    else if (isModelReady && image && predictions) loading = false;
    else if (isModelReady && image && !predictions) loading = "predict";
    else loading = "model";

    return (
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View style={styles.status}>
            <Status
              isTfReady={isTfReady}
              isModelReady={isModelReady}
              predictions={predictions}
              image={image}
              error={error}
              handlerReset={this.handlerReset}
            />
          </View>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={
              isModelReady && this.state.tfjsmodel.predict && !predictions
                ? this.handlerSelectImage
                : undefined
            }
          >
            <Output
              loading={loading}
              image={image}
              predictions={predictions}
              isModelReady={isModelReady}
              error={error}
            />
          </TouchableOpacity>

          <Text
            style={styles.hints}
            appearance="hint"
            onPress={this.handlerToggleModal}
          >
            Hinweise und Erläuterungen
          </Text>

          {showModal ? (
            <Modal
              visible={true}
              backdropStyle={styles.backdrop}
              onBackdropPress={this.handlerToggleModal}
              style={styles.modal}
            >
              <Card style={styles.modalCard} disabled={true}>
                <ArticlePredict />
                <View style={styles.closeButtomArt}>
                  <Button
                    size="small"
                    onPress={this.handlerToggleModal}
                    style={{ paddingVertical: 10, alignSelf: "stretch" }}
                    status="warning"
                  >
                    SCHLIESSEN
                  </Button>
                </View>
              </Card>
            </Modal>
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
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
  },
  status: { marginBottom: 20 },
  imageContainer: {
    width: 300,
    height: 300,
    padding: 5,
    borderRadius: 150,
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    borderColor: "white",
    borderWidth: 5,
    borderStyle: "dotted",
  },

  hints: {
    marginTop: 20,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modal: {
    backgroundColor: "white",
    height: globalcss.screenHeight * 0.75,
  },
  modalCard: {
    paddingBottom: 40,
  },
  closeButtomArt: {
    paddingVertical: 10,
  },
});

export default MySkinPredict;
