import { useQuery } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { View,Text, TouchableOpacity, FlatList, ActivityIndicator, Image  } from 'react-native';
import { client } from '../ApolloProvider/ApolloClient';
import BlogHeader from './BlogHeader';
import { BLOG_QUERY_MAIN } from './Queries';
import { useEffect } from 'react';
const BlogIndex = (props)=>{
    useEffect(()=>{
        console.log("Blog inedex props",props)
        return console.log("Blog inedex props on return",props)
    })
    const [limit,setLimit] = useState(5)
    const [offset, setOffset ] = useState(0)
    const [loadFooter,setLoadFooter ] = useState(0)
     
    const [extraData,setExtraData] = useState(false)
    const {data,error,loading, fetchMore,refetch} = useQuery(BLOG_QUERY_MAIN,{
        variables:{
            limit:limit,
            offset:offset
        }
    })
    if(data){
        console.log("data",data)
        console.log("client1",client)
    }
    if(loading){
        console.log("Loading",loading)
    }
    const renderBlogs = ({item,index})=>{
        console.log("item",item)
        return(
            <View style={{margin:12,alignItems:'center',backgroundColor:"blue",padding:12 }}>
              <Image
              style={{height:120,width:"100%"}}
              source={item.coverimage}
              />
           <View>
           <Text>{item.title}</Text>
            <Text>{item.author}</Text>
           </View>
            </View>
        )
    }
    return (
        <View  style={{flex:1,flexDirection:'row'}} >
            <View style={{flex:1,backgroundColor:'green'}}>
              
            </View>
             <View style={{flex:3,backgroundColor:'red'}}>
                 <TouchableOpacity 
                 onPress={()=>{
                     
                      let off_set =offset + 5
                      setOffset(off_set)
                      setLoadFooter(true)
                      fetchMore({
                        variables:{
                            limit:limit,
                            offset:off_set
                        }  
                      }).then((res)=>{
                           setLoadFooter(false)
                          console.log("client res",data)
                      })
                 }}
                 >
                     <Text>Fetch More</Text>
                 </TouchableOpacity>
                 <BlogHeader/>
                 <View style={{flex:1,flexDirection:'row'}}>
                     <View style={{flex:3}}>
                       {data&&(
                            <FlatGrid
                            itemDimension={200}
                             
                            extraData={extraData}
                            data={data.vsBlogs}
                            renderItem={ renderBlogs}
                            ListFooterComponent={()=>{
                                if(loadFooter){
                                    return(
                                        <ActivityIndicator />
                                    )
                                }else{
                                    if(data.vsBlogs.length==0){
                                        return <Text>No more blogs</Text>
                                    }else{
                                        return null
                                    }
                                }

                             }}
                            />
                       )}
                     </View>
                     <View style={{flex:1,backgroundColor:'pink'}}>

                     </View>
                 </View>
             </View>
             <View style={{flex:1,backgroundColor:'yellow'}}>

            </View>
        </View>
    )
}
export default BlogIndex;
