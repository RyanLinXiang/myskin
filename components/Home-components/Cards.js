import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import cardsData from "./cardsData";
import UVIndex from "./UVIndex";
import Reminder from "./Reminder";
import { Card, Text, Modal, Button, Divider } from "@ui-kitten/components";
import * as globalcss from "../../styles/globalcss";

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
            source={require("../../assets/cards-background-images/UVindex_neu.jpg")}
            style={styles.bgimagesStd}
            imageStyle={styles.bgimages}
          >
            <TouchableHighlight
              onPress={() => {
                this.handlerShowFullArticle(<UVIndex api={false} />);
              }}
              style={styles.titleItem}
            >
              <UVIndex api={true} />
            </TouchableHighlight>
          </ImageBackground>

          {/* <Remainder /> */}
          <ImageBackground
            source={require("../../assets/cards-background-images/remainder1_neu.jpg")}
            style={styles.bgimagesStd}
            imageStyle={styles.bgimages}
          >
            <TouchableHighlight
              onPress={() => {
                this.handlerShowFullArticle(<Reminder api={false} />);
              }}
              style={styles.titleItem}
            >
              <Reminder api={true} />
            </TouchableHighlight>
          </ImageBackground>

          {this.state.cards.map((e, i) => {
            let cardContent;
            const blurRadius = e.chapter === this.state.pressedCard ? 50 : 0;

            if (e.chapter === this.state.pressedCard) {
              cardContent = e.articles.map((e, i, a) => (
                <React.Fragment key={e.title}>
                  <TouchableHighlight
                    onPress={() => {
                      requestAnimationFrame(() => {
                        this.handlerShowFullArticle(e.component);
                        this.setState({ pressedCard: false });
                      });
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
                      requestAnimationFrame(() => {
                        this.handlerShowTitles(e.chapter);
                      });
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
  cards: globalcss.cards,
  bgimagesStd: {
    width: globalcss.screenWidth * 0.8,
    height: globalcss.screenWidth * 0.8,
    marginBottom: 50,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "darkgray",
    shadowOffset: { height: 10, width: 10 },
    elevation: 5,
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
  modal: {
    marginRight:50,
    borderRadius:30,
    justifyContent:'space-evenly',
    backgroundColor: "white",
    height: globalcss.screenHeight * 0.75,
  },
  modalCard: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingBottom: 40,
  },
  closeButtomArt: {
    paddingVertical: 10,
   
  },
  specialcard: {
    width: globalcss.screenWidth ,
    height: globalcss.screenWidth * 0.8,
    marginTop: 10,
    marginBottom: 10,
  },
  titles: {
    fontSize: 20,
    color: "white",
  },
  titleItem: { marginBottom: 15, marginTop: 15 },
});

export default Cards;
