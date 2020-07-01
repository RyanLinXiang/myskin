import React from "react";
import { StyleSheet, View, ScrollView, Text, Image} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article07 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Selbstuntersuchung der Haut</Text>
    <Divider />

    <Text style={styles.textArticle}>
      Untersuchen Sie Ihre Haut regelmäßig und zeigen Sie Ihrem Arzt jeden
      verdächtig aussehenden Fleck. Ganz gleich, ob Sie ein geringes oder hohes
      Hautkrebsrisiko haben, sollten Sie Ihre Haut regelmäßig auf Veränderungen
      hin untersuchen.
    </Text>

    <Text style={styles.textArticle}>
      Wenn man selbst genauer hinsieht, kann man viel dazu beitragen, Melanome
      auf der eigenen Haut zu entdecken: Mehr als die Hälfte aller Melanome
      werden von den Patienten selbst oder von Familienmitgliedern entdeckt.
    </Text>

    <Text style={styles.textArticle}>
      Eine regelmäßige Selbstuntersuchung der Haut verbessert auch die
      Heilungsrate bei Menschen, die schon einmal Hautkrebs hatten. Sie kann
      Leben retten. Bitten Sie auch andere Menschen in Ihrer Umgebung, die einen
      Blick auf Sie werfen, auf Auffälligkeiten zu achten, wie Zahnarzt,
      Frauenarzt und auch den Friseur.
    </Text>

    <Text style={styles.textArticle}>
      Eine Selbstuntersuchung der Haut ist einfach und nimmt nur etwa zehn bis
      fünfzehn Minuten pro Monat in Anspruch. Selbsthilfegruppen empfehlen,
      diese Routine zu einem Zeitpunkt einzuplanen, an dem Sie eventuell auch
      schnell Ihren Arzt erreichen können, falls Sie Veränderungen entdecken –
      um etwa ein Wochenende voller Unruhe und Ungewissheit zu vermeiden.
    </Text>

    <Image
      style={styles.imgArticle}
      source={require("../../../assets/articles-images/selbstuntersuchung.jpg")}
    />
    <Text style={styles.textArticle}>
      Abbildungen 1 und 2 zeigen, wie man seine Haut von vorn und von hinten
      selbst untersuchen kann. Abbildungen 3 und 4 zeigen, wie eine andere
      Person die Untersuchung Ihrer Haut vornehmen kann.
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
            Prüfen Sie in einem Spiegel bei guten Lichtverhältnissen die
            Vorderseite Ihres Körpers - Gesicht, Hals, Schultern, Arme, Brust,
            Bauch, Oberschenkel und Unterschenkel.
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
            Drehen Sie sich seitlich und heben Sie die Arme, um die rechte und
            linke Seite Ihres Körpers sorgfältig zu betrachten, einschließlich
            der Achselhöhlen.
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
            Mit einem Handspiegel betrachten Sie dann den oberen Rücken, Nacken
            und die Kopfhaut. Anschließend untersuchen Sie Ihren unteren Rücken,
            die Pobacken, die Rückseite der Oberschenkel und die Waden. Ihr
            Partner kann Ihnen dabei behilflich sein, Ihren Rücken zu
            untersuchen.
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
            Untersuchen Sie Ihre Unterarme, Handflächen und Fingernägel sowie
            Ihre Handrücken und zwischen jedem Finger.
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
            Abschließend untersuchen Sie Ihre Füße - die Fußrücken, Sohlen,
            Zehennägel, Zehen und die Zehenzwischenräume.
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
