import React, { Component, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
// import * as globalcss from "../../styles/globalcss";
import { Card, Text, Divider } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;
import { Icon } from '@ui-kitten/components';
// import Icon from 'react-native-vector-icons/FontAwesome';


export default function Answer(props) {

    //   const [count, setCount]=useState('');

    return (
        // <View style={styles.answerContainer}>
            <Card style={styles.cardsAnswer}>
                <Text style={styles.cardTextAnswer}> {props.reply.answer}</Text>
                <Divider />
                <View style={styles.cardText}>
                    <View style={styles.cardButtom}>
                        <Icon style={styles.icon} fill='#8F9BB3' name='person' />
                        <Text> {props.reply.user_name}</Text>
                    </View>
                    <View style={styles.cardButtom}>
                        <Icon style={styles.icon} fill='#8F9BB3' name='clock' />
                        <Text>  vor {props.reply.dayspast>1 ? `${props.reply.dayspast} Tagen`:`${props.reply.dayspast} Tag`}</Text>
                    </View>
                </View>
            </Card>
           
        // </View>
    );
}

const styles = StyleSheet.create({
    answerContainer: {
        flex: 1,
        backgroundColor: "#fff",
      
      
    
    },
    cardsAnswer: {
        borderWidth: 0,
        backgroundColor: "#fff",
        alignItems: "stretch",
        width: '100%' ,
        borderBottomColor:'darkorange',
        borderBottomWidth:1,
        marginVertical: 5,
       
    },
    cardTextAnswer: {
        paddingBottom: 10,
        fontSize: 16,
    },
    cardText: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    cardButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: 20,
        height: 20,
    },

});