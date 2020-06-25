import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import {
    Button,
    //   Card,
    //   Modal,
    //   Text,
    //   List,
    //   ListItem,
    Icon as KittenIcon,
    Input,
    //   Divider,
} from "@ui-kitten/components";
import Icon from 'react-native-vector-icons/FontAwesome';
// import connectAPI from "../helpers/api";
// import * as globalcss from "../styles/globalcss";
// import FavButoon from "./MySkinTalk-components/FavButton";
// import { ScrollView } from "react-native-gesture-handler";

const AddQuestion = (props) => {
    const [value, setValue] = useState('');
    const InputQuestion = (props) => <Input
        placeholder='Place your Text'
        value={value}
        style={styles.input}
        onChangeText={nextValue => setValue(nextValue)}
    />

    const PlusIcon = (props) => (
        <KittenIcon {...props} name='plus' />
    );
    return (
        <View>
            <Input
                placeholder='Place your Text'
                value={value}
                style={styles.input}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Button style={styles.button} status='warning' accessoryRight={PlusIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
        alignSelf: 'stretch'
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        alignSelf: 'flex-start',
        fontSize: 9
    },
    view :{
        flexWrap: 'wrap',
        width: '100%',
    },
});

export default AddQuestion