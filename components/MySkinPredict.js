import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as globalcss from "../styles/globalcss";

const MySkinPredict = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Lin is my creator</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: globalcss.container,
});

export default MySkinPredict;
