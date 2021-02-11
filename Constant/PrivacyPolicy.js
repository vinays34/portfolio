import React from 'react';
import Iframe from 'react-iframe';
import { View } from 'react-native';

const PrivacyPolicy = ()=>{

    return(
        <View style={{alignItems:'center',flex:1}}>
            <Iframe url="https://www.freeprivacypolicy.com/live/f24b3cef-49f3-4c8a-9237-7e73c8cd9493"
        width="600"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </View>
    )
}
export default PrivacyPolicy;