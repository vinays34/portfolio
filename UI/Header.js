import React, { useState } from 'react';
import { useEffect } from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Divider } from 'react-native-paper';
import { NAV_BAR_DATA } from './DataConstants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Header = (props)=>{
    const [hoverItem,setHoverItem] = useState("")
    const [expandMenu,setExpandMenu] = useState(false)
    const [device,setDevice] = useState("web"); 
    const windowWidth = useWindowDimensions().width;
    useEffect(()=>{
         if(windowWidth<1920 && windowWidth>1100){
            setDevice("web")
         }else if(windowWidth<1100 && windowWidth>600){
            setDevice("tab")
        }else if(windowWidth<600  ){
            setDevice("mob") 
        }
    },[windowWidth])
    const renderNavItems=(source,index)=>{
        return(
            <TouchableOpacity
            onMouseEnter={()=>{setHoverItem(source.id)}}
            onMouseLeave={()=>{
                setHoverItem("") 
            }}
            style={[styles.buttonContainer,(props.selectedNavitem===source.id||hoverItem ===source.id) &&styles.selectionIndicator,(device==="mob"|| device==="tab")&&{borderBottomWidth:0},((props.selectedNavitem===source.id )&&(device==="mob"|| device==="tab"))&&styles.selectionIndicatorMobile]}
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
        <>
        <View 
        
        style={[{width:'100%',alignItems: 'center',justifyContent: 'space-between',flexDirection:'row'},styles.header]}>
             <Image
       style={{height:40,width:40,margin:8,marginHorizontal:16,backgroundColor:'#f7bf50',borderRadius:8}}
       source={require("./../assets/vs.png")}
       />
    {device==="web"?(
        <View style={{flexDirection:'row'}}>
        {NAV_BAR_DATA.map(renderNavItems)}
        </View>
    ):(
        <TouchableOpacity 
        onPress={()=>{
            setExpandMenu(!expandMenu)
        }}
        style={{paddingHorizontal:8,}}>
            <MaterialCommunityIcons name="menu" size={32} color="black" />
            </TouchableOpacity>
    )}
    
        </View>
        <Divider/>
        {(device==="mob"|| device==="tab" ) && expandMenu&&(
            <View style={{alignItems: 'center',backgroundColor:"#fff"}}>
                {NAV_BAR_DATA.map(renderNavItems)}
            </View>
        )}
        </>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{
        width:90,
        padding:12,
        alignItems: 'center',
        marginHorizontal:4,
         
    },
    selectionIndicator:{
        borderColor:"red",
        borderBottomWidth:2,
        backgroundColor:"#e3e3e3".replace,
        
    },
    selectionIndicatorMobile:{
        borderColor:"red",
        borderBottomWidth:0,
        backgroundColor:"#e2e2e2",
        width:"100% "
        
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