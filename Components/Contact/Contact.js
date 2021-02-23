import React, { useEffect } from 'react';
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

// axios
// .post("https://morning-anchorage-88322.herokuapp.com/", {
//   query: print(ADD_SKILL),
//   variables: {
//     id: "String(id)",
//     name: "this.form.name",
//     level: parseFloat("12"),
//     type: "false",
//   },
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))
const LoadingScriptGAPI =()=>{
  const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";

    script.onload = () => {
      handleClientLoad()
    };
}
var gapi ="https://apis.google.com/js/api.js";
console.log("GAPI IS",gapi)
var CLIENT_ID = '210827140367-6aackeeung5g039sgp3rtm2pktpkvhu6.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyABrbY3hLZfkT8bxyHdr9tLngD2FSvK1fw';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listMajors();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1csgKcs7gjnAAY1U9qmcdEJdSFnu4TvbHpXQcaLsPIhQ',
    range: 'Class Data!A2:E',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      appendPre('Name, Major:');
      for (i = 0; i < range.values.length; i++) {
        var row = range.values[i];
        // Print columns A and E, which correspond to indices 0 and 4.
        appendPre(row[0] + ', ' + row[4]);
      }
    } else {
      appendPre('No data found.');
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}
useEffect(()=>{
  LoadingScriptGAPI()
},[])
return(
    <View style={{flex:1}}>
      <a href={"contactform.html"}>GO TO CONTACT FORM</a>
        <Subheader name={"CONTACT"}/>
        <contactform/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Hold your horses!Still Building this form...</Text>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
            <TextInput
            placeholder={"Enter name"}
            style={{height:40,justifyContent:'center',borderWidth:1,maxWidth:315,marginVertical:12,width:'100%',borderRadius:8,borderColor:'grey',fontFamily:"Roboto",paddingLeft:4}}
            />
            <TextInput
            multiline={true}
            placeholder={"Enter email"}
            style={{height:40,borderWidth:1,maxWidth:315,justifyContent:'center',marginVertical:12,width:'100%',borderRadius:8,borderColor:'grey',fontFamily:"Roboto",paddingLeft:4}}
            />
            <TextInput
            placeholder={"Enter comment"}
            multiline={true}
            numberOfLines={4}
            style={{height:120,textAlignVertical:'top',borderWidth:1,maxWidth:315,marginVertical:12,width:'100%',borderRadius:8,borderColor:'grey',fontFamily:"Roboto",paddingLeft:4}}
            />
            <TouchableOpacity 
             style={{height:40,alignItems:'center',justifyContent:'center',textAlignVertical:'top',borderWidth:1,maxWidth:315,marginVertical:12,width:'100%',borderRadius:8,borderColor:'red',fontFamily:"Roboto",paddingLeft:4}}
           
            onPress={()=>{
                
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