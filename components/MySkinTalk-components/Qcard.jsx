import React, { Component, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
// import * as globalcss from "../../styles/globalcss";
import { Card, Text, Divider } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;
import { Icon } from '@ui-kitten/components';
// import Icon from 'react-native-vector-icons/FontAwesome';


export default function Question(props) {

    //   const [count, setCount]=useState('');

    return (
        <View style={styles.questionContainer}>
                <Text style={styles.cardTextQuestion}> {props.query.question}</Text>
                <Divider />
                <View style={styles.cardText}>
                    <View style={styles.cardButtom}>
                        <Icon style={styles.icon} fill='#8F9BB3' name='person' />
                        <Text> {props.query.user_name}</Text>
                    </View>
                    <View style={styles.cardButtom}>
                        <Icon style={styles.icon} fill='#8F9BB3' name='clock' />
                        <Text> {props.query.dayspast>1 ? `${props.query.dayspast} days ago`:`${props.query.dayspast} day ago`}</Text>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    questionContainer: {
        flex: 1,
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
        paddingBottom: 10,
        marginBottom: 10,
    },
    cardsQuestion: {
        borderWidth: 0,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: screenWidth * 0.9,
        borderRadius: 10,
        shadowOpacity: 0.75,
        shadowRadius: 10,
        shadowColor: "black",
        marginBottom: 20,
        elevation: 5, //shadow for android
    },
    cardTextQuestion: {
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 20
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