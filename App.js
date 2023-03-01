import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./page/Home";
import Note from './page/Note';
import Result from './page/Result';
import Section from "./page/Section"
import Income from "./page/Income";
import Expensens from "./page/Expensens";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";
import { useRoute } from '@react-navigation/native';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Section" component={Section} />
        <Stack.Screen name="Income" component={Income} />
        <Stack.Screen name="Expensens" component={Expensens} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

