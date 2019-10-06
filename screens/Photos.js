import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    TouchableOpacity
    
        } 
from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image';

export default class Photos extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainerIOS}>
                    <AutoHeightImage  width={widthScreen}  source={require('../assets/header.jpg')}/>
                    <View style={styles.header}>
                        <Image style={styles.headerIcon} source={require('../assets/arrows.png')} />
                        <Image style={styles.headerIcon} source={require('../assets/menu.png')} />
                    </View>
                    
                </View>
                <View style={styles.textView}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.textTitleProfile}>
                            Eiffel tower
                        </Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width:16, height:16}} source={require('../assets/location_icon.png')} />
                            <Text style={styles.textContentProfile}>
                                Paris, Franch
                            </Text>
                        </View>
                        
                    </View>
                    <TouchableOpacity onPress={()=>{
                            Alert.alert('Followed !')
                            }}>
                        <View style={styles.btnFollowProfile}>
                        <Image style={{height:32,width:32,}} source={require('../assets/cloud.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{flex:1}}></View> */}
                <View style={styles.footer}>
                    <Image style={styles.iconFooter} source={require('../assets/television.png')} />
                    <Image style={styles.iconFooter} source={require('../assets/add-button.png')} />
                    <Image style={styles.iconFooter} source={require('../assets/user.png')} />
                </View>
            </View>
        );
    }

}
const halfScreen= Dimensions.get('window').height/2.5
const widthScreen= Dimensions.get('window').width
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
   
    imageContainerIOS: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 0,
        borderTopRightRadius:0,
        overflow: 'hidden',
        
    },
    header: { 
    width:'100%',    
    alignItems: 'center',
    position: 'absolute',
    top: 35,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:35,
    paddingRight:35
    
     
    },
    headerIcon: {
        height:24,
        width:24,
      
    },
    headerIconR: {
        height:24,
        width:24,
        marginRight:35
    },
    textTitleProfile: {
        fontSize: 32,
        fontWeight: 'bold',
        color:'#333C57',
      },
      textContentProfile: {
        fontSize: 14 ,
        color:'gray',
      },
      btnFollowProfile: {
        height:70,
        width:70,
        backgroundColor:'#4771F6',
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        borderTopLeftRadius: 4,
        borderTopRightRadius:18,
        overflow: 'hidden',
      },
      textView:{
          flexDirection:'row', 
          alignItems:'center', 
          justifyContent:'space-between',
          marginLeft:40,
          marginRight:40,
          marginTop:25
        },
        footer:{
            width: '100%', 
            height: 50,  
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            flexDirection:'row',
            justifyContent:'space-around',
            marginBottom:10,
            paddingHorizontal:20
          },
          iconFooter:{
            width:28,
            height:28
          }
});