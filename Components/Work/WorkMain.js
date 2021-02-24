import React, { useState } from 'react';
import {View,Text, FlatList, TouchableOpacity} from 'react-native';
import { Hoverable } from 'react-native-web-hooks';
import { DATA, DESC } from '../../Constant/TextConstants';
import Typed from 'react-typed';
import Subheader from '../../Constant/Subheader';
import Link from 'next/link';

import { useMediaQuery } from 'react-native-media-query';
const WorkMain = ()=>{

    const styles1 = {
        flatList:{
            '@media (max-width: 600px)': {
                width:'100%'
            },
        },
        carousel: {
            '@media (max-width: 600px)': {
             
          },
        }
      }
    
      
      const [ids, styles] = useMediaQuery(styles1);

    const bgColors = ["#F9564F","#FF5376","#717EC3"];
    const [hoverindex,sethoverindex] = useState(null);
    const renderItem =({item,index})=>{
        return(
            <>
            <Hoverable onHoverIn={()=>{sethoverindex(index)}} onHoverOut={()=>{sethoverindex(null)}}>
               <a style={{textDecoration:"none"}} href={item.url} target="_blank">
               <View style={[{
                    height:250,
                    width:300,
                    borderRadius:12,
                    backgroundColor:bgColors[index],
                    marginHorizontal:12,
                
                    alignItems:'center',
                    justifyContent:'center'},
                    hoverindex===index?{ 
                    cursor:'pointer',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.4,
                    shadowRadius: 6,}:null
                    ]}>
                    <Text style={{color:'white',fontFamily:'Roboto',fontSize:28,textAlign:'center'}}>{item.title}</Text>
                    {hoverindex===index?(
                         <Typed
         
                         style={{fontSize:12,fontFamily:'Roboto',color:'white'}}
                                  strings={[item.desc]}
                                  typeSpeed={40}
                                  showCursor={false}
                                
                                  onComplete={()=>{
                                  
                                   // setTagLineDisplay(true)
                                    
                                  }}
                              />
                    ):null}
                </View>

               </a>
                </Hoverable>
                     
                </>
           
        )
    }
    return(
     <View style={{flex:1}}>
         <Subheader name={"MY WORKS"}/>
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:24}}>What i have been working on</Text>
        </View>
      <View style={{justifyContent:'center',flex:1,backgorundColor:'red'}}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <View dataSet={{ media: ids.flatList }}>
      <FlatList
        data={DATA}
        contentContainerStyle={{padding:12}}
        renderItem={renderItem}
        horizontal={true}

        />
      </View>


       </View>
      <Link href="/work">
      <View style={{alignItems:'center'}}><Text style={{color:"#FCA311",fontWeight:'bold',cursor:'pointer'}}>and theres more...</Text></View>
      </Link>
      </View>
    </View>
    )
}
export default WorkMain