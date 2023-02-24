import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

const Section = () => {
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
            backgroundColor: "#DDB529",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <TextInput
          placeholder="Bath"
          style={[
            styles.input,
            {
              fontFamily: "FredokaOne_400Regular",
              fontSize: 30,
              textAlign: "center",
              color: "gray",
              backgroundColor: "#FAF6E7",
            },
          ]}
        />
        <TouchableOpacity
          style={[styles.roundButton, { position: "absolute", top: 400 }]}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              padding: 15,
              fontFamily: "FredokaOne_400Regular",
              color: "#FFF7DA",
            }}
          >
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundButton2, { position: "absolute", top: 500 }]}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              padding: 15,
              fontFamily: "FredokaOne_400Regular",
              color: "#FFF7DA",
            }}
          >
            Expenses
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box1: {
    position: "absolute",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    height: 650,
    width: "100vw",
  },
  box2: {
    borderRadius: 50,
    height: 1000,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  roundButton: {
    width: 200,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#40D54E",
    justifyContent: "center",
  },
  roundButton2: {
    width: 200,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#F64949",
    justifyContent: "center",
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
  input: {
    width: 300,
    height: 100,
    borderRadius: 55,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "white",
  },
});
