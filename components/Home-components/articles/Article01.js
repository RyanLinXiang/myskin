import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {  Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article01 = (props) =>  <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Die Haut</Text>
<Divider />
<Text style={styles.textArticle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.</Text>
<Text style={styles.textArticle} >Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos quod?</Text>

<Text style={styles.textArticle}>Unter Einwirkung von Sonnenlicht placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos quod?</Text>

<Text style={styles.textArticle}>Die Haut fugit natus quos dolorum amet vitae.</Text>

<Text style={styles.textArticle}>Melanozyten, die Zellen, ipsum dolor sit amet consectetur adipisicing elit placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. .</Text>

<Text style={styles.textArticle}>Die Regeneration und Facilis amet autem, quasi doloremque dignissimos.</Text>
</ScrollView>;

const styles = StyleSheet.create({
    textArticle: stylesArticles.textArticle,
    titleArticle: stylesArticles.titleArticle,
    
  });

export default Article01;
