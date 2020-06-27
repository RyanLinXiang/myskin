import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {  Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article01 = (props) =>  <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Die Haut</Text>
<Divider />
<Text style={styles.textArticle}>Die Haut ist die äußerste Schicht, die Ihren Körper umgibt.
Sie ist das größte Organ des Körpers und erfüllt verschiedene Funktionen.</Text>
<Text style={styles.textArticle} >Die Haut übernimmt wichtige Schutzfunktionen: Sie schirmt Krankheitserreger ab und reguliert die Körpertemperatur.</Text>

<Text style={styles.textArticle}>Unter Einwirkung von Sonnenlicht ist die Haut an der Vitamin-D-Produktion im Körper beteiligt.</Text>

<Text style={styles.textArticle}>Die Haut besteht aus drei Schichten: Die äußere Epidermis, die unterstützende Dermis und die Hypodermis (oder Fettschicht).</Text>

<Text style={styles.textArticle}>Melanozyten, die Zellen, die das für die Hautfarbe zuständige Melanin produzieren, befinden sich in der Epidermis.</Text>

<Text style={styles.textArticle}>Die Regeneration und Produktion von neuen Hautzellen findet in der Basalschicht der Epidermis statt.</Text>
</ScrollView>;

const styles = StyleSheet.create({
    textArticle: stylesArticles.textArticle,
    titleArticle: stylesArticles.titleArticle,
    
  });

export default Article01;
