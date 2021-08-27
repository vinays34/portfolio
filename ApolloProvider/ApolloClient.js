import {
    ApolloClient,
    InMemoryCache,
    
  } from "@apollo/client";
  export const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(
        {
            typePolicies:{

                Query:{
                   fields:{
                       vsBlogs:{
                        keyArgs: false,
                        // Concatenate the incoming list items with
                        // the existing list items.
                        merge(existing = [], incoming) {  
                          return [...existing, ...incoming];
                        },
                       }
                   }
              }
            }
        }
    )
  });