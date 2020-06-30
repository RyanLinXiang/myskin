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
      <Text style={styles.Reminder}>130 Tage</Text>
      <Text style={styles.textReminder}>bis zur nächsten Hautuntersuchung</Text>
      
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
    textAlignVertical:'top',
    padding: 20,
    color: "darkorange",
    fontSize: 60,
    justifyContent:'flex-end',
    textAlign: "right",
    fontWeight: "bold",
    paddingTop: 20,
     // Android Shadows:
     textShadowColor: "rgba(0,0,0,0.7)",
     textShadowOffset: { width: 1, height: -1 },
     textShadowRadius: 10,
  },
  textReminder: {
    color: "white",
    fontSize: 25,
    textAlign: "right",
    fontWeight: "bold",
     // Android Shadows:
     textShadowColor: "rgba(0,0,0,0.8)",
     textShadowOffset: { width: 1, height: -1 },
     textShadowRadius: 10,
     paddingVertical:30,
     paddingRight:10
     
  },
});

export default Reminder;
