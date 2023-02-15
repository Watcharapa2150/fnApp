import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./page/Home";
import Section from "./page/Section"

export default function App() {
  return (
    <View style={{ backgroundColor: "#191A19" }}>
      {/* <Home /> */}
      <Section/>
    </View>
  );
}

const styles = StyleSheet.create({});
