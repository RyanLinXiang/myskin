import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const ArticlePredict = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>mySkin: Predict</Text>
    <Divider />
    <Text>
      Bei mySkin: Predict handelt es sich um Ihr persönliches Diagnose-Tool zur
      Früherkennung von Melanomen. Bitte laden Sie hierfür ein gut aufgelöstes
      Bild eines Ihrer Muttermale hoch. Innerhalb weniger Sekunden bekommen Sie
      eine Wahrscheinlichkeit Wahrscheinlichkeit, inwieweit Ihr Muttermal ein
      Melanom sein könnte. Dabei beruht die Berechnung auf einem Modell der
      Künstlichen Intelligenz. Dieses Modell basiert auf 10.000 Bildern von
      Melanomen und von Nicht-Melanomen. Je kleiner die Wahrscheinlichkeit,
      desto unwahrscheinlicher ist es, dass Ihr Muttermal ein Melanom ist. Die
      Berechnung ist ohne Gewähr. Bitte konsultieren Sie auf jeden Fall Ihren
      Hautarzt für eine gesicherte Diagnose.
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
});

export default ArticlePredict;
