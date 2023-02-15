import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const Note = () => {
    const[date,setDate] = useState('')
    const[type,setType] = useState('')
    const[note,setNote] = useState('')

  return (
    <SafeAreaView style= {{flex:1}}>
        <View style={styles.container}>
            <Text>Insert any text in below input</Text>
            <TextInput placeholder='วันที่' style={styles.input} value={date} onChangeText = {(date) => {setDate (date)}}/>
            <Text style={{color:"blue"}}>{date}</Text>
            <TextInput placeholder='หมวดหมู่' style={styles.input} value={type} onChangeText = {(type) => {setType (type)}}/>
            <Text style={{color:"blue"}}>{type}</Text>
            <TextInput placeholder='โน๊ต' style={styles.input} value={note} onChangeText = {(note) => {setNote (note)}}/>
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
      backgroundColor: '#e8e8e8'
    },
    }
  );