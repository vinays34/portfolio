import React, { useState } from 'react';
import { View,Text, FlatList, TouchableOpacity, useWindowDimensions  } from 'react-native';
import { PROJECTS } from './DataConstants';
import Typed from 'react-typed';
import CustomTabHeader from '../Constant/CustomTabHeader';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
const Works = ()=>{
    const [selectedId,setSelectedId] = useState("")
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
   
    const renderProjects=({item,index})=>{
         
        return(
            <TouchableOpacity 
onMouseEnter={()=>setSelectedId(item.title)}
onMouseLeave={()=>setSelectedId("")}
            onPress={()=>{window.open(item.url)}}
            style={{height:250,width:250,margin:24 ,alignItems:'center',justifyContent: 'center',borderRadius:12,padding:12}}>
                <LinearGradient
        // Button Linear Gradient
        colors={item.color}
        style={ {height:250,width:250,margin:24 ,alignItems:'center',justifyContent: 'center',borderRadius:12,padding:12}}>
                <Text
                style={{color:"#fff",fontSize:18,fontWeight:'bold',fontFamily:'Roboto',textAlign:'center'}}
                >{item.title}</Text>
               {item.title===selectedId&&(
                    <Typed
                
                    style={{fontSize:14, fontFamily:'Roboto',color:'#fff'}}
                    strings={[item.desc]}
                    typeSpeed={80}
                    showCursor={false} 
                    />
               )}
      </LinearGradient>
                
            </TouchableOpacity>
        )
    }
    return(
        <View style={{flex:1,width:'100%',alignItems:'center',justifyContent: 'center'  }}>
           
           <View style={{flex:1,width:'100%',justifyContent:'center'}}>
           <View style={[{width:'100%' },(device==="web"|| device==="tab")&&{alignItems:"center"}]}>
           <FlatList
            contentContainerStyle={{ alignSelf:'center'}}
            horizontal
            data={PROJECTS}
            renderItem={renderProjects}
            
            />
            <Text
                style={{ fontSize:18,fontWeight:'bold',fontFamily:'Roboto',alignSelf:'center'}}
                >and more ...</Text>
           </View>
           </View>
            <View>
            
            </View>
        </View>
    )
}
export default Works;