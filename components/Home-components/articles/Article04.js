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
            <Text style={ styles.listText }>Helle oder sommersprossige Haut, blondes oder helles Haar und eine helle Augenfarbe</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Zahlreiche Leberflecken</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Häufige ausgedehnte Sonnenbestrahlung</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Hautkrebs in der Vorgeschichte, Hautkrebs in der Familiengeschichte</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Anwendung von Immunsuppressiva, Kortikosteroiden oder anderen Arzneimitteln, durch die die Haut sonnenempfindlicher wird.</Text>
        </View>
    </View>
</View>



<Text style={styles.textArticle}>Die Intensität der ultravioletten (UV) Strahlung, die in Solarien eingesetzt wird, ist schätzungsweise zehn bis fünfzehnmal höher als man es von der Mittagssonne erwartet.</Text>

<Text style={styles.textArticle}>Die Benutzung von Solarien, insbesondere vor einem Alter von zehn bis fünfzehn Jahren, steigert das Risiko für die Entstehung eines Melanoms. Daher ist in Deutschland die Nutzung öffentlicher Sonnenstudios für Minderjährige unter 18 Jahren verboten.</Text>

<Text style={styles.textArticle}>Aber auch bei Menschen ohne diese Risikofaktoren kann ein Melanom auftreten.</Text>

<Text style={styles.subtitleArticle}>Wussten Sie schon?</Text>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Künstliche Bräunung durch Solarien fügt Ihrer Haut signifikanten Schaden zu.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Sonnenbrände und Sonnenbräune sind Anzeichen für eine Hautschädigung; beides ist bedenklich und sollte besser vermieden werden.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Eine „Grundbräune“ schützt Ihre Haut nicht vor einer Schädigung durch die Sonne.</Text>
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
