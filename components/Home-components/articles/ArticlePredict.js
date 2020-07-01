import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const ArticlePredict = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>mySkin: Predict</Text>

    <Divider />

    <Text style={styles.textArticle}>
      Bei <Text style={{ color: "darkorange" }}>mySkin</Text>:{" "}
      <Text style={{ fontWeight: "bold" }}>Predict</Text> handelt es sich um Ihr
      persönliches Diagnose-Tool zur Früherkennung von Melanomen.
    </Text>

    <Text style={styles.textArticle}>
      Bitte laden Sie hierfür ein gut aufgelöstes Bild eines Ihrer Muttermale
      hoch.
    </Text>

    <Text style={styles.textArticle}>
      Innerhalb weniger Sekunden bekommen Sie eine{" "}
      <Text style={{ fontWeight: "bold" }}>Wahrscheinlichkeit</Text>, inwieweit
      Ihr Muttermal ein Melanom sein könnte.
    </Text>

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/results.jpg")}
    />

    <Text style={styles.textArticle}>
      Dabei beruht die Berechnung auf einem Modell der{" "}
      <Text style={{ color: "darkorange" }}>Künstlichen Intelligenz</Text>.
    </Text>

    <Text style={styles.textArticle}>
      Dieses Modell basiert auf 10.000 Bildern von Melanomen und von
      Nicht-Melanomen. Je kleiner die Wahrscheinlichkeit, desto
      unwahrscheinlicher ist es, dass Ihr Muttermal ein Melanom ist.
    </Text>

    <Text style={styles.textArticle}>
      <Text style={{ fontWeight: "bold" }}>
        Die Berechnung ist ohne Gewähr.
      </Text>{" "}
      Bitte konsultieren Sie auf jeden Fall Ihren Hautarzt für eine gesicherte
      Diagnose.
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
  imgArticle: {
    alignSelf: "center",
    maxHeight: 150,
  },
});

export default ArticlePredict;
