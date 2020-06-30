import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

const Status = (props) => {
  const { isTfReady, isModelReady, image, predictions, error } = props;

  let status;

  if (!error) {
    if (isTfReady && isModelReady && !image && !predictions)
      status = (
        <Text style={styles.statusText}>mySkin: Predict ist bereit.</Text>
      );
    else if (isModelReady && image && predictions)
      status = <Text style={styles.statusText}>Analyse abgeschlossen.</Text>;
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
      <Text style={styles.statusText}>Es ist ein Fehler aufgetreten.</Text>
    );
  return status;
};

const styles = StyleSheet.create({
  statusText: {
    fontSize: 16,
  },
});

export default Status;
