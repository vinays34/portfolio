import React, { useRef, useState } from 'react';
import {View,Text, Animated} from 'react-native';
import Typed from 'react-typed';
import { fadeIn } from '../utils';
const AboutLeft =()=>{
    const [tagLineDisplay,setTagLineDisplay] = useState(false)
    const [secondLine,setSecondline] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    return (
        <View>
            <View>
           <View style={{width:'100%',maxWidth:315}}>
          
           <Typed
         
           style={{fontSize:48,fontWeight:'bold',fontFamily:'Roboto',color:'red'}}
                    strings={['VINAY']}
                    typeSpeed={80}
                    showCursor={false}
                  
                    onComplete={()=>{
                      console.log("Completed typing")
                     // setTagLineDisplay(true)
                      setSecondline(true)
                    }}
                />
           {secondLine?(
               <Typed
         
               style={{fontSize:48,fontWeight:'bold',fontFamily:'Roboto'}}
                        strings={['SOUNDERRAJ']}
                        typeSpeed={80}
                        showCursor={false}
                      
                        onComplete={()=>{
                          console.log("Completed typing")
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