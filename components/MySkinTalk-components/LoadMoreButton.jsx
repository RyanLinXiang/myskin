//* #### IMPORTS #### *//
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Spinner } from "@ui-kitten/components";

const LoadMoreButton = (props) => {
//* #### CONDITIONAL RENDERING #### *//
  if (props.num2 < props.num3) {
    return null
  } else if (props.num1 === props.num2 + 10) {
    return <Spinner status='warning' />
  } else if (props.num1 > props.num2) {
    return <Button
      style={styles.button}
      status='warning'
      onPress={() => props.setPagination(props.num3)}
    >
      RESET FRAGEN
    </Button>
  } else if (props.num1 <= props.num2) {
    return <Button
      style={styles.button}
      status='warning'
      onPress={() => props.setPagination(prev => prev + 10)}
    >
      MEHR FRAGEN LADEN
    </Button>
  }
}

//* #### STYLESHEET #### *//
const styles = StyleSheet.create({
  button: {
    fontSize: 25,
    color: 'darkorange',
  },
  delButton: {
    fontSize: 25,
    color: 'red',
  },
});

//* #### EXPORT #### *//
export default LoadMoreButton;