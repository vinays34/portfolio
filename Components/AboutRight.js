import Link from 'next/link';
import React, { useRef, useState } from 'react';
import {View,Text, Image, ImageBackground, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view/dist/Popover';
import {
    useDimensions,
    useActive,
    useFocus,
    useHover,
    useREM,
    useScaledSize,
    Hoverable,
  } from 'react-native-web-hooks';
import { MAIN_TOOLS_DESC } from '../Constant/TextConstants';



const AboutRight = (props)=>{
    const [showPopover, setShowPopover] = useState(false);
   const [hoverindex,sethoverindex] = useState(null);
   const [hoverState,setHoverState] = useState(false)
    const renderItem =({item,index})=>{
        return (
            <View style={{backgroundColor:'white',padding:12}}>
                <Hoverable onHoverIn={()=>{sethoverindex(index)}} onHoverOut={()=>{sethoverindex(null)}}>
              <View
            
              style={{height:120,width:120}} >
             <Link
             href={"/skills"}
             >
             <Image
             
             resizeMode={'cover'}
            
             source ={item} style={[
                 styles.image,index===hoverindex?{height:120,width:120,cursor:'pointer', shadowColor: '#000',
                 shadowOffset: { width: 0, height: 2 },
                 shadowOpacity: 0.6,
                 shadowRadius: 2}
                 :
                 null
               ]} />
               </Link>
              
              </View>
             
              </Hoverable>
              <View style={{alignItems:'center'}}>
              <Text style={{posiiton:'absolute',textAlign:'center'}}> {hoverindex===index?MAIN_TOOLS_DESC[index]:null}</Text>
              </View>
              
            </View>
        )
    }
    return (
        <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
        
    
           
           <View style={{alignItems:'center',justifyContent:'center',width:'100%'}}>
           {/* <Image
            source ={require("./../assets/rnlogo.png")}
            style={[styles.image]}
            />
          
           <Image
            source ={require("./../assets/apollo.svg")}
            style={[styles.image,{backgroundColor:'white'}]}
            />
            <Image
            source ={require("./../assets/graphql.png")}
            style={[styles.image]}
            />
           
            <Image
            source ={require("./../assets/strapi.svg")}
            style={[styles.image]}
            /> */}
           <FlatList
           scrollToOverflowEnabled={false}
           
            data={['/rnlogo.png','apollo.png','graphql.png','strapi.png']}
        
            renderItem={renderItem}
            horizontal={true}
            />
           </View>
           <View style={{}}>
              
           <Hoverable
               onHoverIn={()=>{setHoverState(true)}} onHoverOut={()=>{setHoverState(false)}}
              >
                  
              <View style={[{borderWidth:1,cursor:'pointer',borderColor:'red',borderRadius:4},hoverState?{backgroundColor:"red",borderColor:'white'}:null]}>
              <Link href="/skills" style={{flex:1,backgroundColor:'green'}}>
                   <View style={{flex:1,padding:12}}>
                   <Text style={[hoverState?{color:'white',fontWeight:'bold'}:null]}>MORE TOOLS</Text> 
                   </View>
                   </Link>
               </View>
              
              </Hoverable>
             
           </View>
      
       
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        height:100,width:100,borderRadius:12,margin:12,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        padding:12.
        
    },
    hover:{
        backgroundColor:'red',
      // cursor:"pointer"
    }
})
export default AboutRight;