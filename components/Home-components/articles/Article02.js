import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Dimensions, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article02 = (props) => <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Was ist Hautkrebs?</Text>

<Divider />

<Text style={styles.textArticle}>Hautkrebs ist das unkontrollierte Wachstum von Hautzellen.</Text>

<Text style={styles.textArticle}> Hautkrebs entsteht, wenn die DNA, der Träger des Erbguts, in Hautzellen in der Epidermis beschädigt ist und dadurch ein unkontrolliertes Wachstum dieser Zellen verursacht wird. UV-Strahlung (von der Sonne oder auch künstliche UV-Strahlung, wie etwa in Sonnenstudios) ist die direkte Ursache dieser Schädigung.</Text>

<Text style={styles.textArticle}>Die verschiedenen Hautkrebsarten sind nach der Art der Hautzellen benannt, aus denen sie entstehen.</Text>

<Text style={styles.subtitleArticle}>Welche Arten von Hautkrebs gibt es:</Text>

<Text style={styles.textArticle}>Das <Text style={{fontWeight: "bold"}}>Basalzellkarzinom</Text> (Basaliom) ist der am häufigsten diagnostizierte und am besten behandelbare Hautkrebs.</Text>

<Text style={styles.textArticle}>Das <Text style={{fontWeight: "bold"}}>Plattenepithelkarzinom</Text> (Spinaliom, Stachelzellkarzinom) ist die zweithäufigste Form des Hautkrebses. Basaliom und Plattenepithelkarzinom werden auch unter dem Begriff "weißer Hautkrebs" zusammengefasst.</Text>

<Text style={styles.textArticle}>Das <Text style={{fontWeight: "bold"}}>Melanom</Text> (schwarzer Hautkrebs) tritt zwar seltener auf, ist aber die gefährlichste Form von Hautkrebs. Wenn es frühzeitig diagnostiziert wird, ist es meist heilbar. Unbehandelt oder zu spät behandelt kann das Melanom in andere Bereiche des Körpers streuen (metastasieren).</Text>

<Text style={styles.textArticle}>Beim Melanom können häufig genetische Veränderungen (Mutationen) nachgewiesen werden, wie beispielsweise BRAF, c-KIT und NRAS..</Text>
</ScrollView>

const styles = StyleSheet.create({
    scrollView: stylesArticles.scrollView,
    textArticle: stylesArticles.textArticle,
    titleArticle: stylesArticles.titleArticle,
    subtitleArticle: stylesArticles.subtitleArticle,  
  });

export default Article02;
