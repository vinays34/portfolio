import React from 'react';
import {View,Text, Image} from 'react-native';
import Subheader from '../../Constant/Subheader';
import { BLOGDATA } from '../../Constant/TextConstants';

const AboutMe = ()=>{
    return(
      <View style={{flex:1}}>
          {/* <View style={{position:'absolute'}}>
            <Text>HELLO</Text>
          </View>
          <View
          style={{borderWidth:0.001,borderColor:'grey'}}/> */}
         <Subheader name="ABOUT ME"/>
            <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',flex:1}}>
           
           <Image
           style={{height:200,width:200,borderRadius:100}}
           source={require("./../../assets/pp.jpg")}
           />
           <View style={{alignItems:'center',width:350,justifyContent:'center',marginHorizontal:24}}>
                
                 <Text style={{fontFamily:'Roboto',textAlign:'justify'}}>{BLOGDATA}</Text>
             </View>
       </View>
      </View>
    )
}
export default AboutMe;