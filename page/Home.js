import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-web";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";
import { useNavigation } from '@react-navigation/native';
import Section from "./Section"

const Home = () => {
  const [selected, setSelected] = useState("income");
  const navigation = useNavigation();
  var storedArray = JSON.parse(sessionStorage.getItem("sum"))
  var income = JSON.parse(sessionStorage.getItem("income"))
  var expen = JSON.parse(sessionStorage.getItem("expen"))
  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <View
        style={[styles.box1, styles.label, { backgroundColor: "#DDB529", justifyContent: "center", },]}
      >
        <Text
          style={{
            fontSize: "4em",
            fontFamily: "FredokaOne_400Regular",
            color: "white",
          }}
        >
          overview
        </Text>
      </View>
      <View
        style={[styles.box2, { backgroundColor: "#FFF7DA", },]}
      >
        <Text
          style={{
            position: "absolute",
            fontSize: "2em",
            fontFamily: "FredokaOne_400Regular",
            color: "#AA8145",
            top: 50,
            left: 150,
          }}
        >
          Income
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: "2em",
            fontFamily: "FredokaOne_400Regular",
            color: "#AA8145",
            top: 210,
            left: 135,
          }}
        >
          Expenses
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: "2em",
            fontFamily: "FredokaOne_400Regular",
            color: "#AA8145",
            top: 380,
            left: 155,
          }}
        >
          Total
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: "2em",
            fontFamily: "FredokaOne_400Regular",
            color: "#AA8145",
            top: 450,
            left: 155,
          }}
        >
          {storedArray}
        </Text>
        
        <TouchableOpacity
          style={[styles.roundButton, { position: "absolute", top: 550, left: 65 },]}
          onPress={() => navigation.navigate('Result')}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              padding: 25,
              fontFamily: "FredokaOne_400Regular",
              color: "white",
            }}
          >
            i
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundButton, { position: "absolute", top: 550, right: 65 },]}
          onPress={() => navigation.navigate('Section')}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 50,
              padding: 15,
              fontFamily: "FredokaOne_400Regular",
              color: "white",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.box3, { backgroundColor: "#FFE382" }]} >
      <Text style={{
              textAlign: "center",
              fontSize: 50,
              padding: 15,
              fontFamily: "FredokaOne_400Regular",
              color: "white",
            }}>{expen}</Text>
        
      </View>
      <View style={[styles.box4, { backgroundColor: "#FFE382" }]} >
      <Text style={{
              textAlign: "center",
              fontSize: 50,
              padding: 15,
              fontFamily: "FredokaOne_400Regular",
              color: "white",
            }}>{income}</Text>
        
      </View>
      <View style={[styles.box5, { backgroundColor: "#FFE382" }]} >
      <Text style={{
              textAlign: "center",
              fontSize: 50,
              padding: 15,
              fontFamily: "FredokaOne_400Regular",
              color: "white",
            }}>{storedArray}</Text>
        
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box1: {
    position: "absolute",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    height: 250,
    width: "100vw",
  },
  box2: {
    position: "absolute",
    borderRadius: 150,
    height: 625,
    width: "100vw",
    top: 190,
  },
  box3: {
    position: "absolute",
    borderRadius: 110,
    height: 80,
    width: "80vw",
    top: 300,
    left: 40,
  },
  box4: {
    position: "absolute",
    borderRadius: 110,
    height: 80,
    width: "80vw",
    top: 460,
    left: 40,
  },
  box5: {
    position: "absolute",
    borderRadius: 110,
    height: 80,
    width: "80vw",
    top: 620,
    left: 40,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  roundButton: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#EF9E00",
  },

  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "#f08080",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
  },
});
