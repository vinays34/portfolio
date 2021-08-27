import React, { useEffect, useRef, useState } from 'react';
import {View,Text, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NAV_BAR_DATA } from '../../UI/DataConstants';
import Header from '../../UI/Header';
import Home from './../../UI/Home'
import { useWindowDimensions } from 'react-native';
import Works from '../../UI/Works';
import Blogs from '../../UI/Blogs';
const Index = (props)=>{
    const [selectedNavitem,setSelectedNavItem] = useState(NAV_BAR_DATA[0].id);
    const windowHeight = useWindowDimensions().height;
    const inputEl = useRef(null);
    const scrollRef = useRef(null);
    const [bodyHeight,setBodyHeight] = useState(0)
    useEffect(()=>{
      if(inputEl.current){
        inputEl.current.measure((fx, fy, width, height, px, py) => {
          setBodyHeight(height)
          console.log("height:",height)
        });
        
      }
    },[inputEl])
    const renderBodyItems=({item,index})=>{
        switch(item.id){
            case 1:
                return(
                    <View style={{height:windowHeight-90}}>
                        <Home/>
                    </View>
                )
            case 2:
                return (
                    <View style={{height:windowHeight-90}}>
                        <Works/>
                    </View>
                )
            case 3:
                    return (
                        <View style={{height:windowHeight-90}}>
                            <Blogs navigation={props.navigation}/>
                        </View>
                    )
        }
   }
    return(
        <View style={{flex:1  }}>
           
            <Header
            selectedNavitem={selectedNavitem}
            setSelectedNavItem={setSelectedNavItem}
            />
           
             <View ref={inputEl} style={{flex:1 }}>
             <View  style={{height:bodyHeight }} >
              <FlatList
              data={NAV_BAR_DATA}
              renderItem={renderBodyItems}
              />
              </View>
             </View>
            
        </View>
    )
}
export default Index;