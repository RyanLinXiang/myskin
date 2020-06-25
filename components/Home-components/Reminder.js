import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Card, Modal, Text, Calendar } from "@ui-kitten/components";
import * as globalcss from "../../styles/globalcss";

const Reminder = (props) => {

  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

   const setTime = (nextDate) => {

  console.log('nextDate:'+ nextDate.getTime());
  console.log('Date:'+ date.getDate());
  console.log('remain:'+ daysRemaining)

   const oneDay = 24*60*60*1000; 

   const chosenDay = date;
   const currentDay = nextDate.getDate();

   let  daysRemaining = Math.abs((chosenDay - currentDay) / (oneDay));
        daysRemaining = daysRemaining.toString();
  
  };

  return (

    <SafeAreaView style={styles.container}>

        <Text>253 Tage</Text>
        <Text>Ihr nächster Termin ist am </Text>

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
          <Text category="h6">Ausgewähltes Datum: {date.toLocaleDateString()}</Text>

          <Calendar date={date} onSelect={nextDate => setDate(nextDate)} />

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
