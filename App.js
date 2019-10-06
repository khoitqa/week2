import React, {Component} from 'react'
import { 
  StyleSheet,
   View,
  } 
   from 'react-native'
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator.js'


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
    return (
        <AppContainer />
    );
  }
}


const styles = StyleSheet.create({
});
