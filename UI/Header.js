import React, { useState } from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NAV_BAR_DATA } from './DataConstants';

const Header = (props)=>{
    const [hoverItem,setHoverItem] = useState("")
    const renderNavItems=(source,index)=>{
        return(
            <TouchableOpacity
            onMouseEnter={()=>{setHoverItem(source.id)}}
            onMouseLeave={()=>{setHoverItem("")}}
            style={[styles.buttonContainer,(props.selectedNavitem===source.id||hoverItem ===source.id) &&styles.selectionIndicator]}
            onPress={()=>{props.setSelectedNavItem(source.id)}}
            key={index}>
                <Text
                style={[(props.selectedNavitem===source.id||hoverItem ===source.id)&&styles.selectionText]}
                >{source.name}</Text>
            </TouchableOpacity>
        )
    }
    // ,justifyContent: 'space-between',flexDirection:'row'
    return(
        <View style={[{width:'100%',alignItems: 'center',justifyContent: 'space-between',flexDirection:'row'},styles.header]}>
             <Image
       style={{height:40,width:40,margin:8,marginHorizontal:16,backgroundColor:'#f7bf50',borderRadius:8}}
       source={require("./../assets/vs.png")}
       />
    <View style={{flexDirection:'row'}}>
    {NAV_BAR_DATA.map(renderNavItems)}
    </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{
        width:90,
        padding:12,
        alignItems: 'center',
        marginHorizontal:4
    },
    selectionIndicator:{
        borderColor:"red",
        borderWidth:1,
        backgroundColor:"#e3e3e3".replace,
        borderRadius:4
    },
    selectionText:{
        fontWeight:"bold"
    },
    header:{
        backgroundColor: '#fff',
        alignItems:'center',
        elevation:2, 
        shadowColor: 'black',
        shadowOpacity:0.2,
        shadowRadius:8,
        padding:0
      },
})
export default Header;