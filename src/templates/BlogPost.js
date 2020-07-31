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
            <div class="row content-container">
              {post.frontmatter.videoSourceURL && (
                <div class="col-12 col-md-4 col-lg-4 content-video">
                  <Video
                    videoSourceURL={post.frontmatter.videoSourceURL}
                    videoTitle={post.frontmatter.videoTitle}
                  />
                </div>
              )}
              {!post.frontmatter.videoSourceURL && (
                <div class="col-12 col-md-4 col-lg-4 content-image">
                  <img
                    src={
                      post.frontmatter.cover &&
                      post.frontmatter.cover.childImageSharp.fluid.src
                    }
                    alt={post.frontmatter.title}
                  />
                </div>
              )}
              <div class="col-12 col-md-8 col-lg-8 content">
                <h1>{post.frontmatter.title}</h1>
                <br />
                <br />
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
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
               description
               videoSourceURL
               category
               videoTitle
               cover {
                 childImageSharp {
                   fluid(maxWidth: 800) {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
             }
           }
         }
       `
