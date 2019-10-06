import React from 'react';
import { 
  StyleSheet,
   Text, 
   View,
   ScrollView, 
   Image,
   TouchableOpacity, 
   FlatList,
   Dimensions,
   Alert

  } 
   from 'react-native';
import DualText  from '../component/dualText'
import AutoHeightImage from 'react-native-auto-height-image';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Profile extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {navigation} = this.props;
    return (
      <View style={styles.main}>
        <View style={styles.header} >
            <Image style={styles.iconHeader} source={require('../assets/arrows.png')} />
            <Image style={styles.iconHeader} source={require('../assets/menu.png')} />
        </View>
        <View style={styles.profile} >
            <Image style={styles.imgProfile} source={require('../assets/avt.jpg')} />
            <View style={styles.textProfile}>
              <View style={styles.accProfile}>
                <Text style={styles.textTitleProfile}>
                Khôi Tqa
                </Text>
                <Text style={styles.textContentProfile}>
                Developer
                </Text>
              </View> 
              
              <View style={styles.viewBtnProfile}>
                <TouchableOpacity onPress={()=>{
                  Alert.alert('Followed !')
                }}>
                  <View style={styles.btnFollowProfile}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => 
                  navigation.navigate('Photos')
                  // Alert.alert('Followed !')
                }
                >
                  <View style={styles.btnSentProfile}>
                  <Image style={{height:16, width:16}} source={require('../assets/send-button.png')}/>
                  </View>
                </TouchableOpacity>
              
              </View>
            </View>
        </View>
        <View style={styles.infoProfile} >
            {dualText.map(text=>{
              return <DualText  dualText= {text} key={text.id} ></DualText>
            })}         
        </View>
                 
              <ScrollView style={{ marginTop:25,height:sHeigh, marginBottom:85 }}>
                <View style={styles.scrollStyle}>
                <View style={{ flex:1 ,flexDirection:'column ' }}>
                {imgArr.slice(0,4).map(img=>{
                        return <AutoHeightImage style={styles.imgPhotos} width={wWidth} source={img.imgSource} key={img.id}/>
                        
                      })}
                </View>
                <View style={{width:20}}></View>
                <View style={{flex:1 , flexDirection:'column ', }}>
                {imgArr.slice(4).map(img=>{
                        return <AutoHeightImage style={styles.imgPhotos} width={wWidth} source={img.imgSource} key={img.id}/>
                        
                      })}
                </View>
                </View>  
              </ScrollView>
             
          <View style={styles.footer}>
          <Image style={styles.iconFooter} source={require('../assets/television.png')} />
          <Image style={styles.iconFooter} source={require('../assets/add-button.png')} />
          <Image style={styles.iconFooter} source={require('../assets/user.png')} />
          </View>
      </View>
    );
  }
}
const wWidth = (Dimensions.get('window').width-90)/ 2
const sHeigh = Dimensions.get('window').height/2.2
const dualText = [
  {
    id:'1',title:'210', content:'Photos'
  },
  {
    id:'2',title:'15k', content:'Followers'
  },
  {
    id:'3',title:'605', content:'Following'
  }
]

const imgArr = [
  {
    id:'1',imgSource:require('../assets/1.jpg')
  },
  {
    id:'2',imgSource:require('../assets/2.jpg')
  },
  {
    id:'3',imgSource:require('../assets/3.jpg')
  },
  {
    id:'4',imgSource:require('../assets/4.jpg')
  },
  {
    id:'5',imgSource:require('../assets/5.jpg')
  },
  {
    id:'6',imgSource:require('../assets/6.jpg')
  },
  {
    id:'7',imgSource:require('../assets/7.jpg')
  },
  {
    id:'8',imgSource:require('../assets/8.jpg')
  },
]

const styles = StyleSheet.create({
  main: {
    flexDirection:'column',
    marginHorizontal: 35,
    marginTop:35,
    flex: 1,
        
   
   
  },


  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    
  },
  iconHeader: {
    height:24,
    width:24,
    // marginRight:10,
    // marginLeft:10,
  },
  profile: {
    height:120,
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-between'
  },
 
  imgProfile: {
    height:120,
    width:120,
    borderRadius:60,
    
    
  },
  textProfile: {
    flexDirection:'column',
    justifyContent:'space-between',
    marginTop:7,
    marginBottom:10,
    marginRight:25,
  },
  accProfile:{
    marginLeft:7
  },
  textTitleProfile: {
    fontSize: 26,
    fontWeight: 'bold',
    color:'#333C57',
  },
  textContentProfile: {
    fontSize: 16 ,
    color:'gray',
  },
  btnFollowProfile: {
    height:30,
    width:110,
    borderRadius:15,
    backgroundColor:'#4771F6',
    justifyContent:'center',
    alignItems:'center',
    marginRight:5
  },
  btnSentProfile: {
    height:30,
    width:50,
    borderRadius:15,
    paddingLeft:3,
    backgroundColor:'#78D5FA',
    justifyContent:'center',
    alignItems:'center'
  },
  viewBtnProfile: {
   flexDirection:'row',
   
  },
 
  infoProfile: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25,
    marginLeft:15,
    marginRight:15
  
  },
  myPhotos: {
    

  },
  scrollStyle:{
    flexDirection:'row',
    flex:2
  
  },
  imgPhotos:{
    borderRadius:15,
    marginVertical:10
  
    
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
