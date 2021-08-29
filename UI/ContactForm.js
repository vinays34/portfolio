import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import { Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const ContactForm = () => {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [submitButtobHover, setsubmitButtobHover] = useState(false);
  const sendMail = () => {
    if (name.length > 0 && email.length > 0 && comment.length > 0) {
      
    
    // axios.post("http://localhost:1337/vs-contacts",{
    //     name: name,
    //     email: email,
    //     phone:phone,
    //     message: comment, 
    // }).then(()=>{
        axios
        .post("https://secret-island-95358.herokuapp.com/contact", {
          name: name,
          email: email,
          comment: "You have a new contact request",
        })
        .then(()=>{} )
        .catch(()=>{});
    // })
    }
    // axios.post('http://localhost:8080/contact', {

    //   firstName: 'Finn',
    //   lastName: 'Williams'

    // }).then(res=>console.log("response is",res))
    // .catch(err => console.log("error is",err))
    //   }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#fff",
            alignSelf: "center",
            borderRadius: 12,
            width:"90%",
            maxWidth:400,
            padding:12,
            boxShadow:"2px 2px 5px #e2e2e2"
          }}
        >
          
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Title>Wanna get in touch?</Title>
            </View>
            <TextInput
              onChangeText={setName}
              placeholder={"Enter name"}
              style={{
                outline:"none",
                backgroundColor:"#fff",
                height: 40,
                justifyContent: "center",
                borderWidth: 1,
                maxWidth: 315,
                marginVertical: 12,
                width: "100%",
                borderRadius: 8,
                borderColor: "grey",
                fontFamily: "Roboto",
                paddingLeft: 4,
              }}
            />
            <TextInput
              onChangeText={setEmail}
              placeholder={"Enter email"}
              style={{
                outline:"none",
                backgroundColor:"#fff",
                height: 40,
                justifyContent: "center",
                borderWidth: 1,
                maxWidth: 315,
                marginVertical: 12,
                width: "100%",
                borderRadius: 8,
                borderColor: "grey",
                fontFamily: "Roboto",
                paddingLeft: 4,
              }}
            />
            <TextInput
              onChangeText={setPhone}
              placeholder={"Enter phone"}
              style={{
                outline:"none",
                backgroundColor:"#fff",
                height: 40,
                borderWidth: 1,
                maxWidth: 315,
                marginVertical: 12,
                width: "100%",
                borderRadius: 8,
                borderColor: "grey",
                fontFamily: "Roboto",
                paddingLeft: 4,
              }}
            />
            <TextInput
              onChangeText={setComment}
              placeholder={"Enter comment"}
              multiline={true}
              numberOfLines={4}
              style={{
                outline:"none",
                  backgroundColor:"#fff",
                height: 120,
                textAlignVertical: "top",
                borderWidth: 1,
                maxWidth: 315,
                marginVertical: 12,
                width: "100%",
                borderRadius: 8,
                borderColor: "grey",
                fontFamily: "Roboto",
                paddingLeft: 4,
                padding: 10,
              }}
            />
            <TouchableOpacity
              onMouseEnter={() => {
                setsubmitButtobHover(true);
              }}
              onMouseLeave={() => {
                setsubmitButtobHover(false);
              }}
              style={[
                {
                 
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlignVertical: "top",
                  borderWidth: 1,
                  maxWidth: 315,
                  marginVertical: 12,
                  width: "100%",
                  borderRadius: 8,
                  borderColor: "red",
                  fontFamily: "Roboto",
                  paddingLeft: 4,
                },
                submitButtobHover&&{ backgroundColor: "red" },
              ]}
              onPress={() => {
                sendMail();
              }}
            >
              <Text
                style={[
                  { fontWeight: "bold", color: "#2e2e2e" },
                 submitButtobHover&& { color: "#fff" },
                ]}
              >
                Submit
              </Text>
            </TouchableOpacity>
           
        </View>
      </View>
    </View>
  );
};

export default ContactForm;
