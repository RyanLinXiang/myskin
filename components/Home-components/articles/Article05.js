import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article05 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Vitamin D</Text>
    <Divider />
    <Text style={styles.textArticle}>
      Vitamin D ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos quod.
    </Text>

    <Text style={styles.textArticle}>
      In den Wintermonaten, oder Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos.
    </Text>

    <Text style={styles.textArticle}>
      Bitten Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </Text>

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/sun1.jpg")}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
  imgArticle: stylesArticles.imgArticle,
});
export default Article05;
