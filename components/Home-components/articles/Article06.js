import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article06 = (props) => <ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.titleArticle}>Wie Sie sich und Ihre Haut schützen können</Text>
<Divider />

<Text style={styles.textArticle}>Sonnenschutz ist das ganze Jahr über wichtig, besonders aber von Spätfrühling bis Frühherbst. Denken Sie daran, dass reflektierende Oberflächen wie Wasser, Schnee, Sand, Beton und Eis die Sonnenbestrahlung verstärken und auch hier Maßnahmen zum Sonnenschutz erforderlich sind.</Text>

<Text style={styles.textArticle}>Sich schützen bedeutet aber nicht, drinnen zu bleiben: Genießen Sie Aktivitäten im Freien und ergreifen Sie Maßnahmen zum Schutz vor der Sonne.</Text>

<Text style={styles.textArticle}>Es ist wichtig, sich daran zu erinnern, dass eine „Grundbräune“ bereits ein Anzeichen für einen Sonnenschaden ist. Sie schützt Sie nicht vor der schädigenden Wirkung der Sonneneinstrahlung.</Text>

<Text style={styles.subtitleArticle}>Wie Sie Ihre Haut vor UV-Strahlung schützen können</Text>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Bleiben Sie im Schatten</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Sorgen Sie selbst für Schatten mithilfe von Sonnenschirmen, Bäumen, Vordächern, Markisen, Pavillons oder tragbaren Zelten.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Tragen Sie lockere Kleidung aus dichtem Gewebe, um Ihre Arme und Beine zu bedecken. Wenn Sie das Kleidungsstück gegen das Licht halten, sollte man nicht hindurchsehen können.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Tragen Sie, wenn Sie in der Sonne sind, stets Sonnencreme und Lippenschutz mit einem Breitbandschutz und einem Sonnenschutzfaktor von mindestens 30 auf. Vergessen Sie nicht, den Sonnenschutz nach dem Schwimmen, Abtrocknen oder Schwitzen und gemäß den Produktanweisungen erneut aufzutragen.</Text>
        </View>
    </View>
</View>

<View style={ styles.column }>
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text style={ styles.listText }>Mit einem T-Shirt oder spezieller UV-Schutz-Kleidung, z.B. beim Baden, können Sie Haut vor Sonne schützen und brauchen damit insgesamt weniger Sonnenschutz aufzutragen.</Text>
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
