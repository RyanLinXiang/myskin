import React, {Component} from 'react';
import { Text,View, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import Clock from './Clock';

export default class CountDown extends Component {

    constructor (props) {
        super(props);
        this.state = {
            skinScreening: '3 Juli, 2020',
            newSkinScreening: '',
        }
    }

    changeScreeningDate (){
        // console.log('state', this.state)
        this.setState({skinScreening: this.state.newSkinScreening});    
    }

    render() {
        return (
            <View>
                <View>
                    <Text> Nächster HautScreening Termin ist am {this.state.skinScreening} </Text>
                </View>
                <Clock skinScreening={this.state.skinScreening}/>
                <View>
                    <TextInput 
                    placeholder='Neuer Termin'
                    onChange={event => this.setState({newSkinScreening: event.nativeEvent.text})}
                    
                    ></TextInput>
                    <Button title="Submit" onPress={() => this.changeScreeningDate()}></Button>
                </View>
            </View>
            
        )
    }
}
