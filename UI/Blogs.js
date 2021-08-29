import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View,Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions  } from 'react-native';
import { Subheading, Title } from 'react-native-paper';
import CustomTabHeader from '../Constant/CustomTabHeader';

const Blogs = (props)=>{
    const [hoverItem,setHoverItem] = useState(false)
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
    return(
        <View style={{ flex:1}}>
            <View style={{alignItems:'center'}}>
           
            </View>
            <View style={[{flexDirection:'row',flex:1},(device==="tab"||device==="mob")&&{flexDirection:'column'}]}>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
               <View>
               <Image
               source={require("./../assets/blogicon.png")}
               style={[{width:426,height:330,alignSelf:'center'},device==="mob"&&{width:250,height:192}]}
               resizeMode="contain"
               />
              
               </View>
                </View>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center',margin:12 }}>
                
                <Title >Why and What I write...</Title>
                <Subheading style={{textAlign: 'center',}}>I believe in sharing my knowledge with others is one of the best ways to hone your own skills.
                
                </Subheading>
               
                <TouchableOpacity
            onMouseEnter={()=>{setHoverItem(true)}}
            onMouseLeave={()=>{setHoverItem(false)}}
            style={[styles.buttonContainer,( hoverItem ) &&styles.selectionIndicator]}
            onPress={()=>{ props.navigation.navigate("BlogIndex")}}
            >
                <Text
                style={[( hoverItem )&&styles.selectionText]}
                >{"View my blogs"}</Text>
            </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    selectionIndicator:{
        
        backgroundColor:"#e3e3e3".replace,
        borderRadius:4,
        backgroundColor:'red'
    },
    buttonContainer:{
        
        padding:12,
        alignItems: 'center',
        marginHorizontal:4,
        borderColor:"red",
        borderWidth:1,
        borderRadius:4
    },
    selectionText:{
        fontWeight:"bold",
        color:"#fff"
    },
})
export default Blogs;