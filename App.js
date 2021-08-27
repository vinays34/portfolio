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
import Contact from './Components/Contact/Contact'; 
import Index from './Components/MainStack/Index';
import BlogIndex from './Blog/BlogIndex';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloProvider/ApolloClient';
import BlogPost from './Blog/BlogPost';

const Stack = createStackNavigator();
export default function App() {
  const inputEl = useRef(null);
  const [bodyHeight,setBodyHeight] = useState(0)
  const [selectedNavitem,setSelectednavItem] = useState("about")
 
  // useEffect(()=>{
  //   if(inputEl.current){
  //     inputEl.current.measure((fx, fy, width, height, px, py) => {
  //       setBodyHeight(height-0.5)
  //     });
      
  //   }
  // },[inputEl])
  // const isTabletOrMobileDevice = useMediaQuery({    
  //   maxDeviceWidth: 1224,
  //   // alternatively...
  //   query: "(max-device-width: 1224px)"  
  // });
  // if (isTabletOrMobileDevice) {
  //   return (<Text>Hi Mobile Users 👋</Text>)
  // }
  const config = {
    screens: {
      MainScreen: '',
      BlogIndex:'/blog',
      BlogPost:'/blog/post/:id',
      Tools: '/skills',
      PrivacyPolicy: '/privacypolicy',
      NotFound: '*',
    },
  };
  const state = {
   
        state: {
          routes: [
            {
              name: 'BlogIndex',
              
              
            },
            {
              name:'MainScreen'
            }
          ],
        },
       
  };
  const linking = {
    prefixes: ['https://vinays.dev', 'vinays.dev://','http:localhost:19006'],
    config,
   state
  };

  return (
    <ApolloProvider client={client}>
     <NavigationContainer linking={linking}  fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
      screenOptions={
        {
          headerShown:false
        }
      }>
       
        <Stack.Screen name="MainScreen" component={Index} options={{title:"Home"}}/>
        <Stack.Screen name="BlogIndex" component={BlogIndex}/>
        <Stack.Screen name="BlogPost" component = {BlogPost}/>
        <Stack.Screen name="Tools" component={Tools}/>
        <Stack.Screen name={"NotFound"} component={Contact}/> 
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
     
    
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
