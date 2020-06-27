import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
const screenWidth = Dimensions.get("window").width;

//const { labels, needleImage } = this.props;

class UVIndexomeeter extends Component {
  
  state = {
    defaultValue: 4,
    minValue: 1,
    maxValue: 11,
    easeDuration: 500,
    labels: [
      {
        name: "Niedrig",
        hinweis: "kein Schutz notwendig",
        labelcolor: "#32cd32",
        activeBarColor: "#00ff00",
      },
      {
        name: "Mittel",
        hinweis: "Schutz notwendig",
        labelcolor: "#ffa500",
        activeBarColor: "#daa520",
      },
      {
        name: "Hoch",
        labelcolor: "#d2691e",
        hinweis: "besonderer Schutz notwendig",
        activeBarColor: "#ff7f50",
      },
      {
        name: "sehr Hoch",
        labelcolor: "#b22222",
        activeBarColor: "#ff0000",
      },
      {
        name: "Extrem",
        hinweis: "besonderer Schutz notwendig",
        labelcolor: "#7b68ee",
        activeBarColor: "#9370db",
      },
    ],
    needleImage: require("../../assets/needle.png"),
  };
  
  
   calcDegreeFromLables = (degree, labels)=> {
    const perLevelDegree = degree / labels.length;
    //return perLevelDegree;
  }
  
   calcLablesFromValues=(value, labels, minValue, maxValue) =>{
    const curentValue = value / (maxValue - minValue);
    const curentIndex = Math.round((label.length - 1) * curentValue);
    const label = labels[curentIndex];
    //return label;
  }
  
  limitValue = (value, minValue, maxValue) => {
    let curentValue = 0;
    if (!isNaN(value)) {
      curentValue = parseInt(value);
    }
    Math.min(Math.max(curentValue, minValue), maxValue);
    //return Math.min(Math.max(curentValue, minValue), maxValue);
  }

  render() {
    render(
      <View style={[styles.wrapper]}>
        <View style={[styles.wrapper]}>
          {labels.map((level) => (
            <View key={[styles.halfCircle]} />
          ))}
          <View style={[styles.imageWrapper]}>
            <Image tyle={[styles.Image]} source={needleImage} />
          </View>
          <View key={[styles.innerCircle]} />
        </View>
        <View style={[styles.labelWrapper]}>
          <Text style={[styles.label]} />
          <Text style={[styles.labelNote]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  outerCircle: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: screenWidth - 20,
    height: screenWidth / 2 - 10,
    borderTopLeftRadius: screenWidth / 2 - 10,
    borderTopRightRadius: screenWidth / 2 - 10,
    overflow: "hidden",
    backgroundColor: "#e6e6e6",
    borderColor: "#ffffff",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "black",
  },
  innerCircle: {
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    width: screenWidth * 0.6,
    height: (screenWidth / 2) * 0.6,
    borderTopLeftRadius: screenWidth / 2 - 10,
    borderTopRightRadius: screenWidth / 2 - 10,
    backgroundColor: "#ffffff",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "black",
  },
  halfCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth / 2,
    height: screenWidth,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: screenWidth / 2,
  },
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  image: {
    resizeMode: "stretch",
    height: screenWidth - 20,
    width: screenWidth - 20,
  },
  labelWrapper: {
    marginVertical: 5,
    alignItems: "center",
  },
  label: {
    fontSize: 25,
    fontWeight: "bold",
  },
  labelNote: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UVIndexomeeter;
