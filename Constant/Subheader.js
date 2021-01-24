import React from 'react';
import {View,Text} from 'react-native';

const Subheader = (props)=>{
    return (
        <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:12}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#f2f2f2'}} />
  <View style={{borderWidth:0.2,borderColor:'#f2f2f2',borderRadius:12,padding:12}}>
    <Text style={{ textAlign: 'center',fontWeight:'bold'}}>{props.name}</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#f2f2f2'}} />
</View>
    )
}
export default Subheader;