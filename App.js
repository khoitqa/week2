import React, {Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View style={styles.main}>
        <View style={styles.header} ></View>
        <View style={styles.profile} ></View>
        <View style={styles.infoProfile} ></View>
        <View style={styles.myPhotos} ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection:'column',
    margin: 20,
    backgroundColor: 'black',
    flex:15
  },
  header: {
    flex:1,
    backgroundColor: 'blue',
  },
  profile: {
    flex:4,
    backgroundColor: 'green',
  },
  infoProfile: {
    flex:2,
    backgroundColor: 'red',
  },
  myPhotos: {
    flex:8,
    backgroundColor: 'yellow',
  },
});
