import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Card, Modal, Text, Calendar } from "@ui-kitten/components";
import * as globalcss from "../../styles/globalcss";

const Reminder = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;
  const [date, setDate] = React.useState(new Date());
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);

  const [timerDays, setTimerDays] = useState("00");

  let interval = useRef();

  const setTime = (nextDate) => {
    console.log(nextDate);
    //Calender Auswahl in new Date einfügen????
    //const countDownDate = new Date(nextDate).getTime();

    //const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>253 Tage</Text>
      <Text>Ihr nächster Termin ist am xxx</Text>

      <Button size="tiny" onPress={() => setVisible(true)}>
        Show
      </Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        style={styles.modal}
      >
        <Card disabled={true}>
          <Text category="h6">Selected date: {date.toLocaleDateString()}</Text>

          <Calendar date={date} onSelect={(nextDate) => setTime(nextDate)} />

          <Button
            size="tiny"
            onPress={() => setVisible(false)}
            style={{ alignSelf: "center" }}
          >
            Close
          </Button>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: globalcss.container,
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  list: {
    width: "100%",
    backgroundColor: globalcss.container.backgroundColor,
  },
  listitem: { backgroundColor: globalcss.container.backgroundColor },
  modal: { width: "90%" },
});

export default Reminder;
