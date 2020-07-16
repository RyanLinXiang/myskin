import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article06 = (props) => <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Wie Sie sich und Ihre Haut schützen können</Text>
<Divider />

<Text style={styles.textArticle}>Sonnenschutz ist ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos.</Text>

<Text style={styles.textArticle}>Sich dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque.</Text>

<Text style={styles.textArticle}>Es ist Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>

<Text style={styles.subtitleArticle}>Wie Sie Ihre Haut vor UV-Strahlung schützen können</Text>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Blabli khie imp Scjkskven</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Sorijhen kije seldicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Trilala mie logdkgre Mleing ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Miran placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Blacilis omit autem, quasi doloremque bignissimos quid.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Mot reitzilne T-Shozrt obir ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus.</Text>
        </View>
    </View>
</View>

</ScrollView>

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
    
});

export default Article06;
