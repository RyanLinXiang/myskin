import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, TextInput } from "react-native";
import {
    Button,
    //   Card,
    Modal,
    Text,
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
    const [visible, setVisible] = useState(false);
    const InputQuestion = (props) => <Input
        multiline={true}
        numberOfLines={10}
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
            <Button style={styles.button} status='warning' accessoryRight={PlusIcon} onPress={() => setVisible(true)}>ASK A QUESTION</Button>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <TextInput
                    editable
                    maxLength={400}
                    multiline
                    numberOfLines={10}
                    placeholder='Place your Text'
                    style={styles.input}
                    onChangeText={nextValue => setValue(nextValue)}
                    value={value}
                />

                <Button onPress={()=> props.submit(value)} style={styles.button} status='warning' accessoryRight={PlusIcon} />
            </Modal>
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
        width: 300,
        margin: 10,
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 20,
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    view: {
        flexWrap: 'wrap',
        width: '100%',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});

export default AddQuestion