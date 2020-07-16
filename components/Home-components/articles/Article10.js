import React from "react";
import { StyleSheet, ScrollView, Image, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article10 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Bewegung ist entscheidend</Text>

    <Divider />

    <Text style={styles.textArticle}>
      Wen inetur molaceat cicta truod hic zucimus hasperiorum, veritatis it, fugit natus quos ulorum gumet zuritas. Bracilos tuzmet wutes, quasi triloremquos huignistimos quod.
    </Text>

    <Text style={styles.textArticle}>
      Krebipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos dolor sit ometi kronsectetur drezadipis molit. Nezunetos maceat tricta qui bicos ducimal dreseriora, veritatis it, vrubitum natatis quos tralaceat dicta que tirolar mitos zutamet consecteum adipisicing elit.
    </Text>

    <Text style={styles.textArticle}>
      Dasenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Vracilles kramet autunes, quasi dolbratis zunissimos 156.000 dicta toruos blotic plucimnodis asperiores.
    </Text>

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/bewegung.png")}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: stylesArticles.scrollView,
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
  subtitleArticle: stylesArticles.subtitleArticle,
});

export default Article10;
