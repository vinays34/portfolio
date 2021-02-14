import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {View,Text, FlatList, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const NavigationBar = (props)=>{
    const [navItemSelected,setnavItemSelected] = useState(0)
    const navData = [
        {
            id:0,
            title:"Home"
        },
        {
            id:1,
            title:"Work"
        },
        {
            id:2,
            title:"Blog"
        },
        {
            id:3,
            title:"About"
        },
        {
            id:4,
            title:"Contact"
        },
    ]
useEffect(()=>{
    console.log("NAV ITEM ID IS",props.navItemIndex,navItemSelected)
 setnavItemSelected(props.navItemIndex)
},[props.navItemIndex])
    const renderItem =({item,index})=>{
        return(
            <View style={[styles.navitem,navItemSelected===index?{borderBottomColor:'red',borderBottomWidth:2}:null]}>
               <TouchableWithoutFeedback onPress={()=>{
                   setnavItemSelected(index)
                   props.handleNavBarclick(index)
               }}>
                  <Text style={[styles.navText]}>{item.title}</Text>
               </TouchableWithoutFeedback>
            </View>
        )
    }
    return(
        <View style={[styles.container]}>
           <FlatList
           contentContainerStyle={[{flexDirection:'row'}]}
           data={navData}
           renderItem={renderItem}
           />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
       
    },
    navitem:{
        padding:12,
        cursor:"pointer"
        
    },
    navText:{
       fontSize:18 
    }
})
export default NavigationBar;