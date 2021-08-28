import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native"; 
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
const Index = (props) => {
  const [selectedNavitem, setSelectedNavItem] = useState(NAV_BAR_DATA[0].id);
  const windowHeight = useWindowDimensions().height;
  const inputEl = useRef(null);
   
  const scrollRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.measure((fx, fy, width, height, px, py) => {
        setBodyHeight(height);
        console.log("height:", height);
      });
    }
  }, [inputEl]);
  const renderBodyItems = ({ item, index }) => {
    switch (item.id) {
      case "0":
        return (
          <View style={{ height: windowHeight }}>
            <Home />
          </View>
        );
      case "1":
        return (
          <View style={{ height: windowHeight }}>
            <CustomTabHeader title="Works" />
            <Works />
          </View>
        );
      case "2":
        return (
          <View style={{ height: windowHeight }}>
            <CustomTabHeader title="Blogs" />
            <Blogs navigation={props.navigation} />
          </View>
        );
      case "3":
        return (
          <View style={{ height: windowHeight }}>
            <CustomTabHeader title="About" />
            <AboutContact navigation={props.navigation} />
          </View>
        );
        case "4":
            return (
              <View style={{ height: windowHeight }}>
                <CustomTabHeader title="Contact" />
                <ContactForm navigation={props.navigation} />
              </View>
            );
    }
  };
  const navBarSelection = (id)=>{
    setSelectedNavItem(id)
    scrollRef.current.scrollToIndex({
        index: parseInt(id),
        viewOffset:10
    })
  }
  const HandleScroll = (event)=>{ 
    setSelectedNavItem((Math.round(event.nativeEvent.contentOffset.y/bodyHeight)).toString())
   }
  return (
    <View style={{ flex: 1 }}>
      <Header
        selectedNavitem={selectedNavitem}
        setSelectedNavItem={navBarSelection}
      />

      <View ref={inputEl} style={{ flex: 1 }}>
        <View style={{ height: bodyHeight }}>
          <FlatList
          
          onScroll={HandleScroll}
          ref={scrollRef} data={NAV_BAR_DATA} renderItem={renderBodyItems} />
        </View>
      </View>
    </View>
  );
};
export default Index;
