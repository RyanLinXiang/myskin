import React from "react";
import { StyleSheet, View, ScrollView, Text} from "react-native";
import { Divider } from "@ui-kitten/components";
import * as stylesArticles from "./stylesArticles";

const Article11 = (props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.titleArticle}>
      Meditation und Entspannnungs- techniken
    </Text>

    <Divider />

    <Text style={styles.textArticle}>
      {" "}
      Um mit Stress, Ängsten und Sorgen rund um die Erkrankung besser umgehen zu
      können, helfen Meditation und Entspannung, etwas Ruhe in den Alltag zu
      bringen.
    </Text>

    <Text style={styles.subtitleArticle}>Stress</Text>

    <Text style={styles.textArticle}>
      Stress ist unvermeidbar. Menschen, die unter Stress stehen, sind
      anfälliger für Viruserkrankungen und Infektionen und brauchen eventuell
      länger, um sich von einer Operation zu erholen. Reizbarkeit,
      Kopfschmerzen, Erschöpfung, Ängste, Magenverstimmung und Schlafstörungen
      können alles Symptome für langanhaltenden oder chronischen Stress sein.
      Die gute Nachricht ist, dass man Methoden erlernen kann, um Körper und
      Geist wieder in Einklang zu bringen.
    </Text>

    <Text style={styles.subtitleArticle}>
      Kann man Entspannung aktiv auslösen?
    </Text>

    <Text style={styles.textArticle}>
      Ja, das ist die sogenannte „Entspannungsreaktion“. Entspannungsübungen –
      oder techniken führen im Körper zur Freisetzung von Botenstoffen oder
      Signalen im Gehirn. Diese Entspannungsreaktion kann den negativen Effekten
      von Stress entgegenwirken. Techniken, um eine tiefe Entspannung zu
      erreichen, sind Fantasiereisen, geführte Imagination, Visualisieren,
      Meditation, progressive Muskelentspannung, Massage, Atemtechniken, Gebete,
      Tai Chi, Qi Gong und Yoga.
    </Text>

    <Text style={styles.subtitleArticle}>Was ist Meditation?</Text>

    <Text style={styles.textArticle}>
      Die uralte Praxis der Meditation bezieht sich auf eine ganze Reihe von
      Techniken zur Beruhigung eines überaktiven Geistes. Es ist eine Übung zum
      Zähmen des Geistes und bei regelmäßiger Praxis kann sich eine emotionale
      positive Einstellung entwickeln.
    </Text>

    <Text style={styles.textArticle}>
      Wissenschaftliche Studien an Meditierenden, die moderne Techniken zur
      Beobachtung der Hirnströme verwenden, haben reale Veränderungen in jenen
      Bereichen des Gehirns nachgewiesen, die für gesunde kognitive und
      emotionale Verarbeitungsprozesse von Bedeutung sind.
    </Text>

    <Text style={styles.textArticle}>
      Es gibt viele Formen der Meditation. Für einige müssen Sie still sitzen,
      während andere Formen wie Tai Chi, Qi Gong oder Gehmeditationen einfache
      Bewegungen beinhalten. Bei regelmäßiger Praxis wird Sie Ihnen helfen,
      klare Entscheidungen zu treffen, Sie werden besser darauf vorbereitet, mit
      dem Stress und den Herausforderungen umzugehen, die eine Hautkrebsdiagnose
      mit sich bringt.
    </Text>

    <Text style={styles.subtitleArticle}>Ent­spannungs­tech­niken</Text>

    <Text style={styles.textArticle}>
      An beschäftigten und durchgeplanten Tagen kann es schwierig sein, Zeit zum
      Entspannen zu finden. Es gibt nicht die eine spezielle Technik, die bei
      jedem Menschen die Entspannungsreaktion auslöst. Vielleicht ist es für Sie
      auch interessanter und motivierender, die Techniken zu variieren. Denken
      Sie daran, dass es bei Entspannung nicht darum geht, fernzusehen oder ein
      Nickerchen zu machen. Es geht darum, sich Zeit dafür zu nehmen, die
      Auswirkungen von Stress zu reduzieren, die Ihr Nervensystem überfordern.
    </Text>

    <Text style={styles.textArticle}>
      Um festzustellen, was am besten zu Ihrer aktuellen Situation und
      Lebensweise passt, sollten Sie verschiedene Entspannungstechniken
      ausprobieren und üben.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"1." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Progressive Muskel­ent­span­nung (PME)
          </Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
      Wenn der Körper auf Stress und Ängste reagiert, kann es zu
      Muskelverspannungen kommen, die zu Muskelschmerzen, Kopfschmerzen und
      allgemeiner Erschöpfung führen können. PME ist eine Methode, um die
      angestauten Muskelverspannungen zu lösen. Die Technik bietet Ihnen eine
      Anleitung, wie Sie nacheinander bestimmte Muskelgruppen gezielt anspannen
      und entspannen, um Ihren Körper und Geist wieder ins Gleichgewicht zu
      bringen. Die Abfolge der Muskelgruppen beginnt häufig an den Füßen und
      geht dann den gesamten Körper hinauf bis zum Kopf.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"2." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>
            Visualisieren oder geführte Imagination
          </Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
      Bei dieser Methode lernen Sie, sich mithilfe Ihrer fünf Sinne (Sehen,
      Riechen, Tasten, Schmecken und Hören) Ihren liebsten friedlichen Ort
      vorzustellen. In Ihrer Vorstellung können Sie in einer Fantasiereise
      vielleicht die warmen Sonnenstrahlen auf Ihren Schultern spüren und die
      Vögel singen hören. Das Schaffen dieses sicheren und beruhigenden Bildes
      versetzt Sie in einen Zustand tiefer Entspannung, dadurch können sich
      Anspannungen lösen. Diese Entspannungstechnik können Sie allein
      durchführen oder während Sie einer Tonaufnahme zuhören, die Sie durch die
      Visualisierung führt.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"3." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>Tiefe Atmung</Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
      Tiefe Atmung ist eine kraftvolle und einfache Entspannungstechnik, die Sie
      ganz einfach in Ihren Alltag integrieren können. Wenn Sie unter Stress
      stehen, ist Ihre Atmung sehr flach, was negative Auswirkungen auf Ihren
      Körper und Geist hat. Wenn Sie lernen, tief und achtsam zu atmen,
      besonders tief und langsam auszuatmen, hilft Ihnen das dabei, emotionale
      Energien zu zerstreuen und Ihre innere Ruhe wiederherzustellen.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"4." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>Tai Chi</Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
      Diese sanfte chinesische Praxis ist eine ideale körperliche und fast
      meditative Übung. Mit langsamen, fließenden körperlichen Bewegungen findet
      der Körper in eine neue Ausrichtung, die Ihnen dabei hilft, auf Kräfte,
      die außerhalb Ihrer Kontrolle liegen, achtsam reagieren zu können. Tai Chi
      hilft auch dabei, den Körper zu dehnen und zu kräftigen.
    </Text>

    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{"5." + " "}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text style={styles.listText}>Yoga</Text>
        </View>
      </View>
    </View>

    <Text style={styles.textArticle}>
      Yoga ist eine Kombination aus Bewegung und Atmung. Es lehrt, in Einklang
      mit sich selbst zu leben und ist in der Lage den Körper und Geist durch
      bestimmte Körperhaltungen, Bewegungen und Atemtechniken zu regenerieren.
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
