import React from 'react';
import { useState } from 'react';
import { View,Text, TouchableOpacity, StyleSheet  } from 'react-native';

const Blogs = (props)=>{
    const [hoverItem,setHoverItem] = useState(false)
    return(
        <View style={{ flex:1}}>
            <View style={{alignItems:'center'}}>
            <Text>Blogs</Text>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
               <View>
               <Text >Why and What I write...</Text>
                <Text>I believe in sharing my knowledge with other is <br/>one of the best ways to hone your own skills.</Text>
               </View>
                </View>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center' }}>
                <TouchableOpacity
            onMouseEnter={()=>{setHoverItem(true)}}
            onMouseLeave={()=>{setHoverItem(false)}}
            style={[styles.buttonContainer,( hoverItem ) &&styles.selectionIndicator]}
            onPress={()=>{ props.navigation.navigate("BlogIndex")}}
            >
                <Text
                style={[( hoverItem )&&styles.selectionText]}
                >{"View my blogs"}</Text>
            </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    selectionIndicator:{
        
        backgroundColor:"#e3e3e3".replace,
        borderRadius:4,
        backgroundColor:'red'
    },
    buttonContainer:{
        
        padding:12,
        alignItems: 'center',
        marginHorizontal:4,
        borderColor:"red",
        borderWidth:1,
        borderRadius:4
    },
    selectionText:{
        fontWeight:"bold",
        color:"#fff"
    },
})
export default Blogs;