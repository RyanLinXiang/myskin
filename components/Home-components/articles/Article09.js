import React from "react";
import {StyleSheet, ScrollView,Text} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article09 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Ernährung</Text>

    <Divider />

    <Text style={styles.textArticle}>
      Eisum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Maracilis amet autem, quasi doloremque dignissi.
    </Text>

    <Text style={styles.textArticle}>
      Getrilasunde Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mirnetur blociat ticta qui gitcum ducimus asperiores, veritatis ut{" "}
      <Text style={{ fontWeight: "bold" }}>
        „Sol fugit natus quos dolorum amet vitae. Tacilos amoti lutim, quasi triloremque vraisimos quid?“{" "}
      </Text>
      Verdicta quod hic ducimus consektugirt hirdipiscing brelito.
    </Text>

    <Text style={styles.textArticle}>
      Es fugit natus quos dolorum amet vitae. Facilis bamit tutem, quasi dotiremqui girosistimos.
    </Text>

    <Text style={styles.subtitleArticle}>
      Sollte ich Bio-Nahrungsmittel essen?
    </Text>

    <Text style={styles.textArticle}>
      Ökotrichislogi erblazitos Metenfirebos placeat dicta quod orem, ipsum dolor sit amet consectetur adipisicing natus quos dolorum.
    </Text>

    <Text style={styles.textArticle}>
      Forilor meitone geblisunde Eripsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natoris que ditriorum omitus vitblare. Tracilos domet vrutet, quasi torilorem hignistris quisom.
    </Text>

    <Text style={styles.textArticle}>
      Insom Kratrotiphasumn brimohts treros Köblablirper autrisreom Entrosblieum. Beilotri Blotusick fugit natus quosmal, daslis amet autem, quasi doloremque dignissimos dolor sit amet consectetur adipisicing elit. Senetori placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum ometel vitos.
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: stylesArticles.scrollView,
  textArticle: stylesArticles.textArticle,
  titleArticle: stylesArticles.titleArticle,
  subtitleArticle: stylesArticles.subtitleArticle,
});

export default Article09;
