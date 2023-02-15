import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View style={{flex:1,}}>
      <Text>วันที่</Text>
      <View style={{flexDirection:'row' ,flex:3}}>
        <View style={{backgroundColor:"#B1F8FE",width:150,alignItems:'center'}}>
            <Text>หมวดหมู่</Text>
        </View>
        <View style={{backgroundColor:"#B1FEBC",width:135,alignItems:'center'}}>
            <Text>รายได้</Text>
        </View>
        <View style={{backgroundColor:"#FF9898",width:135,alignItems:'center'}}>
            <Text>รายจ่าย</Text>
        </View>
      </View>
    </View>
  )
}

export default Result