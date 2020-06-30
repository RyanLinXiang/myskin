import React, { useRef } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Icon as KittenIcon } from "@ui-kitten/components";
import Form from "react-native-form";

const SearchField = (props) => {
    const FormRef = useRef(null);

    const searchHandler = () => { 
        const { SearchKeyword } = FormRef.current.getValues();
        SearchKeyword.length<1 ?
            alert('Bitte was zum suchen eingeben'):props.onSubmit(SearchKeyword);
    }
    const SearchIcon = (props) => <KittenIcon {...props} name='search-outline' />
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
                        <Button onPress={searchHandler} type='Submit' accessoryLeft={SearchIcon} />
                    </View>
                </View>
            </Form>
    )  
}


const styles = StyleSheet.create({
    outercontainer: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    innercontainer: {
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#fff',
      borderColor: 'darkorange',
      borderWidth: 2,
      borderRadius: 10,
      paddingLeft: 5,
    },
    textinput: {
        fontSize: 20,
        margin: 10,
    },
    textinputcontainer: { flex: 4 },
    buttoncontainer: { flex: 1 },
  });
  
  export default SearchField;