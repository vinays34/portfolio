import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, FlatList, Image, StyleSheet } from "react-native"; 
import { NAV_BAR_DATA } from "../../UI/DataConstants";
import Header from "../../UI/Header";
import Home from "./../../UI/Home";
import { useWindowDimensions } from "react-native";
import Works from "../../UI/Works";
import Blogs from "../../UI/Blogs";
import BlogHeader from "../../Blog/BlogHeader";
import CustomTabHeader from "../../Constant/CustomTabHeader";
import AboutMe from "../AboutMe/AboutMe";
import AboutContact from "../../UI/AboutContact";
import ContactForm from "../../UI/ContactForm";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Index = (props) => {
  const windowHeight = useWindowDimensions().height;
  const styles = StyleSheet.create({
    icon:{
        marginHorizontal:6
    },
    containerItems :{
         height:windowHeight,
         maxHeight:1080
    }
  })
  const [selectedNavitem, setSelectedNavItem] = useState(NAV_BAR_DATA[0].id);
  const [navScroll,setNavScroll] = useState(false)
  const inputEl = useRef(null);
   
  const scrollRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.measure((fx, fy, width, height, px, py) => {
        setBodyHeight(height);
        
      });
    }
  }, [inputEl,windowHeight]);
  const renderBodyItems = ({ item, index }) => {
    switch (item.id) {
      case "0":
        return (
          <View style={[styles.containerItems]} >
            <Home />
          </View>
        );
      case "1":
        return (
          <View style={[styles.containerItems]} >
            <CustomTabHeader title="Works" />
            <Works />
          </View>
        );
      case "2":
        return (
          <View style={[styles.containerItems]} >
            <CustomTabHeader title="Blogs" />
            <Blogs navigation={props.navigation} />
          </View>
        );
      case "3":
        return (
          <View style={[styles.containerItems]}>
            <CustomTabHeader title="About" />
            <AboutContact navigation={props.navigation} />
          </View>
        );
        case "4":
            return (
              <View style={[styles.containerItems]} >
                <CustomTabHeader title="Contact" />
                <ContactForm navigation={props.navigation} />
              </View>
            );
    }
  };
  const navBarSelection = (id)=>{
    setNavScroll(true)
    setTimeout(()=>{
     setNavScroll(false)
    },1000)
    setSelectedNavItem(id)
    scrollRef.current.scrollToIndex({
        index: parseInt(id),
        viewOffset:10
    })
  }
  const HandleScroll = (event)=>{  
     if(!navScroll){
      setSelectedNavItem((Math.round(event.nativeEvent.contentOffset.y/bodyHeight)).toString())
     } 
   }
   const iconCLick=(ele)=>{
     
   }
  const listFooterComponent=()=>{
    return (
       <View style={{ backgroundColor:"#2e2e2e", alignItems: 'center',padding:40}}>
          <Image
          source={require("./../../assets/vs.png")}
          style={{height:60,width:60,borderRadius:8}}
          />
          <View style={{flexDirection:'row',padding:12}}>
          <MaterialCommunityIcons
          onPress={()=>iconCLick("insta")}
          style={[styles.icon]} name="instagram" size={24} color="#C13584" />
          <MaterialCommunityIcons style={[styles.icon]} name="facebook" size={24} color="#3B5998" />
          <MaterialCommunityIcons style={[styles.icon]} name="twitter" size={24} color="#1DA1F2" />
          <MaterialCommunityIcons style={[styles.icon]} name="github" size={24} color="#4078c0" />
          <MaterialCommunityIcons style={[styles.icon]} name="linkedin" size={24} color=" #0e76a8" />
          </View>
       </View>
    )
  }

  return (
    <View style={{ flex: 1,width:'100%',maxWidth:1920,alignSelf:'center' }}>
      <Header
        selectedNavitem={selectedNavitem}
        setSelectedNavItem={navBarSelection}
      />

      <View ref={inputEl} style={{ flex: 1,height: bodyHeight }}>
        <View style={{ height: bodyHeight }}>
          <FlatList
          showsVerticalScrollIndicator={false}
          onScroll={HandleScroll}
          ref={scrollRef} data={NAV_BAR_DATA} renderItem={renderBodyItems}
          ListFooterComponent={listFooterComponent}
          />
        </View>
        
      </View>
    </View>
  );
  
};

export default Index;
