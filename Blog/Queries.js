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