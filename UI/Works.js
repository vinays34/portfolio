import React, { useState } from 'react';
import { View,Text, FlatList, TouchableOpacity  } from 'react-native';
import { PROJECTS } from './DataConstants';
import Typed from 'react-typed';

const Works = ()=>{
    const [selectedId,setSelectedId] = useState("")
    const renderProjects=({item,index})=>{
        return(
            <TouchableOpacity 
onMouseEnter={()=>setSelectedId(item.title)}
onMouseLeave={()=>setSelectedId("")}
            onPress={()=>{window.open(item.url)}}
            style={{height:250,width:250,margin:24,backgroundColor:item.color,alignItems:'center',justifyContent: 'center',borderRadius:12,padding:12}}>
                <Text
                style={{color:"#fff",fontSize:18,fontWeight:'bold',fontFamily:'Roboto',textAlign:'center'}}
                >{item.title}</Text>
               {item.title===selectedId&&(
                    <Typed
                
                    style={{fontSize:14, fontFamily:'Roboto',color:'#fff'}}
                    strings={[item.desc]}
                    typeSpeed={80}
                    showCursor={false} 
                    />
               )}

                
            </TouchableOpacity>
        )
    }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent: 'center' }}>
            <Text
                style={{ fontSize:18,fontWeight:'bold',fontFamily:'Roboto',alignSelf:'center'}}
                >My Works</Text>
           <View>
           <FlatList
            contentContainerStyle={{ alignSelf:'center'}}
            horizontal
            data={PROJECTS}
            renderItem={renderProjects}
            
            />
           </View>
            <View>
            <Text
                style={{ fontSize:18,fontWeight:'bold',fontFamily:'Roboto',alignSelf:'center'}}
                >and more ...</Text>
            </View>
        </View>
    )
}
export default Works;