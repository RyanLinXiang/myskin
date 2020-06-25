import React from "react";
import { ScrollView } from "react-native";
import * as globalcss from "../styles/globalcss";

import Cards from "./Home-components/Cards";

const Home = (props) => {
  const { token, user_id, user_name, entriesPerScroll } = props;

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        backgroundColor: globalcss.container.backgroundColor,
      }}
    >
      <Cards />
    </ScrollView>
  );
};

export default Home;
