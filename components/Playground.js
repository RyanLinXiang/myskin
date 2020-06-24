import React, { useState, useEffect } from "react";
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
} from "@ui-kitten/components";
import connectAPI from "../helpers/api";
import * as globalcss from "../styles/globalcss";

export const ModalWithBackdropShowcase = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    connectAPI(
      "questions?start=0&numbers=" + entriesPerScroll,
      "GET",
      false,
      token
    ).then((data) => {
      setItems(data);
    });
  }, []);

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
          <Text>Here comes the question + answers</Text>
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
