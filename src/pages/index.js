import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Posts from '../components/Posts/Posts'
import { Button } from 'react-bootstrap'

const PAGE_NUMBER = 15

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [posts, setPosts] = useState(
    data.allMarkdownRemark.edges.slice(0, PAGE_NUMBER)
  )
  const [skip, setSkip] = useState(PAGE_NUMBER)
  const [more, setMore] = useState(true)

  const handleShowMore = () => {
    const newSkip = skip + PAGE_NUMBER

    setSkip(newSkip)
    setPosts(data.allMarkdownRemark.edges.slice(0, newSkip))
    if (data.allMarkdownRemark.edges.length < newSkip) {
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
      filter: { frontmatter: { homepage: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
            homepage
          }
        }
      }
    }
  }
`
