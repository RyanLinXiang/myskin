import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import connectAPI from '../../helpers/api';

const MySkinTalk = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;
  const agora = Math.random() * 10;
  const [db_data, set_db_data] = useState([])
  const [info, setInfo] = useState([])

  useEffect(() => {
    connectAPI(`questions?start=${0}&numbers=${entriesPerScroll}`, 'GET', false, token).then(data => {
      set_db_data(prev => [...prev, data])
    });
    db_data.map(array => {
      array.map(obj => {
        const name = obj.user_name
        console.log(obj.id, name);
        setInfo(prev => [...prev, <Text key={obj.id}>{name}</Text>])
      })
    })
  }, [])
  return (
    <SafeAreaView >
      <Text>Dan is my creator {agora}</Text>
      <FlatList
        data={info}
        renderItem={({ item }) => <Item title={item.user_name} />}
        keyExtractor={item => item.id}
      />
      <Text>something should be above me...</Text>
    </SafeAreaView>
  );
};

export default MySkinTalk;