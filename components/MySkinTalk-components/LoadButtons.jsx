import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";

const LoadMoreButton2 = (props) => (
  <Button
    style={styles.button}
    status="warning"
    onPress={() => props.setPagination((prev) => prev + 10)}
  >
    MEHR FRAGEN LADEN
  </Button>
);

export const LoadLessButton = (props) => (
  <Button
    style={styles.button}
    status="warning"
    onPress={() => props.setPagination(props.entriesPerScroll)}
  >
    WENIGER FRAGEN LADEN
  </Button>
);

export const LoadMoreButton = (props) => {
  if (props.num2 < props.num3) {
    return null;
  } else if (props.num1 > props.num2) {
    return (
      <Button
        style={styles.button}
        status="warning"
        onPress={() => props.setPagination(props.num3)}
      >
        WENIGER FRAGEN LADEN
      </Button>
    );
  } else if (props.num1 <= props.num2) {
    return (
      <Button
        style={styles.button}
        status="warning"
        onPress={() => props.setPagination((prev) => prev + 10)}
      >
        MEHR FRAGEN LADEN
      </Button>
    );
  }
};

export default LoadMoreButton2;

const styles = StyleSheet.create({
  button: {
    fontSize: 25,
    color: "darkorange",
  },
  delButton: {
    fontSize: 25,
    color: "red",
  },
});
