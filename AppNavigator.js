import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './screens/Profile'
import Photos from './screens/Photos'


const AppNavigator = createStackNavigator({
  ProfileScreen: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  PhotosScreen:{
    screen:Photos,
    navigationOptions: {
      header: null,
  },
},
   
  
  });
  
  export default AppNavigator;