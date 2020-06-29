//* #### IMPORTS #### *//

import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import {
  List,
  ListItem,
  Icon as KittenIcon,
  Divider,
} from "@ui-kitten/components";
import * as globalcss from "../../styles/globalcss";
import FavButton from "./FavButton";

const QuestionsList = (props) => {
  //* #### ACCESSORY COMPONENTS TO BE RENDERED #### *//

  // const renderItemAccessory = (props) => {
  //   return (
  //     <React.Fragment>
  //       <FavButton setFav={props.setFav} />
  //     </React.Fragment>
  //   )
  // };
  const renderItemIcon = (props) => <KittenIcon {...props} name="person" />;
  const renderItem = ({ item, index }) => {
    let queryText = (item.num > 0) ? `${item.subject} (${item.num})` :item.subject;
    
    return (
      <React.Fragment>
        <ListItem
          onPress={() => {
            /* LinX:            const questionText = this.children.props.children[1].props
              .children[0].props.component;
            const queryID = props.findQuestion(questionText); */

            props.getAnswers(item.id);
          }}
          title={item.subject}
          accessoryLeft={renderItemIcon}
          /*  accessoryRight={props.favIcon} */
          style={styles.listitem}
        />
        <Divider />
      </React.Fragment>
    );
  };

  return <List style={styles.list} data={props.data} renderItem={renderItem} />;
};

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
  star: { color: "red" },
});

//* #### EXPORT #### *//

export default QuestionsList;
