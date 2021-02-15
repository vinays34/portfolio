import Link from 'next/link';
import React, { useState } from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { Hoverable } from 'react-native-web-hooks';
import Subheader from '../../Constant/Subheader';
import { BLOGDATA } from '../../Constant/TextConstants';

const BlogMain = ()=>{
    const [hoverindex,sethoverindex] = useState(null);
    const [blogStatus,setBlogStatus] = useState(false)
    return(
       <View style={{flex:1}}>
           <Subheader name="BLOGS"/>
            <View style={{flex:1,flexDirection:'row'}}>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={{alignItems:'center',width:350}}>
                  <Text style={{fontSize:36,fontFamily:'Roboto',fontWeight:'bold'}}>Why and What I write...</Text>
                  <Text style={{fontFamily:'Roboto',textAlign:'justify'}}>{BLOGDATA}</Text>
              </View>
           </View>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Hoverable
               onHoverIn={()=>{sethoverindex(true)}} onHoverOut={()=>{
                  sethoverindex(false)
                  setBlogStatus(false)}}
              >
            
             <View 
              onPress={()=>{setBlogStatus(true)}}
              style={[{borderWidth:1,borderRadius:4,cursor:"pointer",borderColor:'red',padding:12},hoverindex?{backgroundColor:"red",borderWidth:0}:null]}>
                   <Link href="/blogs" > 
                   <Text style={[hoverindex?{color:'white',fontWeight:'bold'}:null]}>CHECK OUT MY BLOG</Text>
                   </Link>
                   </View>
              
              </Hoverable>
              <Text style={{color:"red"}}> {blogStatus?"Sorry this page is still under development!":null}</Text>
           </View>
        </View>
       </View>
    )
}
export default BlogMain;