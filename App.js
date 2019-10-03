import React, {Component} from 'react';
import { 
  StyleSheet,
   Text, 
   View,
   ScrollView, 
   Image,
   TouchableOpacity, 
  } 
   from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View style={styles.main}>
        <View style={styles.header} >
            <Image style={styles.iconHeader} source={require('./assets/left-arrow.png')} />
            <Image style={styles.iconHeader} source={require('./assets/left-arrow.png')} />
        </View>
        <View style={styles.profile} >
            <Image style={styles.imgProfile} source={require('./assets/1.jpg')} />
            <View style={styles.textProfile}>
              <View>
              <Text style={styles.textTitleProfile}>
                Khôi Tqa
              </Text>
              <Text style={styles.textContentProfile}>
                Developer
              </Text>
                </View> 
              
              <View style={styles.viewBtnProfile}>
                <TouchableOpacity style={styles.btnFollowProfile}>
                  <View>
                    <Text>Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSentProfile}>
                  <Text>Sent</Text>
                </TouchableOpacity>
              
              </View>
            </View>
        </View>
        <View style={styles.infoProfile} ></View>
        <View style={styles.myPhotos} ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection:'column',
    margin: 35,
    backgroundColor: 'black',
    flex:15
  },


  header: {
    flex:1,
    backgroundColor: 'blue',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    
  },
  iconHeader: {
    height:32,
    width:32,
    // marginRight:10,
    // marginLeft:10,
  },
  profile: {
    height:150,
    backgroundColor: 'green',
    flexDirection:'row',
    marginTop:30,
  },
 
  imgProfile: {
    height:150,
    width:150,
    borderRadius:75,
    
  },
  textProfile: {
    marginLeft:35,
    flexDirection:'column',
    justifyContent:'space-between',
    
  },
  textTitleProfile: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'black',
  },
  textContentProfile: {
    fontSize: 14,
    color:'gray',
  },
  btnFollowProfile: {
    
  },
  btnSentProfile: {
   
  },
  viewBtnProfile: {
   flexDirection:'row'
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
