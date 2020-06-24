import React, { useState, useEffect } from "react";
// import { StyleSheet, SafeAreaView } from "react-native";
import {
    Button,
} from "@ui-kitten/components";
import Icon from 'react-native-vector-icons/FontAwesome';


const FavButoon = () => {
    const [fav, setFav] = useState(false)
    let favCol = fav ? 'yellow':'grey'
    return (
        <React.Fragment>
            {/* <Button size="tiny" onPress={() => setFav(prev => !prev)}> */}
                <Icon onPress={() => setFav(prev => !prev)} size={20} color={favCol} name="star" />
            {/* </Button> */}
        </React.Fragment>
    )
}
export default FavButoon