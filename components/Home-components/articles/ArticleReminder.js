import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, Button, Card, Calendar } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";
import CountDown from "../CountDown";

const ArticleReminder = (props) => {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const setTime = (nextDate) => {
    console.log("nextDate:" + nextDate.getTime());
    console.log("Date:" + date.getDate());
    console.log("remain:" + daysRemaining);

    const oneDay = 24 * 60 * 60 * 1000;

    const chosenDay = date;
    const currentDay = nextDate.getDate();

    let daysRemaining = Math.abs((chosenDay - currentDay) / oneDay);
    daysRemaining = daysRemaining.toString();
  };

  return (
    <React.Fragment>
      <CountDown />
      <Text>253 Tage</Text>
      <Text>Ihr nächster Termin ist am </Text>

      <Button size="tiny" onPress={() => setVisible(true)}>
        Show
      </Button>

      <Card disabled={true}>
        <Text category="h6">
          Ausgewähltes Datum: {date.toLocaleDateString()}
        </Text>

        <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} />

        <Button
          size="tiny"
          onPress={() => setVisible(false)}
          style={{ alignSelf: "center" }}
        >
          Close
        </Button>
        <TextInput placeholder="Uhrzeit" />
      </Card>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
});

export default ArticleReminder;
