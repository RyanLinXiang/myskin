import React from "react";
import { StyleSheet, ScrollView,Image, Dimensions, View,} from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const UVIndex = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Der UV-Index</Text>
    <Divider />
    <Text style={styles.textArticle}>
    Der UV-Index (UVI) ist ein international normiertes Maß für die sonnenbrandwirksame solare Bestrahlungsstärke (Ultraviolettstrahlung). Im Allgemeinen gilt der UV-Index als Maß für die stärkste solare Strahlung um die Mittagszeit (Tageshöchstwert). Je höher der UVI ist, desto schneller können bei ungeschützter Haut durch UV-Strahlung bedingte gesundheitliche Schäden wie Sonnenbrände auftreten
    </Text>

    

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/UVIndexLogo1.png")}
    />
 
    <Divider style={styles.divider} />
    <Text style={styles.subtitleArticle}>UV-Index und Sonnenbrand</Text>
  
    <Text style={styles.textArticle}>   
      Was bedeutet der Index nun genau für das Eincremen? Die solare Bestrahlungsstärke bestimmt, wie lange ungeschützte Haut der UV-Strahlung ausgesetzt werden kann, ohne rot zu werden. Dabei gilt: Je höher die solare Bestrahlungsstärke, desto wichtiger ist es, die Haut zu schützen.  Hier liegt die solare Bestrahlungsstärke im Sommer zwischen 0 und 8. In Ländern, die näher am Äquator liegen und in den Bergen kann der Index jedoch auf über 15 steigen. Bei einer solaren Bestrahlungsstärke von 7 kann ungeschützte Haut bereits in zehn bis 15 Minuten einen erheblichen Sonnenbrand erleiden. Bei einem UV-Index von 5 bis 6 geschieht das nach ungefähr 15 bis 25 Minuten. Und sogar bei einer solaren Bestrahlungsstärke von „nur“ 3 reicht manchmal schon eine halbe Stunde, um einen Sonnenbrand zu bekommen. Dabei spielt der Hauttyp natürlich eine Rolle.
    </Text>

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/Hauttyp2.png")}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: stylesArticles.scrollView,
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
  subtitleArticle: stylesArticles.subtitleArticle,
  column: stylesArticles.column,
  row: stylesArticles.row,
  bullet: stylesArticles.bullet,
  bulletText: stylesArticles.bulletText,
  listText: stylesArticles.listText,
  imgArticle: stylesArticles.imgArticle,
  divider : {marginTop:20}
});

export default UVIndex;
