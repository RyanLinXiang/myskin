import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

const Status = (props) => {
  const { isTfReady, isModelReady, image, predictions } = props;

  let status;

  if (isTfReady && isModelReady && !image && !predictions)
    status = <Text style={styles.statusText}>mySkin: Predict ist bereit.</Text>;
  else if (isModelReady && image && predictions)
    status = <Text style={styles.statusText}>Analyse abgeschlossen.</Text>;
  else if (isModelReady && image && !predictions)
    status = (
      <React.Fragment>
        <Text style={styles.statusText}>Analyse läuft ... bitte warten.</Text>
      </React.Fragment>
    );
  else
    status = (
      <React.Fragment>
        <Text style={styles.statusText}>
          Modell wird geladen ... bitte kurz warten.{" "}
        </Text>
      </React.Fragment>
    );

  return status;
};

const styles = StyleSheet.create({
  statusText: {
    fontSize: 16,
  },
});

export default Status;
