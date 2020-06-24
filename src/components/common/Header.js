import React, { Component } from 'react';
import {View ,Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.headercontainer} >
      <Text style={styles.textStyle} >{props.headerTitle}</Text>
    </View>

  );
};
// export default class Header extends Component{
//   return(
//     <Text>Header Album!</Text>
//   );
// }

const styles = StyleSheet.create({
  headercontainer: {
    justifyContent:'center',
    alignItems: 'center',
    height:70,
    paddingTop:10,
    backgroundColor: '#e8e8e8',
  },
  textStyle:{
    fontSize:20
  }
});

export {Header};
