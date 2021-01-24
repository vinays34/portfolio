import React,{useEffect,useRef,useState} from 'react';
import {View,Text, SectionList, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Subheader from '../../Constant/Subheader';
import { ALL_TOOLS, SKILLS_SET } from '../../Constant/TextConstants';

const Tools =()=>{
    const inputEl = useRef(null);
    const [bodyHeight,setBodyHeight] = useState(0)
 
    const renderItem=({item,index})=>{
        return(
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }
    const Item = ({ title }) => (
        <View style={[styles.item,{flexDirection:'row'}]}>
            {console.log(title)}
            <Image
            source={title.imageurl}
            style={{height:50,width:50,marginHorizontal:12}}
            />
         <View style={{flex:1}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.title}>{title.name}</Text>
       {title.status?(
            <View style={{height:10,marginHorizontal:4,width:10,borderRadius:15,backgroundColor:'#4be02d'}}/>
             
            
       ):null}
        </View>
          <Text>{title.desc}</Text>
         </View>
        </View>
      );
      useEffect(()=>{
        if(inputEl.current){
          inputEl.current.measure((fx, fy, width, height, px, py) => {
            setBodyHeight(height-0.5)
          });
          
        }
      },[inputEl.current])
    return(
        <View style={{flex:1,backgroundColor:'white',alignItems:'center'}} ref={inputEl}>
         <View style={{maxWidth:800,height:bodyHeight}}>
         <SectionList
         showsVerticalScrollIndicator={false}
      sections={SKILLS_SET}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
          <Subheader name={title}/>
       
      )}
    />
         </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "white",
      margin:12,
      borderRadius:12,
      
    shadowColor: 'black',
    shadowOpacity:0.2,
            shadowRadius:2,
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 28,
      backgroundColor: "#fff",
      fontFamily:"Roboto"
    },
    title: {
      fontSize: 18
    }
  });
export default Tools;