import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article03 = (props) => <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Wie verbreitet ist Hautkrebs?</Text>

<Divider />

<Text style={styles.textArticle}> Weltweit ist die Inzidenz (das heißt die Zahl der Neuerkrankungen) aller Hautkrebsarten in den letzten Jahrzehnten angestiegen. Laut Weltgesundheitsorganisation ist jede dritte neu diagnostizierte Krebserkrankung eine Hautkrebserkrankung.</Text>

<Text style={styles.textArticle}>Dabei ist Hautkrebs oftmals vermeidbar. Trotzdem ist es immer noch die am häufigsten diagnostizierte Krebserkrankung in Ländern wie den USA, Kanada, Australien sowie in einigen europäischen Ländern.</Text>

<Text style={styles.textArticle}>DasIn Deutschland erkranken jährlich etwa 156.000 Menschen neu an einem Basalzellkarzinom mit steigender Tendenz: Man geht davon aus, dass sich die Rate in 10-15 Jahren verdoppelt haben wird. Etwa 98.000 Menschen erkranken jährlich neu an einem Plattenepithelkarzinom und ungefähr 36.000 Personen an einem Melanom.</Text>

</ScrollView>

const styles = StyleSheet.create({
    scrollView:stylesArticles.scrollView,
    textArticle: stylesArticles.textArticle,
    titleArticle: stylesArticles.titleArticle,
    
  });

export default Article03;
