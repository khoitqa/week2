import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './screens/Profile'
import Photos from './screens/Photos'


const AppNavigator = createStackNavigator({
    ProfileScreen: {
      screen: Profile,
    },
    PhotosScreen:{
        screen:Photos,
    }
  });
  
  export default AppNavigator;