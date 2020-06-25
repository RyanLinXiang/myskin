//* #### IMPORTS #### *//

import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
//   Button,
//   Card,
//   Modal,
//   Text,
  List,
  ListItem,
  Icon as KittenIcon,
  Divider,
} from "@ui-kitten/components";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import connectAPI from "../helpers/api";
import * as globalcss from "../../styles/globalcss";
import FavButton from "./FavButton";
// import { ScrollView } from "react-native-gesture-handler";
// import AddQuestion from "./MySkinTalk-components/AddQuestion";
// import Qcard from './MySkinTalk-components/Qcard';
// import AnswerCard from './MySkinTalk-components/AnswerCard';

const QuestionsList = (props) => {
//* #### ACCESSORY COMPONENTS TO BE RENDERED #### *//

const renderItemAccessory = (props) => (
    <React.Fragment>
      <FavButton />
    </React.Fragment>
  );

  const renderItemIcon = (props) => <KittenIcon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <React.Fragment>
      <ListItem
        onPress={function (me) {
          const questionText = this.children.props.children[1].props.children[0].props.component;
          const queryID = props.findQuestion(questionText)
          props.getAnswers(queryID)
          props.setVisible(true)
        }
        }
        title={item.subject}
        accessoryLeft={renderItemIcon}
        accessoryRight={renderItemAccessory}
        style={styles.listitem}
      />
      <Divider />
    </React.Fragment>
  );



  //* #### FINAL RENDER #### *//

  return <List style={styles.list} data={props.data} renderItem={renderItem} />
}



//* #### STYLESHEET #### *//

const styles = StyleSheet.create({
    container: globalcss.container,
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    list: {
      width: "100%",
      backgroundColor: globalcss.container.backgroundColor,
    },
    listitem: { backgroundColor: globalcss.container.backgroundColor },
    modal: { width: "90%" },
    star: { color: 'red' }
  });




//* #### EXPORT #### *//

export default QuestionsList;