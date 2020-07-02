//* #### IMPORTS #### *//
import React, { useRef } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Icon as KittenIcon } from "@ui-kitten/components";
import Form from "react-native-form";

const SearchField = (props) => {
    //* #### VARIABLES/HANDLERS #### *//
    const FormRef = useRef(null);

    const searchHandler = () => { 
        const { SearchKeyword } = FormRef.current.getValues();
        SearchKeyword.length<1 ?
            alert('Bitte was zum suchen eingeben'):props.onSubmit(SearchKeyword);
    }

    //* #### ACCESSORY COMPONENTS TO BE RENDERED #### *//
    const SearchIcon = (props) => <KittenIcon {...props} name='search-outline' />

    //* #### FINAL RENDER #### *//
    return (
            <Form ref={FormRef}>
                <View style={styles.innercontainer}>
                    <View style={styles.textinputcontainer}>
                        <TextInput
                            type="TextInput"
                            name="SearchKeyword"
                            placeholder={props.placeholder}
                            style={styles.textinput}
                        />
                    </View>
                    <View style={styles.buttoncontainer}>
                        <Button onPress={searchHandler} type='Submit' accessoryLeft={SearchIcon}  status='warning'/>
                    </View>
                </View>
            </Form>
    )  
}

//* #### STYLESHEET #### *//
const styles = StyleSheet.create({
    outercontainer: { //  <==================== DELETE THIS
      flex: 1,
      width: "100%",
      maxHeight: 85,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'orange' 
    },
    innercontainer: {  
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#fff',
      borderColor: 'darkgray',
      borderWidth: 3,
      borderRadius: 10,
      paddingLeft: 5,
    },
    textinput: {
        fontSize: 18,
        margin: 9,
    },
    textinputcontainer: {
         flex: 4,
        
     },
    buttoncontainer: { flex: 1 },
  });
  
  //* #### EXPORT #### *//
  export default SearchField;