import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Card, Text } from "@ui-kitten/components";
import ArticleReminder from "./articles/ArticleReminder";
import * as globalcss from "../../styles/globalcss";

const Reminder = (props) => {
  const { api, handlerResetView } = props;

  const getTimeUntil = async () => {
    try {
      let screenDate = await AsyncStorage.getItem("@storage_screenDate");
      let daysLeft;

      if (screenDate) {
        screenDate = new Date(screenDate);
        const time = Date.parse(screenDate) - Date.parse(new Date());
        daysLeft = Math.floor(time / (1000 * 60 * 60 * 24));
      } else {
        screenDate = false;
        daysLeft = 0;
      }

      // Avoid infinite loop by checking if daysleft has changed
      if (daysLeft !== stateDate.daysLeft)
        setStateDate({ screenDate, daysLeft });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTimeUntil();
  });

  const [stateDate, setStateDate] = useState({
    screenDate: false,
    daysLeft: false,
  });

  return !api ? (
    <ArticleReminder
      screenDate={stateDate.screenDate}
      handlerResetView={handlerResetView}
    />
  ) : (
    <Card style={styles.cards}>
      {stateDate.daysLeft > 0 ? (
        <React.Fragment>
          <Text style={styles.textReminder}>Ihr nächstes Hautscreening</Text>
          <Text style={styles.Reminder}>
            {stateDate.daysLeft} {stateDate.daysLeft === 1 ? " Tag" : " Tage"}
          </Text>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text style={styles.textReminder}>Ihr nächstes Hautscreening</Text>
          <Text style={styles.emptyReminder}>Termin eintragen</Text>
        </React.Fragment>
      )}
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
    textAlignVertical: "top",
    padding: 20,
    color: "darkorange",
    fontSize: 55,
    justifyContent: "flex-end",
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
    fontSize: 30,
    textAlign: "right",
    fontWeight: "bold",
    // Android Shadows:
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 10,
    paddingVertical: 30,
    paddingRight: 5,
  },
  emptyReminder: {
    padding: 10,
    color: "darkorange",
    fontSize: 26,
    textAlign: "right",
    fontWeight: "bold",
    paddingTop: 30,
  },
});

export default Reminder;
