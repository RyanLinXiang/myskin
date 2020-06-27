import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";
const screenWidth = Dimensions.get("window").width;

const Article08 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Warnzeichen</Text>
    <Divider />

    <Text style={styles.textArticle}>
      Wenn Sie eine der folgenden Hautveränderungen feststellen, halten Sie
      bitte Rücksprache mit Ihrem Arzt:
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"\u2022" + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Eine neue Wucherung oder ein Fleck auf der Haut, z.B. ein
            Leberfleck, eine schuppige Stelle oder ein Knoten.
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
            Veränderung der Größe oder des Erscheinungsbilds eines bereits
            vorhandenen Leberflecks.
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
          <Text style={styles.listText}>Eine nicht heilende Wunde.</Text>
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
            Dunkle Veränderungen unter den Fuß- oder Fingernägeln, die sich
            nicht durch eine Verletzung erklären lassen.
          </Text>
        </View>
      </View>
    </View>
    {/* <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/warnzeichen.jpg")}
    /> */}
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
