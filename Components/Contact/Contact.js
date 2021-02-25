import React, { useEffect, useState } from 'react';
import {View,Text, TextInput, TouchableOpacity} from 'react-native';
import Subheader from '../../Constant/Subheader';
import Iframe from 'react-iframe'

import axios from 'axios';
import { print } from 'graphql';
import gql from 'graphql-tag';


const Contact =()=>{

//     const ADD_SKILL = gql`
// mutation addSkill($id:String!, $name:String!, $level:Float!, $type:String!) {
//   addSkill(id:$id, name:$name, level:$level, type:$type) { 
//     status
//     id
//     name
//     level
//     type
//   }
// }
// `
const [name,setName ] = useState("");
const [email,setEmail] = useState("");
const [comment,setComment]  = useState("");
const sendMail = ()=>{
  if(name.length>0 && email.length>0 && comment.length>0){
    console.log("Hitting loalhost axios !")
    axios
.post("https://secret-island-95358.herokuapp.com/contact", {

  name:name,
  email:email,
  comment:comment

 
})
.then(res => console.log("response is",res))
.catch(err => console.log("error is",err))
  }
// axios.post('http://localhost:8080/contact', {

//   firstName: 'Finn',
//   lastName: 'Williams'
 
// }).then(res=>console.log("response is",res))
// .catch(err => console.log("error is",err))
//   }
}
return(
    <View style={{flex:1}}>
     
        <Subheader name={"CONTACT"}/>
        {/* <contactform/> */}
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Hold your horses!Still Building this form...</Text>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
            <TextInput
            onChangeText={setName}
            placeholder={"Enter name"}
            style={{height:40,justifyContent:'center',borderWidth:1,maxWidth:315,marginVertical:12,width:'100%',borderRadius:8,borderColor:'grey',fontFamily:"Roboto",paddingLeft:4}}
            />
            <TextInput
            onChangeText={setEmail}
            multiline={true}
            placeholder={"Enter email"}
            style={{height:40,borderWidth:1,maxWidth:315,justifyContent:'center',marginVertical:12,width:'100%',borderRadius:8,borderColor:'grey',fontFamily:"Roboto",paddingLeft:4}}
            />
            <TextInput
            onChangeText={setComment}
            placeholder={"Enter comment"}
            multiline={true}
            numberOfLines={4}
            style={{height:120,textAlignVertical:'top',borderWidth:1,maxWidth:315,marginVertical:12,width:'100%',borderRadius:8,borderColor:'grey',fontFamily:"Roboto",paddingLeft:4}}
            />
            <TouchableOpacity 
             style={{height:40,alignItems:'center',justifyContent:'center',textAlignVertical:'top',borderWidth:1,maxWidth:315,marginVertical:12,width:'100%',borderRadius:8,borderColor:'red',fontFamily:"Roboto",paddingLeft:4}}
           
            onPress={()=>{
                sendMail()
            }}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
            
        </View>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCNGePoPGe3TSg4lazsBw4YtJYAgL9PYIsTlCIx-Ay9tsY0Q/viewform?embedded=true" width="640" height="685" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
       {/* <View style={{height:200,width:300}}>
       <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}/>
       </View> */}
    </View>
)   
}

export default Contact;