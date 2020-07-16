import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article02 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Was ist Hautkrebs?</Text>

    <Divider />

    <Text style={styles.textArticle}>
      Hautkrebs ipsum dolor sit amet consectetur adipisicing elit.
    </Text>

    <Text style={styles.textArticle}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat
      dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum
      amet vitae. Facilis amet autem, quasi doloremque dignissimos.
    </Text>

    <Text style={styles.textArticle}>
      Die verschiedenen fugit natus quos dolorum amet vitae. Facilis amet autem,
      quasi doloremque dignissimos quod.
    </Text>

    <Text style={styles.subtitleArticle}>
      Welche Arten von Hautkrebs gibt es:
    </Text>

    <Text style={styles.textArticle}>
      Das <Text style={{ fontWeight: "bold" }}>Bashgddjghjhinom</Text>{" "}
      (Basgfsfgsm) ist ipsum dolor sit amet consectetur adipisicing elit.
    </Text>

    <Text style={styles.textArticle}>
      Das <Text style={{ fontWeight: "bold" }}>Plahfdvcfghfvjom</Text>{" "}
      (Shvkiakm) ist Facilis amet autem, quasi doloremque dignissimos
      quod. Tfhkhg placeat dicta quod hic ducimus asperiores, veritatis ut,
      fugit natus quos dolorum amet vitae
    </Text>

    <Text style={styles.textArticle}>
      Das <Text style={{ fontWeight: "bold" }}>Mekvsm mnyvnc</Text> (schkhgjhr
      Haklgsis) ipsum dolor sit amet consectetur adipisicing elit. Tenetur
      placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos
      dolorum amet vitae.
    </Text>

    <Text style={styles.textArticle}>
      Beim Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: stylesArticles.scrollView,
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
  subtitleArticle: stylesArticles.subtitleArticle,
});

export default Article02;
