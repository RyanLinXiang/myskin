import React, { useRef } from "react";
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from "react-native";
import { Button, Icon as KittenIcon } from "@ui-kitten/components";
import Form from "react-native-form";

const SearchField = (props) => {
    const FormRef = useRef(null);

    const searchHandler = () => { 
        const { SearchKeyword } = FormRef.current.getValues();
        props.onSubmit(SearchKeyword);
    }
    const SearchIcon = (props) => <KittenIcon {...props} name='search-outline'  /> 
    return (
        // <KeyboardAvoidingView style={styles.outercontainer} behavior="padding">
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
        // </KeyboardAvoidingView>
    )  
}


const styles = StyleSheet.create({
    outercontainer: {
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
  
  export default SearchField;