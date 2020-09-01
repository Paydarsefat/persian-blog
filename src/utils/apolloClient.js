import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: '/___graphql',
  cache: new InMemoryCache(),
})

export default apolloClient
