import { gql } from "@apollo/client";

export const BLOG_QUERY_MAIN = gql`
query($limit:Int, $offset:Int,$filter_word:String,$category:[ENUM_VSBLOGS_CATEGORY] ){
  vsBlogs(
     start:$offset,
    limit:$limit,
    sort:"created_at:DESC",
    where:{_or:[{title_contains:$filter_word },{category:$category},  {vs_author:{  name_contains:$filter_word}}] }
  ){
    id
    title
    coverimage
    created_at
    author
    rating
    category
    vs_author{
      id
      name
      
    }
  }
}
`
export const GET_SINGLE_BLOG = gql`
query($blog_id:ID!){
  vsBlog(id:$blog_id){
    id
    title
    author
    post
    created_at
    rating
    upvotes
    downvotes
    vs_author{
      id
      name
      
    }
  }
}
`