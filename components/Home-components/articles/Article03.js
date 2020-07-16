import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article03 = (props) => <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Wie verbreitet ist Hautkrebs?</Text>

<Divider />

<Text style={styles.textArticle}>Weltweit ist Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.</Text>

<Text style={styles.textArticle}>Dabei ist Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos quod.</Text>

<Text style={styles.textArticle}>Facilis amet autem, quasi doloremque dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae amet autem, quasi doloremque dignissimos. Plahizan dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. </Text>

<Text style={styles.textArticle}>Blibla ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.</Text>

</ScrollView>

const styles = StyleSheet.create({
    scrollView:stylesArticles.scrollView,
    textArticle: stylesArticles.textArticle,
    titleArticle: stylesArticles.titleArticle,
    
  });

export default Article03;
