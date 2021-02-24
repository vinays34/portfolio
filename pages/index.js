// @generated: @expo/next-adapter@2.1.55
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import NavigationBar from '../NextComponents/NavigationBar';
import AboutLeft from '../Components/AboutLeft';
import AboutRight from '../Components/AboutRight';
import About from '../NextComponents/About';
import WorkMain from '../Components/Work/WorkMain';
import BlogMain from '../Components/Blog/BlogMain';
import Contact from '../Components/Contact/Contact';
import AboutMe from '../Components/AboutMe/AboutMe';
import Head from 'next/head'
import { useMediaQuery } from 'react-native-media-query';


export default function App() {

  const inputEl = useRef(null);
  const inputE2 = useRef(null);
  const scrollRef = useRef(null);
  const [navItemIndex,setNavItemIndex] = useState(0)
  const handleNavBarclick = (itemID)=>{
    setNavItemIndex(itemID)
  }
  const [bodyHeight,setBodyHeight] = useState(0)
  const [selectedNavitem,setSelectednavItem] = useState(0)
  const [refersh,setRefresh] = useState(false)
  const navBarStyles = {display:'block'}
  const [navStylesNew,setnavStylesNew] = useState(false)
  const [horizontalState,sethorizontalState] = useState(true)
  //Media query stylings
  const styles1 = {

    container: {
      flex: 1,
     
      width:'100%',
     
      alignItems: 'center',
      '@media (max-width: 600px)': {
        backgroundColor: 'blue',
        flexDirection:'column'
    },
    },
    text: {
      fontSize: 16,
    },
    footerText:{
      fontSize:14,
      fontWeight:'bold',
      cursor:'pointer'
      
    },
    menuImage:{
      display:'none',
      '@media (max-width: 600px)': {
        display:'block',
        height:40,width:40,borderRadius:4,margin:12,
    },
    },
    navBarStyle:{
      display:'block',
      '@media (max-width: 600px)': {
         display:'none'
    }, 
    },
    navLogoContainer:{
      shadowColor:'black',
      shadowOpacity:0.4,
      shadowRadius:6,width:'100%',alignItems:'center',
      '@media (max-width: 600px)': {
       
   },
    },
    logoView:{
      '@media (max-width: 600px)': {
         justifyContent:'space-between'
      },
    }
  }

  
  const [ids, styles] = useMediaQuery(styles1);



  const dsiplayView =(index)=>{
    switch (index) {
      case 0:
        return <About/>
        break;
        case 1:
          return <WorkMain/>
          break;
          case 2:
            return <BlogMain/>
            break;
            case 3:
              return <Contact/>
              break;
      default:
        break;
    }
  }



  useEffect(()=>{
 
    scrollRef.current.scrollTo({x: 0, y: bodyHeight*navItemIndex, animated: true})
  },[navItemIndex])
 const HandleScroll = (event)=>{
  console.log("VALUE IS ",Math.round(event.nativeEvent.contentOffset.y/bodyHeight),selectedNavitem)
  setNavItemIndex(Math.round(event.nativeEvent.contentOffset.y/bodyHeight))
 }
  useEffect(()=>{
    if(inputEl.current){
      inputEl.current.measure((fx, fy, width, height, px, py) => {
        setBodyHeight(height-0.5)
        // var ht = height
        // inputE2.current.measure((fx,fy,width,height,px,py)=>{
        //   setBodyHeight(ht-height)
        //   console.log("T HEIGHT ",height,ht)
        // })
      });
      
    }
  },[inputEl])

  return (
    
    <View style={styles.container} >
     
       {/* <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
 <Text style={{fontSize:20,fontWeightL:"bold",fontFamilty:"Roboto",alignSelf:'center'}}>PAGE STILL UNDER CONSTRUCTION.</Text> */}
    <View 
    ref={inputE2}
    dataSet={{ media: ids.navLogoContainer }}
    style={[styles.navLogoContainer]}>
<View
 dataSet={{ media: ids.logoView }}
style={{
  width:'100%',
  flexDirection:'row',
       justifyContent:'center'}}>
<Image
     source={'/vs.png'}
     style={{height:40,width:40,borderRadius:4,margin:12}}
     
     />
    
    
      <TouchableOpacity
      onPress={()=>{
        setnavStylesNew(!navStylesNew)
        sethorizontalState(!horizontalState)
      }}
      >
      <Image
       source={'/menu.png'}
       style={[styles.menuImage]}
       dataSet={{ media: ids.menuImage }}
       
       />
      </TouchableOpacity>
    
</View>
       <View style={[styles.navBarStyle,navStylesNew?navBarStyles:null]} dataSet={navStylesNew?null:{ media: ids.navBarStyle }} >
          <NavigationBar horizontal={horizontalState} handleNavBarclick={handleNavBarclick} navItemIndex={navItemIndex}/>
          </View>
     
    </View>
     
      
    <View style={{flex:1,width:'100%'}} ref={inputEl}>
  <View style={{height:bodyHeight}}>
  <ScrollView 
   ref={scrollRef}
   onScroll={HandleScroll}
  >
 <View style={{height:bodyHeight}}>
 <About height={bodyHeight}/>
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
 <View style={{paddingVertical:8,alignItems:'center'}}>
          <Text>❤️</Text>
          <Text>Thank you for your support!</Text>
        </View>
     
     
      
      <View style={{alignItems:'center',justifyContent:'center',padding:8}}>
      <Link href={"privacypolicy"}>
      <Text style={styles.footerText}>Privacy Policy</Text>
      </Link>
      <Text>        </Text>
      <Link href={"termsandconditions"}>
      <Text style={styles.footerText}>Terms and Conditions</Text>
    
      </Link>
      </View>
      
     
  
    
  </ScrollView>
  {/* <FlatList
  data={[0,1,2,3]}
  renderItem={renderItems}
  /> */}
  </View>
    </View>

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
   
//     width:'100%',
   
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 16,
//   },
//   footerText:{
//     fontSize:14,
//     fontWeight:'bold',
//     cursor:'pointer'
    
//   }
// });
