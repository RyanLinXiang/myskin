import React from "react";
import Article01 from "./articles/Article01";
import Article02 from "./articles/Article02";
import Article03 from "./articles/Article03";
import Article04 from "./articles/Article04";
import Article05 from "./articles/Article05";
import Article06 from "./articles/Article06";
import Article07 from "./articles/Article07";
import Article08 from "./articles/Article08";
import Article09 from "./articles/Article09";
import Article10 from "./articles/Article10";
import Article11 from "./articles/Article11";

const cardsData = [
  {
    chapter: "Erkrankung",
    articles: [
      { title: "Die Haut", component: <Article01 /> },
      { title: "Was ist Hautkrebs?", component: <Article02 /> },
      { title: "Wie verbreitet ist Hautkrebs?", component: <Article03 /> },
      { title: "Risikofaktoren für Hautkrebs?", component: <Article04 /> },
      { title: "Vitamin D", component: <Article05 /> },
    ],
    img: require("../../assets/cards-background-images/erkrankung.jpg"),
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
    img: require("../../assets/cards-background-images/vorbeugung.jpg"),
  },
  {
    chapter: "Lebensweise",
    articles: [
      { title: "Ernährung", component: <Article09 /> },
      { title: "Bewegung ist entscheidend", component: <Article10 /> },
      {
        title: "Meditation und Entspannnungstechniken",
        component: <Article11 />,
      },
    ],
    img: require("../../assets/cards-background-images/lebensweise.jpg"),
  },
];

export default cardsData;
