import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useRouter } from "next/router";
import Link from "next/link";
import { projectData } from "../data";

const WorkSingle = () => {
  const projectdata = projectData;
//   const router = useRouter();

//   const { id } = router.query;
//   const [pid, setPid] = useState(id);
//   console.log("ID IS ", id);
//   const displayProjectDetails = () => {
//     for (var i = 0; i < projectdata.length; i++) {
//       console.log(
//         "WORK IS IN PORGRESS",
//         projectdata[1].id,
//         projectdata.length,
//         i
//       );
//       if (projectdata[i].id === id) {
//         console.log("WORK IS IN PORGRESS");
//         return (
         
//         );
//       }
//     }
//   };
const renderItems =({item,index})=>{
    return(
        <View
        style={{
          width: 600,
          alignSelf: "center",
          padding: 20,
          borderRadius: 12,
          shadowRadius: 4,
          shadowColor: "grey",
          margin:20
        }}
      > <a href={item.url} target="_blank">
          <View style={{padding:2,shadowRadius: 2,
          shadowColor: "grey",paddingHorizontal:8,position:'absolute',right:8,zIndex:3,borderRadius:4}}>
         
           <Text style={[styles.text]}>View</Text>
          
          </View>
          </a>

       
     
       <View style={{ flexDirection: "row" }}>
          <Image
            source={item.logo}
            style={{ height: 100, width: 100 ,borderRadius:12 }}
          />
          <View style={{marginLeft:12,justifyContent:'center'}}>
            <Text style={[styles.titleText]}>{item.title}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View>
              <Text style={[styles.subTitle]}>Release date: </Text>
              <Text style={{color:'textGrey',fontFamily:'Roboto',fontSize:14,textAlign:'center'}}>{item.release}</Text>
              </View>
              <View>
              <Text style={[styles.subTitle]}>Release date: </Text>
              <Text style={{color:'textGrey',fontFamily:'Roboto',fontSize:14,textAlign:'center'}}>{item.lastUpdate}</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={[styles.subTitle]}>Current Version:</Text><Text style={{color:'textGrey',fontFamily:'Roboto',fontSize:14,textAlign:'center'}}> {item.version}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Description: {item.desc}</Text>
          <View style={{ flexDirection: "row" }}>
            {item.tools.map((source, index) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 4,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "grey",
                      height: 10,
                      width: 10,
                      borderRadius: 10,
                      margin: 4,
                    }}
                  ></View>
                  <View>
                    <Text>{source}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      
      </View>
    )
}
  return (
    <View style={{flex:1}}>
     
      <FlatList
      contentContainerStyle={{padding:8}}
      data={projectData}
      renderItem={renderItems}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    titleText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#454545',
        fontFamily:"Roboto"
    },subTitle:{
        fontSize:16,
        fontWeight:'500',
        color:'#454545',
        fontFamily:"Roboto"
    },
    text:{
        fontSize:14,
        fontWeight:'bold',
        color:'#454545',
        fontFamily:"Roboto"
    }
})
export default WorkSingle;
