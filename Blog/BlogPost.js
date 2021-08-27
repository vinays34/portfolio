import { useQuery } from '@apollo/client';
import React from 'react';
import { View,Text, ScrollView, ActivityIndicator } from 'react-native';
import { GET_SINGLE_BLOG } from './Queries';
import Markdown from 'react-native-markdown-display';
import date from 'date-and-time';
const BlogPost = (props)=>{
    console.log("Props.navigation:",props.route.params,window.location.href)
    const blog_id = props.route.params.id
    const {data,error,loading} = useQuery(GET_SINGLE_BLOG,{
        variables:{
            blog_id:blog_id
        }
    })
    if(data){
        console.log("Data",data)
    }
    return (
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:2}}>
              
              </View>
           <View style={{ flex:4,backgroundColor:'#fff'}}>
            
          <View style={{flexDirection:'row',justifyContent:'space-between', backgroundColor:"red",padding:12}}>
          <Text  >VS BLOGS</Text>
          <Text  >Links to social media goes here!</Text>
          </View>
           {data&&(
               <ScrollView
               contentContainerStyle={{ padding:12}}
               contentInsetAdjustmentBehavior="automatic"
               style={{height: '100%'}}
             >
                 <Text>{data.vsBlog.title}</Text>
                 <View >
                     <Text>{data.vsBlog.author},</Text>
                     <Text>{date.format(new Date(data.vsBlog.created_at), 'ddd MMM DD YYYY')}</Text>
                 </View>
               <Markdown>
                  {data.vsBlog.post}
               </Markdown>
             </ScrollView>
           )}
           {loading&&(
               <ActivityIndicator/>
           )}
           <View>

           </View>
           </View>
           <View style={{flex:2}}>
              
            </View>
            
        </View>
    )
}
export default BlogPost;