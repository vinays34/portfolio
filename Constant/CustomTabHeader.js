import React from 'react';
import { View,Text  } from 'react-native';
import { Title } from 'react-native-paper';

const CustomTabHeader  =(props)=>{
    const title=props.title?props.title:"None"
    return(
        <View style={{width:'100%',justifyContent:'center'}}>
               <View 
               style={{height:0.5,
                position:'absolute',

            backgroundColor:"#a3a3a3", width:'80%',alignSelf:'center'}}
               />
            <View style={{alignSelf:'center',backgroundColor:'#fff',boxShadow:"0px 0px 5px #a3a3a3",width:200,alignItems: 'center',borderRadius:40,zIndex:2}}>
            <Title>{title}</Title>
            </View>
           </View>
    )
}
export default CustomTabHeader;