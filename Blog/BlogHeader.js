import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  } from 'react-native';
import { Title } from 'react-native-paper';

const BlogHeader = ()=>{
    
    return (
        <View style={{backgroundColor:"#F7BF50"}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:4}}>
             
            <Title style={{fontWeight:"bold"}}>VS BLOGS </Title>
            <View style={{ justifyContent: 'center', }}>
                <Text>Follow me on:</Text>
            </View>
           
        </View>
        {/* <View style={{padding:12 }}>
            <Text>Easy filter</Text>
        </View> */}
        </View>
    )
}

export default BlogHeader;