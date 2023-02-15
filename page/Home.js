import { StyleSheet, Text, View } from "react-native";
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
            fontSize: "2.5em",
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
        ]}
      />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box1: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 150,
  },
  box2: {
    borderRadius:50,
    height: 1000,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
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
