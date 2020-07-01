import React from "react";
import { StyleSheet, ScrollView, Image, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article10 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Bewegung ist entscheidend</Text>

    <Divider />

    <Text style={styles.textArticle}>
      {" "}
      Wenn bei Ihnen Hautkrebs diagnostiziert wurde oder Sie sich derzeit einer
      Behandlung unterziehen, können Sie mit körperlicher Aktivität Ihre
      Lebensqualität verbessern.
    </Text>

    <Text style={styles.textArticle}>
      Krebsbedingte Müdigkeit (Fatigue) ist ein Erschöpfungszustand, verbunden
      mit einem erhöhten Bedürfnis nach Ruhe, die in keinem Verhältnis zu allen
      kürzlich vorangegangenen Anstrengungen stehen. Bitte beachten Sie, dass
      diese Art der Erschöpfung nicht mit Ruhe und Schlaf vorübergeht, und dass
      sie das am häufigsten von Patienten berichtete Symptom darstellt. Es mag
      seltsam klingen, gegen Erschöpfung mit Bewegung anzugehen: Aber immer mehr
      Forschungsergebnisse zeigen eine drastische Verbesserung der psychischen
      und körperlichen Gesundheit bei Patienten, die an speziellen
      Sportprogrammen teilnahmen.
    </Text>

    <Text style={styles.textArticle}>
      DasIn Deutschland erkranken jährlich etwa 156.000 Menschen neu an einem
      Basalzellkarzinom mit steigender Tendenz: Man geht davon aus, dass sich
      die Rate in 10-15 Jahren verdoppelt haben wird. Etwa 98.000 Menschen
      erkranken jährlich neu an einem Plattenepithelkarzinom und ungefähr 36.000
      Personen an einem Melanom.
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
