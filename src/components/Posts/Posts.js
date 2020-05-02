import React from "react"
import { Link } from "gatsby"

const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <article key={node.fields.slug}>
          <Link to={node.fields.slug} className="no-link">
            <div className="blogPost">
              <div className="imgContainer">
                <img src={node.frontmatter.cover.childImageSharp.fluid.src} />
              </div>
              <header className="shabnam">
                <h4>{title}</h4>
              </header>
            </div>
          </Link>
        </article>
      )
    })}
  </div>
)

export default Posts
