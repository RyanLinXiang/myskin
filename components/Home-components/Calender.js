import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Button,
  Card,
  Modal,
  Text,
  List,
  ListItem,
  Icon,
  Divider,
  Calender
} from "@ui-kitten/components";
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";

export const calender = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;
  const [date, setDate] = React.useState(new Date());
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);

  const [timerDays, setTimerDays] = useState('00');

  let interval = useRef();

  const startTimer = (nextDate) => {
      //Calender Auswahl in new Date einfügen????
      const countDownDate = new Date ('Jun 26, 2020 00:00:00').getTime();

      inverval = setInterval (() => {
          const now = new Date().getTime();
          const distance = countDownDate - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));

          if (distance < 0) {
              //stop timer 
              clearInterval(interval.current)
          } else {
              //update timer
              setTimerDays(days);
          }
      },1000)
  }

  useEffect (() => {
      startTimer ();
      return () => {
          clearInterval(inverval.current)
      }
  })



  const renderItemAccessory = (props) => (
    <React.Fragment>
      <Button size="tiny" onPress={() => setVisible(true)}>
        Show
      </Button>
      <Button size="tiny">Follow</Button>
    </React.Fragment>
  );

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <React.Fragment>
      <ListItem
        title={item.subject}
        accessoryLeft={renderItemIcon}
        accessoryRight={renderItemAccessory}
        style={styles.listitem}
      />
      <Divider />
    </React.Fragment>
  );

  return (
    <SafeAreaView style={styles.container}>
      <List style={styles.list} data={items} renderItem={renderItem} />

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        style={styles.modal}
      >
        <Card disabled={true}>
            <React.Fragment>
                <Text category='h6'>
                Selected date: {date.toLocaleDateString()}
                </Text>

                <Calendar
                date={date}
                onSelect={nextDate => startTimer(nextDate)}
                />
            </React.Fragment>
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
