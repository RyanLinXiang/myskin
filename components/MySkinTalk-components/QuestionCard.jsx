//* #### IMPORTS #### *//
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;
import { Icon as KittenIcon } from "@ui-kitten/components";

const QuestionCard = (props) => {
  //* #### FINAL RENDER #### *//
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.cardTextSubject}> {props.query.subject}</Text>
      <Text style={styles.cardTextQuestion}> {props.query.question}</Text>
      <Divider />
     
      <View style={styles.cardText}>
        <View style={styles.cardButtom}>
          <KittenIcon style={styles.icon} fill="#8F9BB3" name="person" />
          <Text> {props.query.user_name}</Text>
        </View>
        <View style={styles.cardButtom}>
          <KittenIcon style={styles.icon} fill="#8F9BB3" name="clock" />
          <Text>
            {props.query.dayspast > 1
              ? ` vor ${props.query.dayspast} Tagen`
              : ` vor ${props.query.dayspast} Tag`}
          </Text>
        </View>
        {props.user===props.query.user_id ? props.DelButton(props.query.id):null}
        {props.favButton(props.query)}
      </View>
    </View>
  );
}

//* #### STYLESHEET #### *//
const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomWidth: 4,
    borderColor: "orange",
    paddingBottom: 10,
    marginBottom: 10,
    paddingHorizontal:10,
  },
  cardsQuestion: {
    borderWidth: 0,
    backgroundColor: "white",
    alignItems:'center',
    justifyContent:'center',
    width: screenWidth * 0.9,
  },
  cardTextQuestion: {
    paddingVertical: 5,
    fontSize: 17,
  },
  cardTextSubject:{
    paddingBottom: 5,
    fontWeight:'bold',
    color:'orange',
    fontSize:18,
  },
  cardText: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  cardButtom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 20,
    height: 20,
  },
});

//* #### EXPORT #### *//
export default QuestionCard;
