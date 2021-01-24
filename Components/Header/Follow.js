import React from 'react';
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Follow = (props)=>{
    return(
        <View style={{...props.style}}>
           <View style={{padding:8,flexDirection:'row'}}>
           <Text>
               Follow me
            </Text>
            <MaterialCommunityIcons 
          
            style={[styles.icon]} name="instagram" size={24} color="#C13584" />
            <MaterialCommunityIcons style={[styles.icon]} name="facebook" size={24} color="#3B5998" />
            <MaterialCommunityIcons style={[styles.icon]} name="twitter" size={24} color="#1DA1F2" />
            <MaterialCommunityIcons style={[styles.icon]} name="github" size={24} color="#4078c0" />
            <MaterialCommunityIcons style={[styles.icon]} name="linkedin" size={24} color=" #0e76a8" />
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icon:{
        marginHorizontal:6
    }
})
export default Follow;