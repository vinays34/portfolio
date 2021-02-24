import React from 'react';
import {View,Text, Image} from 'react-native';
import { useMediaQuery } from 'react-responsive';
import Subheader from '../../Constant/Subheader';
import { BLOGDATA } from '../../Constant/TextConstants';

const AboutMe = ()=>{
  const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1224,
    // alternatively...
    query: "(max-device-width: 1224px)"  
  });
    return(
      <View style={{flex:1}}>
          {/* <View style={{position:'absolute'}}>
            <Text>HELLO</Text>
          </View>
          <View
          style={{borderWidth:0.001,borderColor:'grey'}}/> */}
         <Subheader name="ABOUT ME"/>
            <View style={[{justifyContent:'center',alignItems:'center',flex:1},isTabletOrMobileDevice?null:{flexDirection:'row'}]}>
           
           <Image
           style={{height:200,width:200,borderRadius:100}}
           source={"/pp.jpg"}
           />
           <View style={{alignItems:'center',width:"100%",maxWidth:350,padding:12,justifyContent:'center',marginHorizontal:24}}>
                
                 <Text style={{fontFamily:'Roboto',textAlign:'justify'}}>{BLOGDATA}</Text>
             </View>
       </View>
      </View>
    )
}
export default AboutMe;