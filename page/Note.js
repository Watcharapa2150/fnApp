import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React,{useState} from 'react'
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

const Note = () => {
    const[date,setDate] = useState('')
    const[type,setType] = useState('')
    const[note,setNote] = useState('')


    let [fontsLoaded] = useFonts({
      FredokaOne_400Regular,
    });
    if (!fontsLoaded) {
      return null;
    }
  return (
    <SafeAreaView style= {{flex:1}}>
        <View style={styles.container}>
            <Text>Insert any text in below input</Text>
            <TextInput placeholder='Date' style={styles.input} value={date} onChangeText = {(date) => {setDate (date)}}/>
            <Text style={{color:"blue"}}>{date}</Text>
            <TextInput placeholder='Sort' style={styles.input} value={type} onChangeText = {(type) => {setType (type)}}/>
            <Text style={{color:"blue"}}>{type}</Text>
            <TextInput placeholder='Note' style={styles.input} value={note} onChangeText = {(note) => {setNote (note)}}/>
            <Text style={{color:"blue"}}>{note}</Text>
        </View>
    </SafeAreaView>
  )
}

export default Note

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#ffffff',
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8',
      fontFamily: "FredokaOne_400Regular",
      fontSize:20,
      fontWeight:'bold'
    },
    }
  );