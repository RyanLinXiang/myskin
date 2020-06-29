import { StyleSheet, TextInput, View, Platform } from "react-native";
import { Text, Button, Card, Calendar } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const ArticleReminder = (props) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  /* const setTime = (nextDate) => {
    console.log("nextDate:" + nextDate.getTime());
    console.log("Date:" + date.getDate());
    console.log("remain:" + daysRemaining);

    const oneDay = 24 * 60 * 60 * 1000;

    const chosenDay = date;
    const currentDay = nextDate.getDate();

    let daysRemaining = Math.abs((chosenDay - currentDay) / oneDay);
    daysRemaining = daysRemaining.toString();
  }; */

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
});

export default ArticleReminder;
