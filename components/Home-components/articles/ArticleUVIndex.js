import React from "react";
import { StyleSheet, ScrollView,Image, Dimensions, View,} from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const UVIndex = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Der UV-Index</Text>
    <Divider />
    <Text style={styles.textArticle}>
    Der UV-Index (UVI) Unterorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Macilis amit butem, quasi doloremque dignissimos quod.
    </Text>

    

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/UVIndexLogo1.png")}
    />
 
    <Divider style={styles.divider} />
    <Text style={styles.subtitleArticle}>UV-Index und Sonnenbrand</Text>
  
    <Text style={styles.textArticle}>   
    Wenn Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, trubit muratum quos dolorum amet vitae. Facilis amet autem, quasi biloremque. Wenetur placeat dicta que sicum vocimus kasperium, veritatis ut, fugit natus.
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
