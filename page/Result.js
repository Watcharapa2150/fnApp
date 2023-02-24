import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  
} from "react-native";
import React,{useState, useEffect} from "react";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Result = () => {

  const [currentDate, SetCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() +1;
        var year = new Date().getFullYear();
        SetCurrentDate(
            date + '/' + month + '/' + year
        );
    }, [])

  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={[styles.fontHeader, { margin: 35, textAlign: "center" }]}>
        Date : {currentDate}
      </Text>

      <View
        style={[
          styles.box1,
          styles.label,
          {
            backgroundColor: "#FFE380",
            justifyContent: "center",
            top: 90,
          },
        ]}
      />
      <View
        style={[
          styles.box2,
          {
            backgroundColor: "#FFF7DA",
            justifyContent: "center",
            top: 90,
          },
        ]}
      >
        Detail
      </View>

      <TouchableOpacity
        style={[
          styles.roundButton,
          { position: "absolute", top: 700, right: 55 },
        ]}
      >
        <View style={{alignItems:'center',top:18}}>
        <AntDesign name="caretright"size={32} color="#FFF7DA"  /></View>
        
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.roundButton,
          { position: "absolute", top: 700, left: 55 },
        ]}
      >
        <View style={{alignItems:'center',top:18}}>
        <AntDesign name="caretleft"size={32} color="#FFF7DA"  /></View>
        
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.roundButton2,
          { position: "absolute", top: 700, left: 170 },
        ]}
      >
        <View style={{alignItems:'center',top:18}}>
        <FontAwesome name="close" size={32} color="#FFF7DA" /></View>
        
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontHeader: {
    fontFamily: "FredokaOne_400Regular",
    fontSize: 26,
    fontWeight: "bold",
    color: "#B67904",
  },
  font: {
    fontFamily: "FredokaOne_400Regular",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    position: "relative",
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box1: {
    position: "absolute",
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    height: 700,
    width: "100vw",
  },
  box2: {
    position: "absolute",
    fontFamily: "FredokaOne_400Regular",
    fontSize: 36,
    height: 79,
    width: "100vw",
    top: 190,
    alignItems: "center",
    color: "#AA8145",
  },
  roundButton: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#EF9E00",
  },
  roundButton2: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#F64949",
  },
});
export default Result;
