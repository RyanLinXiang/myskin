import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as globalcss from "../styles/globalcss";
import UVIndex from "./Home-components/UVIndex";


const MySkinTalk = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  return (
    <SafeAreaView style={styles.container}>
    <UVIndex />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: globalcss.container,
});

export default MySkinTalk;
