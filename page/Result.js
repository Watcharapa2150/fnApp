import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

const Result = () => {
  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style= {{flex:1,backgroundColor:'orange'}}>
        <Text style={[styles.fontHeader,{margin: 35}]}>Date</Text>
      <View style={{flexDirection:'row' ,flex:3}}>
        <View style={{backgroundColor:"#B1F8FE",width:150,alignItems:'center'}}>
            <Text style={styles.font}>Type</Text>
        </View>
        <View style={{backgroundColor:"#B1FEBC",width:135,alignItems:'center'}}>
            <Text style={styles.font}>Incomes</Text>
        </View>
        <View style={{backgroundColor:"#FF9898",width:135,alignItems:'center'}}>
            <Text style={styles.font}>Expenses</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fontHeader:{
    fontFamily: "FredokaOne_400Regular",
    fontSize:30,
    fontWeight:'bold'
  },
  font:{
    fontFamily: "FredokaOne_400Regular",
    fontSize:20,
    fontWeight:'bold'
  }
})
export default Result