import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Posts from '../components/Posts/Posts'
import { Button } from 'react-bootstrap'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [posts, setPosts] = useState(data.allMarkdownRemark.edges)
  const [skip, setSkip] = useState(12)
  const [more, setMore] = useState(true)

  const handleShowMore = async () => {
    let newPosts = await fetch(`${location.origin}/___graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          site {
            siteMetadata {
              title
              author {
                summary
              }
            }
          }
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 12
            skip: ${skip}
          ) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                  cover {
                    childImageSharp {
                      id
                      fluid {
                        src
                      }
                    }
                  }
                  category
                }
              }
            }
          }
        }`,
      }),
    })

    newPosts = await newPosts.json()

    setSkip(skip + 12)
    setPosts([...posts, ...newPosts.data.allMarkdownRemark.edges])
    if (newPosts.data.allMarkdownRemark.edges.length < 12) {
      setMore(false)
    }
  }

  return (
    <Layout location={location} title={siteTitle} page="homepage">
      <SEO title={data.site.siteMetadata.author.summary} />
      <Posts posts={posts} />
      {more && (
        <div className="loadMore">
          <Button variant="secondary" onClick={handleShowMore}>
            مطالب بیشتر
          </Button>
        </div>
      )}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          summary
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 12
      skip: 0
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            category
          }
        }
      }
    }
  }
`
