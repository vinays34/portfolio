import React, { useEffect } from 'react';
import {View,Text, ScrollView, StyleSheet} from 'react-native';
import { useMediaQuery } from 'react-responsive';
import AboutLeft from '../Components/AboutLeft';
import AboutRight from '../Components/AboutRight';

const About = (props)=>{

    const isTabletOrMobileDevice = useMediaQuery({    
        maxDeviceWidth: 1224,
        // alternatively...
        query: "(max-device-width: 1224px)"  
      });
      console.log("ISTablet is",isTabletOrMobileDevice)
      useEffect(()=>{
       console.log("====================================",isTabletOrMobileDevice)
      },[isTabletOrMobileDevice])
    return(
      <View style={[styles.container,isTabletOrMobileDevice?null:{flexDirection:'row'}]}>
          <View style={styles.subContainer}>
            <AboutLeft/>      
          </View>
          <View style={styles.subContainer}>
            <AboutRight/>      
          </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
            flex:1,
           
            },
        subContainer:{
           flex:1,
           alignItems:'center',
           justifyContent:'center'
        }
    
})
export default About;