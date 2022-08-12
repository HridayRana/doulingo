import React, { Component } from "react";
import {  View,  Text,  StyleSheet} from "react-native";


import * as Font from "expo-font";


import BottomTabNavigator from "./navigation/BottomTabNavigator";

render() {
    if (!this.state.fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
            <View style={styles.container}> 
            <View style={styles.appTitleTextContainer}>
            <Text  style={styles.appTitleText}>Spanish</Text>
            
        );
      }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    textAlign:"center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"

  },
  textContainer:{
    paddingTop:RFValue(20),
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    textAlign:"center"
  }
});



