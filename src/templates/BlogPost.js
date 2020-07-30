import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Video from "../components/Video/Video"

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Header />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div class="no-pd" id="content">
        <div class="container">
          <div class="breadcrumb">
            <ul>
              <li>
                <Link to={"/"}>
                  <i class="fas fa-home"></i>خانه
                </Link>
              </li>
              <li class="active">{post.frontmatter.title}</li>
            </ul>
          </div>
          <div class="about-us">
            <div class="row align-items-center">
              {post.frontmatter.videoSourceURL && (
                <>
                  <div class="col-12 col-md-4 col-lg-4">
                    <Video
                      videoSourceURL={post.frontmatter.videoSourceURL}
                      videoTitle={post.frontmatter.videoTitle}
                    />
                  </div>
                  <div class="col-12 col-md-8 col-lg-8 content">
                    <h1>{post.frontmatter.title}</h1>
                    <br />
                    <br />
                    <section dangerouslySetInnerHTML={{ __html: post.html }} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="singleBlogPost">
        <article>
          <header>
            <h1 className="shabnam">
              {post.frontmatter.title}
            </h1>        
          </header>
          <Video          
            videoSourceURL={post.frontmatter.videoSourceURL}
            videoTitle={post.frontmatter.videoTitle}
          />
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div> */}
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description,
        videoSourceURL,
        category,
        videoTitle,
      }
    }
  }
`
