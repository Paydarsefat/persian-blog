---
title: کار با Apollo Client و ApolloProvider و آشنایی با هوک useQuery
date: '2020-09-10'
videoSourceURL: https://www.youtube.com/embed/J7HavzCh3nQ
videoTitle: 'کار با Apollo Client و ApolloProvider و آشنایی با هوک useQuery'
cover: cover.jpg
comment: true
homepage: true
category: react-advanced
description: 'کار با Apollo Client و ApolloProvider و آشنایی با هوک useQuery'
---

بخش‌های مختلفی لازم است تغییر کنند یا ایجاد شودند تا این سیستم یعنی ارتباط بین ApolloProvider و useQuery ایجاد شود.

<br />

بارای مثال لازم است اول ApolloClient را ایجاد کنید.

<br />

```javascript
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'YOUR ENDPOINT URL',
  cache: new InMemoryCache(),
})

export default client
```

<br />

و سپس می‌بایست کل کامپونتت‌هایی که می‌خواهید را در ApolloProvider قرار دهید

<br />

```javascript
import { ApolloProvider } from '@apollo/client'
import client from '../utils/clientGraphQL'

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
```

<br />

سپس می‌توانید Query خود را تعریف کنید که مطمئنا لازم است بدانید چطور GraphQL کار می‌کند

<br />

```javascript
import { gql } from '@apollo/client'

const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      description
    }
  }
`

export default POSTS_QUERY
```

<br />

در نهایت می‌توانید تمام قطعات پازل را به هم وصل کنید و از useQuery استفاده کنید.

<br />

```javascript
const { loading, error, data } = useQuery(PostsQuery)
```

<br />

جزئیات بیشتر را می‌توانید در ویدئو ببینید.

<br />

این یکی از ویدئو‌های
[آموزش آنلاین React پیشرفته](/react-advanced-course)
هست.
