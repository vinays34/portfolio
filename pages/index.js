// @generated: @expo/next-adapter@2.1.55
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../NextComponents/NavigationBar';
import AboutLeft from '../Components/AboutLeft';
import AboutRight from '../Components/AboutRight';
import About from '../NextComponents/About';
import WorkMain from '../Components/Work/WorkMain';
import BlogMain from '../Components/Blog/BlogMain';
import Contact from '../Components/Contact/Contact';



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
  const renderItems = ({item,index})=>{
    <View style={{height:bodyHeight}}>
 {
  dsiplayView(index)
 }
 </View>
  }
  return (
    <View style={styles.container} >
    <View 
    ref={inputE2}
    style={{ shadowColor:'black',
        shadowOpacity:0.4,
        shadowRadius:6,width:'100%',alignItems:'center'}}>
<Image
     source={'/vs.png'}
     style={{height:40,width:40,borderRadius:4,margin:12}}
     />
    
      <NavigationBar handleNavBarclick={handleNavBarclick} navItemIndex={navItemIndex}/>
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
 <Contact/>
 </View>
 <View style={{paddingVertical:20,alignItems:'center'}}>
          <Text>❤️</Text>
          <Text>Thank you for your support!</Text>
        </View>
      <View >
      <Link href={"privacypolicy"}>
      <Text style={{alignSelf:'center',padding:20}}>Privacy Policy</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    width:'100%',
   
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
