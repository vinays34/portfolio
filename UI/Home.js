import React, { useState } from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AboutLeft from '../Components/AboutLeft';
import { MAIN_TOOLS, NAV_BAR_DATA } from './DataConstants';

const Home = (props)=>{
    
      const renderTools=({item,index})=>{
          return(
              <View style={{alignItems: 'center',justifyContent: 'center',margin:12}}>
                  <Image
                  style={{height:80,width:80}}
                  source={item.image}
                  />
                  <Text>{item.name}</Text>
              </View>
          )
      }
    return(
        <View style={{flex:1, flexDirection:'row'}}>
       <View style={{flex:1, alignItems: 'center',justifyContent: 'center',}}>
       <AboutLeft/>
       </View>
       <View style={{flex:1, alignItems: 'center',justifyContent: 'center',}}>
         <View>
          <FlatList
          horizontal
          data={MAIN_TOOLS}
          renderItem={renderTools}
          />   
         </View>
       </View>
        </View>
    )
}
const styles = StyleSheet.create({
     
})
export default Home;