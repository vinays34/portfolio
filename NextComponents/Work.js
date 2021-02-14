import React from 'react';
import {View,Text} from 'react-native';
import AboutLeft from '../Components/AboutLeft';
import AboutRight from '../Components/AboutRight';
import { useRouter } from 'next/router'

  

const Work = ()=>{
    const router = useRouter()
    const { pid } = router.query
    return(
     <View style={{flexDirection:'row',flex:1,width:'100%'}}>
     
     
     </View>
    )
}
export default Work;