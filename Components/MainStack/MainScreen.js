import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, BackHandler, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ABOUT, WORK, BLOG, CONTACT, HOME } from '../../Constant/TextConstants';
import '@expo/match-media'
// Unleash the demo :D
import { useMediaQuery } from "react-responsive";
import Typed from 'react-typed';
import AboutLeft from '../AboutLeft';
import AboutRight from '../AboutRight';
import Follow from '../Header/Follow';
import WorkMain from '../Work/WorkMain';
import BlogMain from '../Blog/BlogMain';
import AboutMe from '../AboutMe/AboutMe';



export default function MainScreen(props) {
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
  const navigateToTools=()=>{
    props.navigation.navigate("Tools")
  }
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', function() {
      /**
       * this.onMainScreen and this.goBack are just examples,
       * you need to use your own implementation here.
       *
       * Typically you would use the navigator here to go to the last state.
       */
      props.navigation.goBack()
    
      /**
       * Returning false will let the event to bubble up & let other event listeners
       * or the system's default back action to be executed.
       */
      return false;
    });
  })
  return (
    <View style={styles.container}>
      
     <View style={[styles.header,isTabletOrMobileDevice]}>
       <Follow style={{position:'absolute',right:0}}/>
      <View>
       <Image
       style={{height:40,width:40,marginBottom:16,backgroundColor:'#f7bf50',borderRadius:8}}
       source={require("../../assets/vs.png")}
       />
      </View>
       <View style={[styles.navbar]}>
       <TouchableOpacity 
        onPress={()=>{setSelectednavItem('home')}}
        style={[styles.navitem,selectedNavitem==="home"?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{HOME}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity         
         onPress={()=>{setSelectednavItem('work')}}
        style={[styles.navitem,selectedNavitem==="work"?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{WORK}</Text>
        </TouchableOpacity>
        <TouchableOpacity          
         onPress={()=>{setSelectednavItem('blog')}}
        style={[styles.navitem,selectedNavitem==="blog"?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{BLOG}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{setSelectednavItem('about')}}
        style={[styles.navitem,selectedNavitem==="about"?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{ABOUT}</Text>
        </TouchableOpacity>
        <TouchableOpacity          
         onPress={()=>{setSelectednavItem('contact')}}
        style={[styles.navitem,selectedNavitem==="contact"?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{CONTACT}</Text>
        </TouchableOpacity>
       </View>
     </View>
     <View ref={inputEl} style={[styles.body]}>
     <View  style={{height:bodyHeight}}>
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <View style={{height:bodyHeight,flexDirection:'row'}}>
        <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <AboutLeft/>
        </View>
          <View style={{flex:1}}>
          <AboutRight navigateToTools={navigateToTools}/>
          </View>
        </View>
        <View style={{height:bodyHeight}}>
         <WorkMain/>
        </View>
        <View style={{height:bodyHeight}}>
         <BlogMain/>
        </View>
        <View style={{height:bodyHeight}}>
         <AboutMe/>
        </View>
      </ScrollView>
     </View>
     </View>
    </View>
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
