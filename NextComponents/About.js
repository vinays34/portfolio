import React from 'react';
import {View,Text} from 'react-native';
import AboutLeft from '../Components/AboutLeft';
import AboutRight from '../Components/AboutRight';

const About = (props)=>{
    return(
        <View style={{flexDirection:'row',flex:1,width:'100%'}}>
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