import { StyleSheet, View, Platform, ScrollView, Alert } from "react-native";
import { Text, Button, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";
import React, { Component } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-community/async-storage";

class ArticleReminder extends Component {
  state = {
    mode: "date",
    handler: false,
    screenDate: this.props.screenDate ? this.props.screenDate : new Date(),
    selectedDate: false,
    selectedTime: false,
    reminderSet: false,
  };

  show = false;

  handlerToggleMode = (mode) => {
    const handler =
      mode === "date" ? this.handlerChangeDate : this.handlerChangeTime;
    this.setState({ mode, handler });
    this.show = true;
  };

  convertDate = (date, type) => {
    switch (type) {
      case "year":
        return date.toLocaleString("de-DE").split(",")[0].split(".")[2];
      case "month":
        return date.toLocaleString("de-DE").split(",")[0].split(".")[1];
      case "day":
        return date.toLocaleString("de-DE").split(",")[0].split(".")[0];
      default:
        break;
    }
  };

  convertTime = (date, type) => {
    switch (type) {
      case "hours":
        return date.toUTCString().split(" ")[4].split(":")[0];
      case "minutes":
        return date.toUTCString().split(" ")[4].split(":")[1];
      default:
        break;
    }
  };

  formatDate = (date) => {
    const dateYear = this.convertDate(date, "year");
    let dateMonth = this.convertDate(date, "month");
    let dateDay = this.convertDate(date, "day");
    dateMonth = dateMonth < 10 ? "0" + dateMonth : dateMonth;
    dateDay = dateDay < 10 ? "0" + dateDay : dateDay;
    return dateDay + "." + dateMonth + "." + dateYear;
  };

  formatTime = (date) => {
    let timeHours = this.convertTime(date, "hours");
    let timeMinutes = this.convertTime(date, "minutes");
    return timeHours + ":" + timeMinutes;
  };

  handlerChangeDate = (event, selectedDate) => {
    this.show = Platform.OS === "ios";
    this.setState({
      screenDate: selectedDate,
      selectedDate: true,
    });
  };

  handlerChangeTime = (event, selectedDate) => {
    this.show = Platform.OS === "ios";
    this.setState({
      screenDate: selectedDate,
      selectedTime: true,
    });
  };

  handlerSetReminder = async () => {
    try {
      if (Date.parse(this.state.screenDate) - Date.parse(new Date()) > 0) {
        const screenDate = this.state.screenDate.toISOString();
        await AsyncStorage.setItem("@storage_screenDate", screenDate);
        this.setState({ reminderSet: true });
        this.setState({ screenDate: new Date(screenDate) });
        this.props.handlerResetView();
        Alert.alert("Neuer Eintrag", "Die Erinnerung wurde nun eingetragen.", [
          {
            text: "OK",
          },
        ]);
      } else {
        Alert.alert("Fehler", "Der Termin liegt in der Vergangenheit", [
          {
            text: "OK",
          },
        ]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {
      mode,
      handler,
      selectedDate,
      selectedTime,
      reminderSet,
    } = this.state;

    const screenDate = reminderSet
      ? this.state.screenDate
      : this.props.screenDate;

    let status;
    const screenDateExist = screenDate || reminderSet;

    if (!screenDateExist)
      status = (
        <Text>
          Tragen Sie hier Ihren nächsten Termin ein, damit mySkin Sie
          rechtzeitig erinnert:
        </Text>
      );
    else
      status = (
        <Text>
          Ihr eingetragener Termin ist am{" "}
          <Text style={styles.date}>
            {this.formatDate(screenDate) +
              ", um " +
              this.formatTime(screenDate) +
              " Uhr"}
          </Text>
          . Sie können diesen Termin nun ändern:
        </Text>
      );

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleArticle}>Hautkrebs-Screening</Text>
        <Divider />
        <Text style={styles.textArticle}>
          Regelmäßiges Hautscreening ist ein wichtiger Bestandteil der
          Hautkrebsvorsorge. {status}
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
            value={
              this.state.screenDate
                ? this.state.screenDate
                : new Date(Date.now())
            }
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={handler}
            locale="de"
          />
        )}
        {selectedDate && selectedTime ? (
          <Button onPress={this.handlerSetReminder} size="tiny">
            Erinnerung setzen
          </Button>
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
  date: { fontWeight: "bold", textDecorationLine: "underline" },
});

export default ArticleReminder;
