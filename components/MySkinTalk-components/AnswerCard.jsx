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
                        <Text>  vor {props.reply.dayspast>1 ? `${props.reply.dayspast} Tagen`:`${props.reply.dayspast} Tag`}</Text>
                    </View>
                </View>
            </Card>
    );
}

const styles = StyleSheet.create({
    cardsAnswer: {
        flex:1,
        borderWidth: 0,
        backgroundColor: "white",
        alignItems:'baseline',
        justifyContent:'space-around',
        width: screenWidth,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: "orange",
        marginBottom: 20,
        paddingRight:1,
        // shadowOpacity: 0.75,
        // shadowRadius: 10,
        // shadowColor: "black",
      
        // elevation: 5, //shadow for android
    },
    cardTextAnswer: {
        alignItems: "stretch",
        width: screenWidth * 0.9,
        borderWidth: 0,
        paddingBottom: 10,
        alignSelf:'center',
        fontSize: 17,
        marginVertical: 5,
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
        width: 18,
        height: 18,
    },

});