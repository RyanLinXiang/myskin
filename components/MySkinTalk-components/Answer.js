import React, { Component, useState } from "react";
import { Dimensions,StyleSheet, View } from "react-native";
import * as globalcss from "../../styles/globalcss";
import { Card, Text, Divider } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;
import { Icon } from '@ui-kitten/components';


    export default function Answer (props) {

      const [cont, setCont]=useState('');

    return (
      <View style={styles.answerContainer}>
        <Card style={styles.cardsAnswer}>
          <Text style={styles.cardTextAnswer}> {props.info.answer}</Text>
          <Divider />
          <View style={styles.cardText}>
              <View style={styles.cardButtom}>
                 <Icon style={styles.icon} fill='#8F9BB3' name='person' />
                 <Text> {props.info.user_name}</Text>
              </View>
              <View style={styles.cardButtom}>
                <Icon style={styles.icon} fill='#8F9BB3' name='clock' />
                <Text> {props.info.dayspast} days ago</Text>
                 {/* // ?"If"-Statemant : 1 day || >=2days  */}
              </View>
          </View>
        </Card>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    cardsAnswer: { 
      borderWidth: 0,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: screenWidth * 0.9,
      borderRadius: 10,
      shadowOpacity: 0.75,
      shadowRadius: 10,
      shadowColor: "black",
      marginBottom:20,
      elevation: 5, //schadow for android
    },
    cardTextAnswer:{
        paddingBottom: 10,
    },
    cardText:{
        flexDirection:'row',
        paddingTop:10,
        justifyContent: 'space-between',
    },
    cardButtom:{
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    icon: {
      width: 20,
      height: 20,
    },

});
