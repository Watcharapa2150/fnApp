import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./page/Home";
import Note from './page/Note';
import Result from './page/Result';
import Section from "./page/Section"
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

export default function App() {
  return (
    <View style={{ backgroundColor: "#191A19" }}>
       {/* <Home />  */}
      <Section/>
      {/* <Note/> */}
      {/* <Result/> */}
    </View>
  );
}

const styles = StyleSheet.create({});
