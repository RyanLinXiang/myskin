import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article05 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Vitamin D</Text>
    <Divider />
    <Text style={styles.textArticle}>
      Vitamin D wird vom Körper mit Hilfe von Sonnenlicht produziert. Es ist für
      die Entwicklung starker Knochen und den Erhalt einer optimalen Gesundheit
      entscheidend. Auf natürlichem Wege wird Vitamin D durch Sonneneinstrahlung
      auf Ihre Haut gebildet. Die ultravioletten B-Strahlen der Sonne sind die
      wichtigste Quelle, um diesen Prozess in Gang zu setzen. Eine andere
      wichtige Vitamin D-Quelle ist fetter Fisch wie z.B. Lachs, Hering und
      Makrele. Ein Mensch benötigt normalerweise nur einige Minuten direkter
      Sonneneinstrahlung, um die erforderliche Dosis an Vitamin D bilden zu
      können.
    </Text>

    <Text style={styles.textArticle}>
      In den Wintermonaten, oder wenn Menschen nach einer Hautkrebserkrankung
      strengen Sonnenschutz einhalten, kann es zu Vitamin-D-Mangelzuständen
      kommen. Hier kann man eventuell die Vitamin-D3-Spiegel messen und Vitamin
      D von außen zuführen.
    </Text>

    <Text style={styles.textArticle}>
      Bitten Sie Ihren Arzt, Ihren Vitamin D3-Spiegel im Blut zu testen.
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
