import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article08 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Warnzeichen</Text>
    <Divider />

    <Text style={styles.textArticle}>
      Wenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus:
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"\u2022" + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Eiorem, ipsum dolor sit amet consectetur adipisicing elit ducimus asperiores, veritati.
          </Text>
        </View>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"\u2022" + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Veracilis amoti butim, quasi biloremqui dignissimos qui consectetur adipisicing elis.
          </Text>
        </View>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"\u2022" + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>Eicilis omit quitem, quasi doblaremqui citnistimos.</Text>
        </View>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"\u2022" + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Duipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos.
          </Text>
        </View>
      </View>
    </View>
    <Text style={styles.textArticle}>
      Nailis amet autem, quasi caliremqui signistrsimos:
    </Text>
    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/warn1.jpg")}
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
  imgArticle:  stylesArticles.imgArticle,
});

export default Article08;
