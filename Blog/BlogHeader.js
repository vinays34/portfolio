import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  } from 'react-native';

const BlogHeader = ()=>{
    const [blogname, setBlogname] = useState("")
    return (
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:4}}>
            <View style={{justifyContent:'center'}} >
            <Text>VS BLOGS </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
              <TextInput
              style={{borderWidth:1, borderColor:'green' }}
              placeholder={"Search blogs here..."}
              value={blogname}
              onChangeText={setBlogname}
              />
              <TouchableOpacity style={{backgroundColor:'blue', padding:8}}>
                  <Text>Search</Text>
              </TouchableOpacity>
              </View>
              <View style={{justifyContent:'center'}}>
                  <Text>Category</Text>
              </View>
            </View>
        </View>
        <View style={{padding:12,backgroundColor:'brown'}}>
            <Text>Easy filter</Text>
        </View>
        </View>
    )
}

export default BlogHeader;