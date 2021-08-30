import {
    ApolloClient,
    InMemoryCache,
    
  } from "@apollo/client";
  export const client = new ApolloClient({
    uri: 'https://bb73-49-205-120-175.ngrok.io/graphql',
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