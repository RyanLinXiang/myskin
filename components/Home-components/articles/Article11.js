import React from "react";
import { StyleSheet, View, ScrollView, Text} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article11 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>
      Entspannnungstechniken
    </Text>

    <Divider />

    <Text style={styles.textArticle}>
      Umzutribla mitus Stressimus, Lorem, ipsum dolor sit amet consectetur pisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.
    </Text>

    <Text style={styles.subtitleArticle}>Stressimus</Text>

    <Text style={styles.textArticle}>
    Stressimus placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Vracilles kramet autunes, quasi dolbratis zunissimos dicta toruos blotic plucimnodis asperiores.
    </Text>

    <Text style={styles.subtitleArticle}>
      Kann man Entspannung aktiv auslösen?
    </Text>

    <Text style={styles.textArticle}>
      Japi, amet autem, quasi doloremque dignissimos dolor sit ometi kronsectetur.asenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Vracilles kramet autunes, quasi Tai Chi, Qi Gong ut Yoga.
    </Text>


    <Text style={styles.subtitleArticle}>Ent­spannungs­tech­niken</Text>

    <Text style={styles.textArticle}>
      Anmosim bestrogtum undimos durtrolip Tigos kanumn estis schblosrium tlurosumein, Zetrotit zumblis Enobriquad tulum findus. Veracilis amoti butim, quasi biloremqui dignissimos qui consectetur adipisicing elis.
    </Text>

    <Text style={styles.textArticle}>
      Umiorem, ipsum dolor sit amet consectetur adipisicing elit ducimus asperiores, veritati.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"1." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>Tai Chi</Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
      Timus Prorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"2." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>Qi Gong</Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
    Mirit breilne Tenetur placeat dicta quod hic ducimus asperiores ipsum dolor sit amet consectetur veritatis ut, fugit natur. Telila mie placeat dicta quod hic ducimus asperiores, veritatis utom amet autem, quasi doloremque dignissimos.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"3." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>Yoga</Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
      Yoga ildung ipsum dolor sit amet consecte adipisicing quod hic ducimus. Wenn Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Solucilas tramus dautom, que biloremque.
    </Text>
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

export default Article11;
