import { useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { FlatGrid } from "react-native-super-grid";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
} from "react-native";
import { client } from "../ApolloProvider/ApolloClient";
import BlogHeader from "./BlogHeader";
import { BLOG_QUERY_MAIN } from "./Queries";
import { useEffect } from "react";
import { encryption } from "../Constant/utility";
import { Caption, Checkbox, Modal, Title } from "react-native-paper";
import date from "date-and-time";
const BlogIndex = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    width: "60%",
    alignSelf: "center",
  };
  const [blogname, setBlogname] = useState("");
  useEffect(() => {
    console.log("Blog inedex props", props);
    return () => {
      
    };
  });
  
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [loadFooter, setLoadFooter] = useState(0);
  const [categories, setCategories] = useState([]);
  const [extraData, setExtraData] = useState(false);
  const { data, error, loading, fetchMore, refetch } = useQuery(
    BLOG_QUERY_MAIN,
    {
      variables: {
        limit: limit,
        offset: offset,
        filter_word: blogname,
        category: categories,
      },
    }
  );
  if (data) {
    console.log("data", data);
    console.log("client1", client);
  }
  if (loading) {
    console.log("Loading", loading);
  }
  if(error){
      console.log("Error ",error)
  }
  const renderBlogs = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("BlogPost", {
            id: item.id,
          });
        }}
        style={{
          boxShadow: "0px 0px 5px #757575",

          shadowColor: "black",
          shadowOpacity: 0.4,
          margin: 12,
          alignItems: "center",
          padding: 12,
          borderRadius: 4,
        }}
      >
        <Image
          style={{ height: 120, width: "100%" }}
          source={item.coverimage}
        />
        <View style={{ width: "100%" }}>
          <Title numberOfLines={1}>{item.title}</Title>
          <View>
            <Caption>{item.vs_author.name}</Caption>
            <Caption>
              {date.format(new Date(item.created_at), "ddd MMM DD YYYY")}
            </Caption>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const searchFunction = (val) => {
    setBlogname(val);
    console.log("val", val);

    refetch({
      limit: 6,
      offset: 0,
      filter_word: val,
    });
  };
  const checkBoxValidation=(val)=>{
      //Add to array if checkbox value is not in array and vice versa
      console.log("Val ",categories,categories.indexOf(val))
      if(categories.indexOf(val)>=0){
          //remove category from array
            let temp = categories;
            temp.splice(temp.indexOf(val), 1);
            console.log("temp -s",temp)
            setCategories("temp")
            setCategories([...temp])
          
      }else{
          
          setCategories([...categories,val])
          
      }
  }
useEffect(()=>{
    console.log("categories ",categories)
},[categories])
  const listFooterComponent = () => {
    if (loadFooter) {
      return <ActivityIndicator />;
    } else {
      if (data.vsBlogs.length == 0) {
        return <Text>No more blogs</Text>;
      } else {
        return (
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => {
              let off_set = offset + 6;
              setOffset(off_set);
              setLoadFooter(true);
              fetchMore({
                variables: {
                  limit: limit,
                  offset: off_set,
                },
              }).then((res) => {
                setLoadFooter(false);
                console.log("client res", data);
              });
            }}
          >
            <Text>Fetch More</Text>
          </TouchableOpacity>
        );
      }
    }
  };
  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#e2e2e2" }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 3, backgroundColor: "#fff" }}>
        <BlogHeader />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                padding: 12,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={{
                    boxShadow: "0px 0px 2px #242424",
                    borderColor: "#121212",
                    borderRadius: 4,
                    padding: 4,
                  }}
                  placeholder={"Enter blog name or author..."}
                  value={blogname}
                  onChangeText={searchFunction}
                />
                <TouchableOpacity
                  onPress={() => {
                    showModal();
                  }}
                  style={{
                    boxShadow: "0px 0px 2px #242424",
                    backgroundColor: "#f2f2f2",
                    padding: 8,
                    borderRadius: 4,
                    marginHorizontal: 4,
                  }}
                >
                  <Text style={{ color: "#000" }}>Category</Text>
                </TouchableOpacity>
              </View>
            </View>
            {data && (
              <FlatGrid
                itemDimension={200}
                extraData={extraData}
                data={data.vsBlogs}
                renderItem={renderBlogs}
                ListFooterComponent={listFooterComponent}
              />
            )}
          </View>
        </View>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Checkbox 
            status={categories.indexOf("it")>=0 ? 'checked' : 'unchecked'}
              value={"it"}
              onPress={()=>checkBoxValidation("it")}
            />
            <Text>IT</Text>
          </View>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Checkbox 
            status={categories.indexOf("programming")>=0 ? 'checked' : 'unchecked'}
              value={"programming"}
              onPress={()=>checkBoxValidation("programming")}
            />
            <Text>Programming</Text>
          </View>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Checkbox 
            status={categories.indexOf("general")>=0 ? 'checked' : 'unchecked'}
              value={"general"}
              onPress={()=>checkBoxValidation("general")}
            />
            <Text>General</Text>
          </View>
        </Modal>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
export default BlogIndex;
