

import React from 'react';
import {View,Text} from 'react-native';
import Iframe from 'react-iframe';
const Blogs =()=>{
    return(
        <View style={{flex:1,alignItems:'center'}}>
<Iframe url="https://blognine.000webhostapp.com/"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </View>
    )
}
export default Blogs;