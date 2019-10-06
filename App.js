import React, {Component} from 'react'
import { 
  StyleSheet,
   View,
  } 
   from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppNavigator from './AppNavigator'


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
