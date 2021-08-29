import { useQuery } from '@apollo/client';
import React from 'react';
import { View,Text, ScrollView, ActivityIndicator } from 'react-native';
import { GET_SINGLE_BLOG } from './Queries';
import Markdown from 'react-native-markdown-display';
import date from 'date-and-time';
import { decryption } from '../Constant/utility';
import { Caption, Divider, Paragraph, Title } from 'react-native-paper';
const BlogPost = (props)=>{
   
    const blog_id =  props.route.params.id 
   
    const {data,error,loading} = useQuery(GET_SINGLE_BLOG,{
        variables:{
            blog_id:blog_id
        }
    })
    if(data){
        
    }
    return (
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:2}}>
              
              </View>
           <View style={{ flex:4,backgroundColor:'#fff'}}>
            
          <View style={{flexDirection:'row',justifyContent:'space-between' ,padding:12,backgroundColor:"#F7BF50"}}> 
          <Title>VS BLOGS</Title>
          
          </View>
          <Divider  />
           {data&&(
               <ScrollView
               contentContainerStyle={{ padding:12}}
               contentInsetAdjustmentBehavior="automatic"
               style={{height: '100%'}}
             >
                 <Title>{data.vsBlog.title}</Title>
                 <View >
                     <Paragraph>{data.vsBlog.vs_author.name},</Paragraph>
                     <Caption>{date.format(new Date(data.vsBlog.created_at), 'ddd MMM DD YYYY')}</Caption>
                 </View>
               <Markdown
               style={markdownStyles}
               >
                  {data.vsBlog.post}
               </Markdown>
               <Divider  />
               <View style={{flexDirection:'row'}}>
                   <View style={{flex:1}}>
                   <Text>Rate this article</Text>
                   </View>
                   <View style={{flexDirection:'row',alignItems: 'center',}}>
                   <Text>Upvotes:{data.vsBlog.upvotes} || </Text>
                   <Text>Downvotes:{data.vsBlog.downvotes}</Text>
                   </View>
               </View>
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
const markdownStyles = {
    heading1: {
      fontSize: 24,
      color: 'purple',
    },
    link: {
      color: 'pink',
    },
    mailTo: {
      color: 'orange',
    },
    text: {
        
      fontSize:16,
      color: '#151515',
      fontFamily:"roboto"
    },
  };
export default BlogPost;