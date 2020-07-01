import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";

const Status = (props) => {
  const {
    isTfReady,
    isModelReady,
    image,
    predictions,
    error,
    handlerReset,
  } = props;

  let status;

  if (!error) {
    if (isTfReady && isModelReady && !image && !predictions)
      status = (
        <View style={styles.statusTextReadyContainer}>
          <Text
            style={styles.statusTextReady}
            appearance="alternative"
            category="s1"
          >
            mySkin: Predict ist bereit.
          </Text>
        </View>
      );
    else if (isModelReady && image && predictions)
      status = (
        <Text style={styles.statusText}>
          Analyse abgeschlossen.{" "}
          <Text onPress={handlerReset} style={styles.textRestart}>
            Neu Starten
          </Text>
        </Text>
      );
    else if (isModelReady && image && !predictions)
      status = (
        <Text style={styles.statusText}>Analyse läuft ... bitte warten.</Text>
      );
    else
      status = (
        <Text style={styles.statusText}>
          Modell wird geladen. Bitte kurz warten.
        </Text>
      );
  } else
    status = (
      <Text style={styles.statusText}>
        Es ist ein Fehler aufgetreten.{" "}
        <Text onPress={handlerReset} style={styles.textRestart}>
          Neu Starten
        </Text>
      </Text>
    );
  return status;
};

const styles = StyleSheet.create({
  statusTextReadyContainer: {
    borderRadius: 4,
    marginVertical: 2,
    backgroundColor: "darkorange",
    padding: 5,
  },
  statusTextReady: {
    fontSize: 16,
    color: "white",
  },
  statusText: {
    fontSize: 16,
    color: "darkorange",
  },
  textRestart: {
    color: "darkorange",
    textDecorationLine: "underline",
  },
});

export default Status;
