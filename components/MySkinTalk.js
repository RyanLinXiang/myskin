import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as globalcss from "../styles/globalcss";

// import Search from "../components/MySkinTalk-components/search";


const MySkinTalk = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: globalcss.container,
});

export default MySkinTalk;
