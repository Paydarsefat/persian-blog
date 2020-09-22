import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import AWSConceptCourse from './AWSConceptCourse'
import JavaScriptCourse from './JavaScriptCourse'
import WorkCourse from './WorkCourse'
import ReactAdvancedCourse from './ReactAdvancedCourse'
import ReactBasicCourse from './ReactBasicCourse'
import SEO from '../components/SEO/SEO'
import Video from '../components/Video/Video'
import Comment from '../components/Comment/Comment'

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  const uniquePath = post.fields.slug

  if (
    location.pathname.includes('es6-es7-etc-babel-webpack-javascript-course')
  ) {
    return <JavaScriptCourse location={location} data={data} />
  }
  if (location.pathname.includes('react-advanced-course')) {
    return <ReactAdvancedCourse location={location} data={data} />
  }
  if (location.pathname.includes('react-basic-course')) {
    return <ReactBasicCourse location={location} data={data} />
  }
  if (location.pathname.includes('amazon-web-services-concepts-course')) {
    return <AWSConceptCourse location={location} data={data} />
  }
  if (location.pathname.includes('find-a-programming-job-course')) {
    return <WorkCourse location={location} data={data} />
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={
          post.html.replace(/(<([^>]+)>)/gi, '').substr(0, 350) ||
          post.frontmatter.description ||
          post.excerpt
        }
        image={
          post.frontmatter.cover &&
          post.frontmatter.cover.childImageSharp.fluid.src
        }
      />
      <div id="content">
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to={'/'}>
                  <i className="fas fa-home"></i>خانه
                </Link>
              </li>
              {post.frontmatter.category === 'programming-world' && (
                <li>
                  <Link to={'/find-a-programming-job-course'}>
                    دوره آنلاین چطور وارد دنیای برنامه‌نویسی شویم و چطور پیشرفت
                    کنیم؟
                  </Link>
                </li>
              )}
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
                <article>
                  <section dangerouslySetInnerHTML={{ __html: post.html }} />
                </article>
                <div className="space-8" />
                {(post.frontmatter.lessonAfter ||
                  post.frontmatter.lessonBefore) && (
                  <div className="direction-lessons">
                    {post.frontmatter.lessonAfter && (
                      <div>
                        درس بعدی:{` `}
                        <Link to={post.frontmatter.lessonAfter}>
                          {post.frontmatter.lessonAfterTitle}
                        </Link>
                      </div>
                    )}
                    {post.frontmatter.lessonBefore && (
                      <div>
                        درس قبلی:{` `}
                        <Link to={post.frontmatter.lessonBefore}>
                          {post.frontmatter.lessonBeforeTitle}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                <div className="space-2" />
                {post.frontmatter.comment && (
                  <Comment uniquePath={uniquePath} />
                )}
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        videoSourceURL
        category
        comment
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
