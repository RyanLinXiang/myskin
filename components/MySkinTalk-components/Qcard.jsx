import React, { Component, useState } from "react";
import { Dimensions,  StyleSheet, View } from "react-native";
// import * as globalcss from "../../styles/globalcss";
import { Card, Text, Divider } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;
import { Icon as KittenIcon } from '@ui-kitten/components';
import FavButton from "./FavButton";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Question(props) {


    return (
        
        <View style={styles.questionContainer}>
                <Text style={styles.cardTextQuestion}> {props.query.question}</Text>
                <Divider />
                <View style={styles.cardText}>
                    <View style={styles.cardButtom}>
                        <KittenIcon style={styles.icon} fill='#8F9BB3' name='person' />
                        <Text> {props.query.user_name}</Text>
                    </View>
                    <View style={styles.cardButtom}>
                        <KittenIcon style={styles.icon} fill='#8F9BB3' name='clock' />
                        <Text> {props.query.dayspast>1 ? `vor ${props.query.dayspast} Tagen`:`vor ${props.query.dayspast} Tag`}</Text>
                    </View>
                    {props.favIcon()}
                    {/* <Icon onPress={() => setFav(prev => !prev)} size={20} color={favCol} name="star" /> */}
                    {/* <FavButton /> */}
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
        borderRadius: 30,
        marginBottom: 20,  
    },
    cardTextQuestion: {
        paddingBottom: 10,   
        fontSize: 20
    },
    cardText: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent:'space-evenly',
    },
    cardButtom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    icon: {
        width: 20,
        height: 20,
    },

});