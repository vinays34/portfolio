import React, { useState } from 'react';
import { useEffect } from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AboutLeft from '../Components/AboutLeft';
import { MAIN_TOOLS, NAV_BAR_DATA } from './DataConstants';

const Home = (props)=>{
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
      const renderTools=(source,index)=>{
          return(
              <View key={source.id} style={{alignItems: 'center',justifyContent: 'center',margin:12}}>
                  <Image
                  style={{height:80,width:80}}
                  source={source.image}
                  />
                  <Text>{source.name}</Text>
                  <br/>
              </View>
          )
      }
    return(
        <View style={[{flex:1, flexDirection:'row'},(device==="mob"||device==="tab")&&{flexDirection:'column'}]}>
       <View style={{flex:1, alignItems: 'center',justifyContent: 'center',}}>
       <AboutLeft/>
       </View>
       <View style={{flex:1, alignItems: 'center',justifyContent: 'center',}}>
         <View style={{ flexDirection:device==="mob"?'column':'row'}}>
           <View style={{flexDirection:'row'}}>
           {[MAIN_TOOLS[0],MAIN_TOOLS[1]].map(renderTools)} 
           </View>
           <View style={{flexDirection:'row'}}>
           {[MAIN_TOOLS[2],MAIN_TOOLS[3]].map(renderTools)} 
           </View>
         </View>
       </View>
        </View>
    )
}
const styles = StyleSheet.create({
     
})
export default Home;