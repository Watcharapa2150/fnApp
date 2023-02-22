import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

const Home = () => {
  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <View
        style={[
          styles.box1,
          styles.label,
          {
            backgroundColor: "#D8E9A8",
            justifyContent: "center",
          },
        ]}
      >
        <Text
          style={{
            fontSize: "4em",
            fontFamily: "FredokaOne_400Regular",
            color: "#1E5128",
          }}
        >
          overview
        </Text>
      </View>
      <View
        style={[
          styles.box2,
          {
            backgroundColor: "skyblue",
          },
        ]}>
          <Text
          style={{
            position: "absolute",
            fontSize: "2em",
            fontFamily: "FredokaOne_400Regular",
            color: "#1E5128",
            top: 20,
            left:150
          }}
        >
          Income
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: "2em",
            fontFamily: "FredokaOne_400Regular",
            color: "#1E5128",
            top: 200,
            left:135
          }}
        >
          Expenses
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: "2em",
            fontFamily: "FredokaOne_400Regular",
            color: "#1E5128",
            top: 380,
            left:155
          }}
        >
          Total
        </Text>
        <TouchableOpacity
          style={[styles.roundButton,{position: "absolute",top: 550,left:65}]}>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundButton,{position: "absolute",top: 550,right:65}]}>
        </TouchableOpacity>
        </View>
      <View style={[styles.box3, { backgroundColor: "steelblue" }]} />
      <View style={[styles.box4, { backgroundColor: "steelblue" }]} />
      <View style={[styles.box5, { backgroundColor: "steelblue" }]} />
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
    top: 170
  },
  box3: {
    position: "absolute",
    borderRadius: 110,
    height: 80,
    width: "80vw",
    top: 260,
    left:40
  },
  box4: {
    position: "absolute",
    borderRadius: 110,
    height: 80,
    width: "80vw",
    top: 440,
    left:40
  },
  box5: {
    position: "absolute",
    borderRadius: 110,
    height: 80,
    width: "80vw",
    top: 620,
    left:40
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  roundButton:{
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
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
