import { gql } from "@apollo/client";

export const BLOG_QUERY_MAIN = gql`
query($limit:Int, $offset:Int ){
    vsBlogs(
       start:$offset,
      limit:$limit,
      sort:"created_at:DESC",
    ){
      id
      title
      coverimage
      created_at
      author
      rating
      category
      
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
  }
}
`