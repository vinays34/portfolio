import React, { useEffect } from 'react';
import {View,Text} from 'react-native';
import Subheader from '../../Constant/Subheader';
import Iframe from 'react-iframe'
const Contact =()=>{

return(
    <View style={{flex:1}}>
        <Subheader name={"CONTACT"}/>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text>Hold your horses!Still Building this form...</Text>
        </View>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCNGePoPGe3TSg4lazsBw4YtJYAgL9PYIsTlCIx-Ay9tsY0Q/viewform?embedded=true" width="640" height="685" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
       {/* <View style={{height:200,width:300}}>
       <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}/>
       </View> */}
    </View>
)   
}

export default Contact;