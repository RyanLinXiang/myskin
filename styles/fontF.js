import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Home from '../components/Home';

const getFonts = () => {
    return Font.loadAsync ({
        'roboto-light': require ('../assets/fonts/Roboto-Light.ttf'),
        'roboto-italic': require('../assets/fonts/Roboto-Italic.ttf'),
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-boldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf')
    })
};

export default function fontF () {
    const [fontsLoaded, setFontsLodaded] = useState (false);

    if (fontsLoaded){
        return (
            <Home />
            );
    } else {
        return (
            <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLodaded(true)}
        />
        );
        
    }
    
}

