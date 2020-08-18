import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Video from "../components/Video/Video"

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={
          post.frontmatter.cover &&
          post.frontmatter.cover.childImageSharp.fluid.src
        }
      />
      <div className="no-pd" id="content">
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to={"/"}>
                  <i className="fas fa-home"></i>خانه
                </Link>
              </li>
              <li className="active">{post.frontmatter.title}</li>
            </ul>
          </div>
          <div className="about-us">
            <div className="row content-container">              
              <div className="col-12 col-md-4 col-lg-4 content-image">
                <img
                  src={
                    post.frontmatter.cover &&
                    post.frontmatter.cover.childImageSharp.fluid.src
                  }
                  alt={post.frontmatter.title}
                />
              </div>
              <div className="col-12 col-md-8 col-lg-8 content">
                <h1>{post.frontmatter.title}</h1>

                {post.frontmatter.videoSourceURL && (
                  <div className="content-video">
                    <Video
                      videoSourceURL={post.frontmatter.videoSourceURL}
                      videoTitle={post.frontmatter.videoTitle}
                    />
                  </div>
                )}
                <div className="space-2" />
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="space-8" />
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
