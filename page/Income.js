import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView } from "react-native";
import { useRoute } from '@react-navigation/native';
import { useFonts, FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";
import { useNavigation } from '@react-navigation/native';
const Income = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [currentDate, setCurrentDate] = useState('');
  var [value, setValue] = useState(route.params.bathValue);
  var values =  sessionStorage.getItem("values", values);

  useEffect(() => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, [])

  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  const handleValueChange = (text) => {
    setValue(text);
  };

  return (
    <SafeAreaView>
      <View
        style={[
          styles.box1,
          styles.label,
          {
            backgroundColor: "#FEC13E",
            justifyContent: "center",
            alignItems: 'center'
          },
        ]}
      >
        <Text style={{ fontSize: 25, fontFamily: "FredokaOne_400Regular", color: "white", position: "absolute", top: 45 }}>
          Date: {currentDate}
        </Text>
        <TouchableOpacity
          style={[styles.showcase, { position: "absolute", top: 100, alignContent: 'center', backgroundColor: '#40D54E' }]}>
          <Text style={{ fontSize: 25, fontFamily: "FredokaOne_400Regular", color: "white", paddingTop: 10 }}>
            Income
          </Text>
          
          <Text style={{ fontSize: 25, fontFamily: "FredokaOne_400Regular", color: "white", paddingTop: 25 }}>
            + { values } $
          </Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 30 }}>
          <Text style={{ fontSize: 25, fontFamily: "FredokaOne_400Regular", color: "white", paddingRight: 228 }}>
            Note
          </Text>
          <TextInput style={[styles.input, { fontSize: 25 }]}
           onChangeText={(text) => {sessionStorage.setItem("noted",text );}} />
        </View>
        <TouchableOpacity
          style={[styles.roundButton, { position: "absolute", top: 450, backgroundColor: '#40D54E' }]}
          onPress={() => {
          var existingEntries = JSON.parse(sessionStorage.getItem("sum"));
          var income = JSON.parse(sessionStorage.getItem("income"));

          console.log(existingEntries);
          if(existingEntries == null) existingEntries = [];
          if(income == null) existingEntries = [];

          values=parseInt(values);
          console.log(existingEntries);
          existingEntries = parseInt(existingEntries)+values;
          income = parseInt(income)+values;

          console.log(existingEntries);
          sessionStorage.setItem("sum",JSON.stringify(existingEntries));
          sessionStorage.setItem("income",JSON.stringify(income));
          navigation.navigate('Result');}}
        >
          <Text style={{ fontSize: 25, fontFamily: "FredokaOne_400Regular", color: "white", paddingTop: 12 }}>
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundButton, { position: "absolute", top: 550, backgroundColor: 'red' }]}
        >
          <Text style={{ fontSize: 25, fontFamily: "FredokaOne_400Regular", color: "white", paddingTop: 12 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Income;

const styles = StyleSheet.create({
    box1: {
      position: "absolute",
      borderBottomLeftRadius: 150,
      borderBottomRightRadius: 150,
      height: 650,
      width: "100vw",
    },
    roundButton:{
        width: 250,
        height: 75,
        borderRadius: 100
    },
    showcase: {
        width: 300,
        height: 150,
        borderRadius: 50
    },
    label: {
      textAlign: "center",
      marginBottom: 10,
    },
    input: {
      width: 300,
      height: 80,
      borderRadius:30,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: "white"
    }
  });