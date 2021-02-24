import React, { useEffect, useState } from 'react';
import {View,Text, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';

import AboutLeft from '../Components/AboutLeft';
import AboutRight from '../Components/AboutRight';
import Head from 'next/head'
import { createStyles, maxHeight, maxWidth, minWidth } from 'react-native-media-queries';

import { useMediaQuery } from 'react-native-media-query';

const About = (props)=>{
  const [refreshView,setrefreshView] = useState(false)
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const styles1 = {
    container: {
      flex:1,
        flexDirection:'row',
       
        '@media (max-width: 600px)': {
         
          flexDirection:'column'
      },
    }
  }

  
  const [ids, styles] = useMediaQuery(styles1);
  // const isTabletOrMobileDevice = useMediaQuery({    
   
  //   query: "(max-device-width: 1224px)"  
  // });
  // const isDesktop = useMediaQuery({    
   
  //   query: "(min-device-width: 1224px)"  
  // });
  //     console.log("ISTablet is",isTabletOrMobileDevice)
  //     useEffect(()=>{
  //       setrefreshView(!refreshView)
  //      console.log("====================================",isTabletOrMobileDevice,isDesktop,windowWidth,windowHeight)
  //     },[isTabletOrMobileDevice,isDesktop,windowWidth])
    return(
      <View style={[styles.container]} dataSet={{ media: ids.container }}>
        
       
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <AboutLeft/>      
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
            <AboutRight/>      
          </View>
      </View>
    )
}
// const base = {
//   container:{
//     flex:1,
//     flexDirection:'row',
//     backgroundColor:'yellow'
   
   
//     },
    
// subContainer:{
//    flex:1,
//    alignItems:'center',
//    justifyContent:'center'
// }
// };

// const styles = createStyles(
//   base,
 
//   // override styles only if screen height is less than 500
//   minWidth(500, {
//     container: {
//       flex:1,
//       padding:200,
//       backgroundColor:'green'
//     }
//   })
// );

export default About;