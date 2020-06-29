import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";
const screenWidth = Dimensions.get("window").width;

  const scrollView =  {
    paddingVertical: 20
    
  };

  const textArticle = {
    paddingVertical: 10,
    fontStyle: 'italic'
  };

  const titleArticle = {
    paddingVertical:10,
    fontSize: 20,
    fontWeight: "bold",
    color:'darkorange'
  };

  const subtitleArticle = {
    paddingVertical:10,
    fontSize: 15,
    fontWeight: "bold",
    color:'darkorange'
  };
  
  const imgArticle = {
    width: screenWidth, 
    alignSelf:'center',
  };

  const column = {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical:5,
  };

  const row = {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      flex: 1
  };

  const bullet = {
      width: 15
  };

  const bulletText = {
      flex: 1
  };

  const listText = {
  // fontStyle: 'italic'
  color:'darkorange',
  };

export { scrollView, textArticle, titleArticle, subtitleArticle, imgArticle, column, row, bullet, bulletText, listText };