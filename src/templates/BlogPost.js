import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Video from "../components/Video/Video"

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const disqusConfig = {
    url: `http://fa.ehsangazar.com/${location.pathname}`,
    identifier: data.markdownRemark.id,
    title: data.markdownRemark.title,
  }
  return (
    <Layout location={location} title={siteTitle}>
      <Header />
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
              {post.frontmatter.videoSourceURL && (
                <div className="col-12 col-md-4 col-lg-4 content-video">
                  <Video
                    videoSourceURL={post.frontmatter.videoSourceURL}
                    videoTitle={post.frontmatter.videoTitle}
                  />
                </div>
              )}
              {!post.frontmatter.videoSourceURL && (
                <div className="col-12 col-md-4 col-lg-4 content-image">
                  <img
                    src={
                      post.frontmatter.cover &&
                      post.frontmatter.cover.childImageSharp.fluid.src
                    }
                    alt={post.frontmatter.title}
                  />
                </div>
              )}
              <div className="col-12 col-md-8 col-lg-8 content">
                <h1>{post.frontmatter.title}</h1>
                <br />
                <br />
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Disqus config={disqusConfig} />
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
