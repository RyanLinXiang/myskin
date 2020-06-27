import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import cardsData from "./cardsData";
import UVIndex from "./UVIndex";
import { Card, Text, Modal, Button, Divider } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class Cards extends Component {
  state = {
    cards: cardsData,
    showFullArticle: false,
    pressedCard: false,
    modalVisibility: false,
  };

  handlerShowFullArticle = (component) => {
    this.setState({
      showFullArticle: component,
      modalVisibility: !this.state.modalVisibility,
    });
  };

  handlerShowTitles = (chapter) => {
    this.setState({ pressedCard: chapter });
  };

  handlerResetView = () =>
    this.setState({ showFullArticle: false, pressedCard: false });

  render() {
    return (
      <TouchableWithoutFeedback onPressIn={this.handlerResetView}>
        <View>
          {/* <UVIndex /> */}
          <ImageBackground
            source={require("../../assets/cards-background-images/UVindex.jpg")}
            style={styles.bgimagesStd}
            imageStyle={styles.bgimages}
          >
            <Card style={styles.cards}>
              <Text style={styles.textUVIndex}> UVIndex </Text>
              <Text style={styles.UVIndex}>5</Text>
              <Text style={styles.textUVIndex}> Hamburg </Text>
              <Text style={styles.dateUVIndex}> 27.06.2020 </Text>
            </Card>
          </ImageBackground>

          {/* <Remainder /> */}
          <ImageBackground
            source={require("../../assets/cards-background-images/remainder1.jpg")}
            style={styles.bgimagesStd}
            imageStyle={styles.bgimages}
          >
            <Card style={styles.cards}>
              <Text style={styles.textRemainder}>
                bis zur nächsten Hautuntersuchung
              </Text>
              <Text style={styles.remainder}>130 Tage</Text>
            </Card>
          </ImageBackground>

          {this.state.cards.map((e, i) => {
            let cardContent;
            const blurRadius = e.chapter === this.state.pressedCard ? 50 : 0;

            if (e.chapter === this.state.pressedCard) {
              cardContent = e.articles.map((e, i, a) => (
                <React.Fragment>
                  <TouchableHighlight
                    key={e.title}
                    onPress={() => {
                      this.handlerShowFullArticle(e.component);
                      this.setState({ pressedCard: false });
                    }}
                    style={styles.titleItem}
                  >
                    <Text style={styles.titles}>{e.title}</Text>
                  </TouchableHighlight>
                  {i < a.length - 1 ? <Divider /> : null}
                </React.Fragment>
              ));
            } else
              cardContent = (
                <Text key={e.title} style={styles.text}>
                  {e.chapter}
                </Text>
              );

            return (
              <React.Fragment key={e.chapter}>
                <ImageBackground
                  source={e.img}
                  style={styles.bgimagesStd}
                  imageStyle={styles.bgimages}
                  blurRadius={blurRadius}
                  key={e.img}
                >
                  <Card
                    style={styles.cards}
                    onPress={() => {
                      this.handlerShowTitles(e.chapter);
                    }}
                  >
                    {cardContent}
                  </Card>
                </ImageBackground>
              </React.Fragment>
            );
          })}

          {this.state.modalVisibility ? (
            <Modal
              visible={true}
              backdropStyle={styles.backdrop}
              onBackdropPress={this.handlerShowFullArticle}
              style={styles.modal}
            >
              <Card style={styles.modalCard} disabled={true}>
                {this.state.showFullArticle}
                <View style={styles.closeButtomArt}>
                  <Button
                    size="small"
                    onPress={this.handlerShowFullArticle}
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
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
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
    paddingVertical: 30,
  },
  bgimagesStd: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    marginBottom: 50,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "darkgrey",
    shadowOffset: { height: 10, width: 10 },
    elevation: 5,
  },
  bgimages: { borderRadius: 20, opacity: 0.7 },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  remainder: {
    padding: 10,
    color: "darkorange",
    fontSize: 60,
    textAlign: "right",
    fontWeight: "bold",
    paddingTop: 75,
  },
  textRemainder: {
    color: "white",
    fontSize: 26,
    textAlign: "right",
    fontWeight: "bold",
    paddingTop: 5,
  },
  textUVIndex: {
    color: "white",
    fontSize: 50,
    textAlign: "right",
    fontWeight: "bold",
  },
  UVIndex: {
    color: "darkorange",
    fontSize: 90,
    textAlign: "right",
    fontWeight: "bold",
  },
  dateUVIndex: {
    color: "darkorange",
    fontSize: 30,
    textAlign: "right",
    fontWeight: "bold",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modal: {
    backgroundColor: "white",
    height: screenHeight * 0.75,
  },
  modalCard: {
    paddingBottom: 40,
  },
  closeButtomArt: {
    paddingVertical: 10,
  },
  specialcard: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    marginTop: 20,
    marginBottom: 20,
  },
  titles: {
    fontSize: 20,
    color: "white",
  },
  titleItem: { marginBottom: 15, marginTop: 15 },
});

export default Cards;
