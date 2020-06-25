import React from "react";
import Article01 from "./articles/Article01";
import Article02 from "./articles/Article02";
import Article03 from "./articles/Article03";
import Article04 from "./articles/Article04";
import Article05 from "./articles/Article05";
import Article06 from "./articles/Article06";
import Article07 from "./articles/Article07";
import Article08 from "./articles/Article08";

const cardsData = [
  {
    chapter: "Erkrankung",
    articles: [
      { title: "Die Haut", component: <Article01 /> },
      { title: "Was ist Hautkrebs?", component: <Article02 /> },
      {
        title: "Wie verbreitet ist Hautkrebs?",
        component: <Article03 />,
      },
      {
        title: "Risikofaktoren für Hautkrebs?",
        component: <Article04 />,
      },
      { title: "Vitamin D", component: <Article05 /> },
    ],

    img: require("../../assets/cards-background-images/skin-cells.jpg"),
  },
  {
    chapter: "Vorbeugung",
    articles: [
      {
        title: "Wie Sie sich und Ihre Haut schützen können",
        component: <Article06 />,
      },
      { title: "Selbstuntersuchung der Haut", component: <Article07 /> },
      { title: "Warnzeichen", component: <Article08 /> },
    ],

    img: require("../../assets/cards-background-images/hitzefrei.jpg"),
  },
];

export default cardsData;
