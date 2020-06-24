import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import * as globalcss from "../styles/globalcss";
import connectAPI from '../helpers/api';
import { ScrollView } from "react-native-gesture-handler";
import Qcard from "./MySkinTalk-components/Qcard";

const MySkinTalk = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;
  const agora = Math.random() * 10;
  const [db_data, set_db_data] = useState([])
  const [info, setInfo] = useState([])
  const getData = () => {
    connectAPI(`questions?start=${0}&numbers=${entriesPerScroll}`, 'GET', false, token).then(data => {
      set_db_data(prev => [...prev, data])
    });
    db_data.map(array => {
      array.map(obj => {
        // console.log(obj.id, name);
        setInfo(prev => [...prev, obj])
      })
    });
  }
  useEffect(() => {
    getData();
    console.log(info, 'info=================')
  }, [])

  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dan is my creator {agora}</Text>
      <ScrollView>
        {[...info].map(obj => {
          return (
           <Qcard key={obj.id + agora} obj={obj} />
          )
        }
        )}
        {/* <FlatList
        data={info}
        renderItem={({ item }) => <Item title={item.user_name} />}
        keyExtractor={item => item.id}
      /> */}
      </ScrollView>
      <Text>something should be above me...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: globalcss.container,
});

export default MySkinTalk;
