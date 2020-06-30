import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Card, Text, Divider } from "@ui-kitten/components";
const screenWidth = Dimensions.get("window").width;
import { Icon } from '@ui-kitten/components';


export default function Answer(props) {

    return (
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
                        <Text> {props.reply.dayspast>1 ? `${props.reply.dayspast} days ago`:`${props.reply.dayspast} day ago`}</Text>
                    </View>
                    {props.user===props.reply.user_id ? props.DelButton(props.reply):null}
                </View>
            </Card>
    );
}

const styles = StyleSheet.create({
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
        marginBottom: 20,
        elevation: 5, //shadow for android
    },
    cardTextAnswer: {
        paddingBottom: 10,
        fontSize: 18
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