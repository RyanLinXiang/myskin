import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article04 = (props) => <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Risikofaktoren für Hautkrebs</Text>
<Divider />

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Helle oder Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Zahblibla Lencherch</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Hihghfige ausgeblablibla Sojgsstuanung</Text>
        </View>
    </View>
</View>


<Text style={styles.textArticle}>Die Intensität Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos quod.</Text>

<Text style={styles.textArticle}>Die Benutzung von Tenetur placeat dicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae. Facilis amet autem, quasi doloremque dignissimos quod.</Text>

<Text style={styles.textArticle}>Aber Facilis amet autem, quasi dolore dignissimos.</Text>

<Text style={styles.subtitleArticle}>Wussten Sie schon?</Text>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Kündicta quod hic ducimus asperiores, veritatis ut, fugit natus quos dolorum amet vitae.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Facilis amet autem, quasi hic ducimus asperiores dignissimos.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Eine „Lorem“ ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dicta quod hic ducimus asperiores.</Text>
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

export default Article04;
