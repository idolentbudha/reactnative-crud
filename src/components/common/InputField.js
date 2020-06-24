import React, { Component } from 'react';
import {View ,Text,StyleSheet,TextInput} from 'react-native';

const InputField = ({label,onChangeText,value,placeholder,secureTextEntry}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  textStyle:{
    flex:1,
    fontSize:18,
    paddingLeft:20
  },
  inputStyle:{
    flex:2,
    paddingLeft:40,
    paddingRight:10,
    fontSize:18,
    height:40,
    width:null,
    backgroundColor:'#f8f8f8'
  }
});

export {InputField};
