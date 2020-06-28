import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Card, Text } from "@ui-kitten/components";
import ArticleReminder from "./articles/ArticleReminder";
import * as globalcss from "../../styles/globalcss";

const Reminder = (props) => {
  return !props.api ? (
    <ArticleReminder />
  ) : (
    <Card style={styles.cards}>
      <Text style={styles.textReminder}>bis zur nächsten Hautuntersuchung</Text>
      <Text style={styles.Reminder}>130 Tage</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cards: globalcss.cards,
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  list: {
    width: "100%",
    backgroundColor: globalcss.container.backgroundColor,
  },
  listitem: { backgroundColor: globalcss.container.backgroundColor },
  modal: { width: "90%" },
  Reminder: {
    padding: 10,
    color: "darkorange",
    fontSize: 60,
    textAlign: "right",
    fontWeight: "bold",
    paddingTop: 75,
  },
  textReminder: {
    color: "white",
    fontSize: 26,
    textAlign: "right",
    fontWeight: "bold",
    paddingTop: 5,
  },
});

export default Reminder;
