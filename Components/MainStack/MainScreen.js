import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, BackHandler, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
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
import Contact from '../Contact/Contact';
import Iframe from 'react-iframe';



export default function MainScreen(props) {
  const inputEl = useRef(null);
  const scrollRef = useRef(null);

  const [bodyHeight,setBodyHeight] = useState(0)
  const [selectedNavitem,setSelectednavItem] = useState(0)
  const [refersh,setRefresh] = useState(false)
  
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
 
 const HandleScroll = (event)=>{

  setSelectednavItem(Math.round(event.nativeEvent.contentOffset.y/bodyHeight))
 }
useEffect(()=>{
 
  scrollRef.current.scrollTo({x: 0, y: bodyHeight*selectedNavitem, animated: true})
},[selectedNavitem])

useEffect(()=>{
  setRefresh(!refersh);
},useWindowDimensions().height)
  return (
    <View style={styles.container}>
      <View>
        
      </View>
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
        onPress={()=>{setSelectednavItem(0)}}
        style={[styles.navitem,selectedNavitem===0?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{HOME}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity         
         onPress={()=>{setSelectednavItem(1)}}
        style={[styles.navitem,selectedNavitem===1?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{WORK}</Text>
        </TouchableOpacity>
        <TouchableOpacity          
         onPress={()=>{setSelectednavItem(2)}}
        style={[styles.navitem,selectedNavitem===2?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{BLOG}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{setSelectednavItem(3)}}
        style={[styles.navitem,selectedNavitem===3?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{ABOUT}</Text>
        </TouchableOpacity>
        <TouchableOpacity          
         onPress={()=>{setSelectednavItem(4)}}
        style={[styles.navitem,selectedNavitem===4?styles.navitemActive:null]}>
          <Text style={[styles.navText]}>{CONTACT}</Text>
        </TouchableOpacity>
       </View>
     </View>
     <View ref={inputEl} style={[styles.body]}>
     <View  style={{height:bodyHeight}}>
      <ScrollView
      ref={scrollRef}
      onScroll={HandleScroll}
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
        <View style={{height:bodyHeight}}>
         <Contact/>
        </View>
        <View style={{paddingVertical:20,alignItems:'center'}}>
          <Text>❤️</Text>
          <Text>Thank you for your support!</Text>
        </View>
       <Text onPress={()=>{props.navigation.navigate("PrivacyPolicy")}}>Privacy Policy</Text>
        {/* <Iframe url="https://en.wikipedia.org/wiki/Blog"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
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
