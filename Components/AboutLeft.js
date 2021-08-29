import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import {View,Text, Animated, useWindowDimensions} from 'react-native';
import Typed from 'react-typed';
import { fadeIn } from '../utils';
const AboutLeft =()=>{
    const [tagLineDisplay,setTagLineDisplay] = useState(false)
    const [secondLine,setSecondline] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [device,setDevice] = useState("web"); 
    const windowWidth = useWindowDimensions().width;
    useEffect(()=>{
         if(windowWidth<1920 && windowWidth>1100){
            setDevice("web")
         }else if(windowWidth<1100 && windowWidth>600){
            setDevice("tab")
        }else if(windowWidth<600  ){
            setDevice("mob") 
        }
    },[windowWidth])
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <View>
           <View style={{width:'100%',maxWidth:315}}>
          
           <Typed
         
           style={{fontSize:48,fontWeight:'bold',fontFamily:'Roboto',color:'red',alignSelf:'center'}}
                    strings={['VINAY']}
                    typeSpeed={80}
                    showCursor={false}
                  
                    onComplete={()=>{
                     
                     // setTagLineDisplay(true)
                      setSecondline(true)
                    }}
                />
           {secondLine?(
               <Typed
         
               style={{fontSize:48,fontWeight:'bold',fontFamily:'Roboto',alignSelf:'center'}}
                        strings={['SOUNDERRAJ']}
                        typeSpeed={80}
                        showCursor={false}
                      
                        onComplete={()=>{
                         
                          setTagLineDisplay(true)
                          fadeIn(fadeAnim,5000)
                        }}
                    />
           ):(null)}
           </View>
          
              <Animated.View style={{opacity:fadeAnim}}>
                
                    <Text > {tagLineDisplay?("React Native developer at the core and much more..."):null}</Text>
              
             
              </Animated.View>
           
        
           
          </View>
        </View>
    )
}
export default AboutLeft;