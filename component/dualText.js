import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    }
    from 'react-native'
    
export default function DualText(props){
    const {dualText} = props
    return(
        <View style={styles.container}>
        <Text style={styles.title}>{dualText.title}</Text>
        <Text style={styles.content}>{dualText.content}</Text>  
        </View>
        
    );
}   

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      alignItems:"center",
    },
    title: {
        color:'#333C57',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
    },
    content: {
        color:'gray',
        fontSize:14,
        
    },
})
