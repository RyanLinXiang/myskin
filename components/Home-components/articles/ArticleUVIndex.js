import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const UVIndex = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Der UV-Index</Text>
    <Divider />
  </ScrollView>
);

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
});

export default UVIndex;
