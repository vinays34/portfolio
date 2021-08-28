import React from 'react';
import {View,Text, Image} from 'react-native';  
import { useMediaQuery } from 'react-native-media-query';
import { BLOGDATA } from '../Constant/TextConstants';

const AboutContact= ()=>{
 
  const styles1 = {
    container:{
          '@media (max-width: 600px)': {
              flexDirection:'column'
          },
      },
      carousel: {
          '@media (max-width: 600px)': {
           
        },
      }
    }
  
    
    const [ids, styles] = useMediaQuery(styles1);
    return(
      <View style={{flex:1 }}>
          {/* <View style={{position:'absolute'}}>
            <Text>HELLO</Text>
          </View>
          <View
          style={{borderWidth:0.001,borderColor:'grey'}}/> */}
         
            <View style={{flexDirection:'row',flex:1}}>
              
              <View style={[{justifyContent:'center',alignItems:'center',flex:1}]}>
           
           <Image
           style={{height:200,width:200,borderRadius:100}}
           source={require("./../assets/pp.jpg")}
           />
           <View style={{alignItems:'center',width:"100%",maxWidth:350,padding:12,justifyContent:'center',marginHorizontal:24}}>
                
                 <Text style={{fontFamily:'Roboto',textAlign:'justify'}}>{BLOGDATA}</Text>
             </View>
       </View>
               
             
            </View>
      </View>
    )
}
export default AboutContact;