import React from 'react';
import {View,Text, ScrollView} from 'react-native';
import { useMediaQuery } from 'react-responsive';
import AboutLeft from '../Components/AboutLeft';
import AboutRight from '../Components/AboutRight';

const About = (props)=>{

    const isTabletOrMobileDevice = useMediaQuery({    
        maxDeviceWidth: 1224,
        // alternatively...
        query: "(max-device-width: 1224px)"  
      });
    return(
        <View style={[{flex:1,width:'100%'},isTabletOrMobileDevice?null:{flexDirection:'row'}]}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     <AboutLeft/>
     </View>
     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
   
    <AboutRight/>
    
     </View>
        </View>
    )
}
export default About;