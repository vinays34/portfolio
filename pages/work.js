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
      >
        
       
     
       <View style={{ flexDirection: "row" }}>
          <Image
            source={item.logo}
            style={{ height: 100, width: 100 }}
          />
          <View style={{marginLeft:12}}>
            <Text style={[styles.titleText]}>Title:{item.title}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View>
              <Text style={[styles.titleText]}>Release date: </Text>
              <Text>{item.release}</Text>
              </View>
              <View>
              <Text style={[styles.titleText]}>Release date: </Text>
              <Text>{item.lastUpdate}</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={[styles.titleText]}>Current Version:</Text><Text> {item.version}</Text>
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
       <Link href={item.url}>
           <Text>View</Text>
       </Link>
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
        color:'#2e2e2e',
        fontFamily:"Roboto"
    }
})
export default WorkSingle;
