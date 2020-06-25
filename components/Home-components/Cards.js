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
          <Card style={styles.specialcard}>
            <UVIndex />
          </Card>

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
              <Card disabled={true}>
                {this.state.showFullArticle}
                <Button
                  size="tiny"
                  onPress={this.handlerShowFullArticle}
                  style={{ alignSelf: "center" }}
                >
                  Close
                </Button>
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
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
  titleItem: { marginBottom: 20, marginTop: 20 },
});

export default Cards;
