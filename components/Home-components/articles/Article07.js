import React from "react";
import { StyleSheet, View, ScrollView, Text, Image} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article07 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Selbstuntersuchung der Haut</Text>
    <Divider />

    <Text style={styles.textArticle}>
      Unterorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Macilis amit butem, quasi doloremque dignissimos quod.
    </Text>

    <Text style={styles.textArticle}>
      Wenn Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi biloremque.
    </Text>

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/selbstuntersuchung.jpg")}
    />
    <Text style={styles.textArticle}>
      Abbildung ipsum dolor sit amet consecte adipisicing quod hic ducimus.
    </Text>

    <Text style={styles.subtitleArticle}>
      Und so geht die Selbstuntersuchung Schritt für Schritt
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"1." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Prorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.
          </Text>
        </View>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"2." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Drelila mie placeat dicta quod hic ducimus asperiores, veritatis utom amet autem, quasi doloremque dignissimos.
          </Text>
        </View>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"3." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Mirit breilne Tenetur placeat dicta quod hic ducimus asperiores ipsum dolor sit amet consectetur veritatis ut, fugit natur.
          </Text>
        </View>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"4." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Unterilis amet autem, quasi dilaremqui bignissimos quid.
          </Text>
        </View>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"5." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Absquid hic ducimus asperiores, veritatis ut, fugit natus ques dalirum amite vitori.
          </Text>
        </View>
      </View>
    </View>
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
});
export default Article07;
