import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";

export const ModalWithBackdropShowcase = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>DISMISS</Button>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
