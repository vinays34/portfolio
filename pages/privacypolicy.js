import React from 'react';
import {View,Text} from 'react-native';
import Iframe from 'react-iframe';
const PrivacyPolicy2 =()=>{
    return(
        <View style={{flex:1,alignItems:'center'}}>
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
export default PrivacyPolicy2;