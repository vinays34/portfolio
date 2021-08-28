import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tools from './Components/Screens/Tools'; 
import Index from './Components/MainStack/Index';
import BlogIndex from './Blog/BlogIndex';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloProvider/ApolloClient';
import BlogPost from './Blog/BlogPost';
import { Provider as PaperProvider } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
const Stack = createStackNavigator();
export default function App() { 
 
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

  let [fontsLoaded] = useFonts({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else{


  return (
    <ApolloProvider client={client}>
       <PaperProvider>
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
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </ApolloProvider>
     
    
  );  }
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
