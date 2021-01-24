import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ABOUT, WORK, BLOG, CONTACT, HOME } from './Constant/TextConstants';
import '@expo/match-media'
// Unleash the demo :D
import { useMediaQuery } from "react-responsive";
import Typed from 'react-typed';
import AboutLeft from './Components/AboutLeft';
import AboutRight from './Components/AboutRight';
import Follow from './Components/Header/Follow';
import WorkMain from './Components/Work/WorkMain';
import BlogMain from './Components/Blog/BlogMain';
import MainScreen from './Components/MainStack/MainScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tools from './Components/Screens/Tools';

const Stack = createStackNavigator();
export default function App() {
  const inputEl = useRef(null);
  const [bodyHeight,setBodyHeight] = useState(0)
  const [selectedNavitem,setSelectednavItem] = useState("about")
 
  useEffect(()=>{
    if(inputEl.current){
      inputEl.current.measure((fx, fy, width, height, px, py) => {
        setBodyHeight(height-0.5)
      });
      
    }
  },[inputEl])
  const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1224,
    // alternatively...
    query: "(max-device-width: 1224px)"  
  });
  if (isTabletOrMobileDevice) {
    return (<Text>Hi Mobile Users 👋</Text>)
  }
  const config = {
    screens: {
      MainScreen: 'home',
      Tools: 'skills',
    },
  };
  
  const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config,
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
      screenOptions={
        {
          headerShown:false
        }
      }>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Tools" component={Tools}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
   
  },
  header:{
    
    
    backgroundColor: '#fff',
    alignItems:'center',
    elevation:2,
   
    shadowColor: 'black',
    shadowOpacity:0.2,
            shadowRadius:8,
            padding:12
  },
  navbar:{
    flexDirection:'row',
   
   
   

  },
  navitem:{
     paddingHorizontal:12,
    
  },
  navitemActive:{
    borderBottomWidth:1,borderColor:'red'
  },
  navText:{
   fontSize:16,
   fontWeight:'300',
   fontFamily:"Roboto"
  },
  body:{
   flex:1,
  
  }
});
