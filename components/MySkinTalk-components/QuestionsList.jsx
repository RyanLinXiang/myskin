//* #### IMPORTS #### *//
import React from "react";
import { StyleSheet } from "react-native";
import { List, ListItem, Icon as KittenIcon, Divider } from "@ui-kitten/components";
import * as globalcss from "../../styles/globalcss";

const QuestionsList = (props) => {
  //* #### ACCESSORY COMPONENTS TO BE RENDERED #### */
  const renderItemIcon = (props) => <KittenIcon {...props} name="person" />;
  const renderItem = ({ item, index }) => {
    let queryText = (item.num > 0) ? `${item.subject} (${item.num})` :item.subject;
    return (
      <React.Fragment>
        <ListItem
          onPress={() => {
            props.getAnswers(item.id);
          }}
          title={queryText}
          accessoryLeft={renderItemIcon}
          style={styles.listitem}
        />
        <Divider />
      </React.Fragment>
    );
  };

  //* #### FINAL RENDER #### *//
  return <List style={styles.list} data={props.data} renderItem={renderItem} />;
};

//* #### STYLESHEET #### *//
const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  list: {
    flex:1,
    width: "100%",
    backgroundColor: "#FDF7EC" ,
  },
  listitem: { flex:1,
    padding:2,
    backgroundColor: globalcss.container.backgroundColor },
  modal: { width: "90%" },
});

//* #### EXPORT #### *//
export default QuestionsList;