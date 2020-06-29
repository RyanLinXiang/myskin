import { StyleSheet, View, Platform, ScrollView } from "react-native";
import { Text, Button, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";
import React, { Component } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

class ArticleReminder extends Component {
  state = {
    mode: "date",
    handler: false,
    screenDate: this.props.screenDate
      ? this.props.screenDate
      : new Date(Date.now()),
    selectedDate: false,
    selectedTime: false,
  };

  show = false;

  handlerToggleMode = (mode) => {
    const handler =
      mode === "date" ? this.handlerChangeDate : this.handlerChangeTime;
    this.setState({ mode, handler });
    this.show = true;
  };

  handlerChangeDate = (event, selectedDate) => {
    //const datePart = selectedDate.split("T")[0];
    const datePart = selectedDate.toLocaleString("de-DE");
    const convertedBack = new Date();
    console.log(selectedDate.toLocaleString("de-DE"));
    console.log(selectedDate.toLocaleString("de-DE"));
    this.show = Platform.OS === "ios";
    this.setState({ screenDate: selectedDate });
  };
  handlerChangeTime = (event, selectedDate) => {
    console.log(selectedDate);
    this.show = Platform.OS === "ios";
    this.setState({ screenDate: selectedDate });
  };

  render() {
    const { screenDate, mode, handler } = this.state;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleArticle}>Hautkrebs-Screening</Text>
        <Divider />
        <Text style={styles.textArticle}>
          Regelmäßiges Hautscreening ist ein wichtiger Bestandteil der
          Hautkrebsvorsorge. Tragen Sie hier Ihren nächsten Termin ein:
        </Text>
        <Button
          onPress={() => {
            this.handlerToggleMode("date");
          }}
          size="tiny"
        >
          Datum auswählen
        </Button>
        <Button
          onPress={() => {
            this.handlerToggleMode("time");
          }}
          size="tiny"
        >
          Uhrzeit auswählen
        </Button>

        {this.show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={screenDate}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={handler}
            locale="de"
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
});

export default ArticleReminder;
