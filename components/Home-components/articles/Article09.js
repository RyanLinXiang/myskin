import React from "react";
import {StyleSheet, ScrollView,Text} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article09 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>Ernährung</Text>

    <Divider />

    <Text style={styles.textArticle}>
      {" "}
      Eine gute Ernährungsweise hilft nicht nur, Ihr Krebsrisiko zu senken, die
      Ernährung spielt auch im Verlauf Ihrer Krebserkrankung eine wichtige
      Rolle. Die richtige Auswahl an Nahrungsmitteln sorgt dafür, dass Sie Ihre
      Kraft und Energie behalten. Sie kann Ihnen auch dabei helfen, mit
      Nebenwirkungen der Behandlung besser zurechtzukommen.
    </Text>

    <Text style={styles.textArticle}>
      Eine gesunde Ernährung hat positive Auswirkungen auf Ihr Leben: Wir
      wissen, was wir essen sollten und was gut für uns ist, aber nach einer
      Krebsdiagnose oder während einer Krebsbehandlung kann es eine große
      Herausforderung sein, gesunde Entscheidungen zu treffen. Es tauchen viele
      Fragen auf, zum Beispiel{" "}
      <Text style={{ fontWeight: "bold" }}>
        „Sollte ich nur Bio-Produkte essen? Muss ich bestimmte Lebensmittel
        aufgeben? Brauche ich mehr Ballaststoffe? Sollte ich Vegetarier werden?“{" "}
      </Text>
      Versuchen Sie, diese Herausforderung in Ihrem Leben anzunehmen und als
      eine Zeit zu akzeptieren, in der Sie die Kontrolle zurückgewinnen, sich
      besinnen und mithilfe von Ernährung und neuen Gewohnheiten ein gesünderes
      Ich zu schaffen.
    </Text>

    <Text style={styles.textArticle}>
      Es kann sein, dass Müdigkeit oder Nebenwirkungen von Medikamenten den
      Appetit verringern. Genießen Sie Lebensmittel, die Sie mögen und die sich
      gut auf Ihre Gesundheit auswirken. Tun Sie sich mit gutem Essen etwas
      Gutes.
    </Text>

    <Text style={styles.subtitleArticle}>
      Sollte ich ökologisch erzeugte Lebensmittel oder Bio-Nahrungsmittel essen?
    </Text>

    <Text style={styles.textArticle}>
      Ökologisch erzeugte Lebensmittel enthalten im Allgemeinen weniger
      chemische Zusatzstoffe. Mit diesem Lebensstil treffen Sie auch eine
      Entscheidung, welche Art von Nahrungsmitteln, Landwirtschaft und
      Umweltschutz Sie fördern wollen, wie Pflanzen angebaut werden, oder unter
      welchen Bedingungen Tiere gehalten werden.
    </Text>

    <Text style={styles.textArticle}>
      Für eine gesunde Ernährung, wie sie auch die Deutsche Gesellschaft für
      Ernährung (DGE) empfiehlt, müssen Nahrungsmittel nicht notwendigerweise
      ein Bio-Siegel tragen: Wichtig ist eine ausgewogene Ernährung mit allen
      nötigen Inhaltsstoffen, die wir zum Leben brauchen.
    </Text>

    <Text style={styles.textArticle}>
      In Krankheitsphasen braucht der Körper ausreichend Energie. Beim Blick auf
      gesunde Nahrungsmittel übersehen Betroffene manchmal, dass sie zu wenig
      essen: Krebserkrankungen gehen oft mit einer Mangelernährung einher. Dann
      fehlen dem Körper Energie, Eiweiß oder andere Nährstoffe. Viele Menschen
      nehmen schon lange vor der Krebsdiagnose ungewollt ab. Achten Sie auf eine
      ausreichende Zufuhr von Nährstoffen und vermeiden Sie eine
      Mangelernährung. Essen Sie ausreichend und ausgewogen – das ist das
      wichtigste Gütesiegel. Spezielle Krebsdiäten, die vielerorts angepriesen
      werden, entbehren oft jeglicher wissenschaftlicher Grundlage. Suchen Sie
      im Zweifel Unterstützung bei qualifizierten Ernährungstherapeuten und
      fragen Ihren Arzt nach Anlaufstellen..
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
