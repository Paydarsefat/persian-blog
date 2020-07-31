import React from "react"
import { Link } from "gatsby"

const Posts = ({ posts }) => {
  return (
    <div id="content">
      <div className="container">
        <div className="blog-masonry">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="post-card -center">
                <Link to={node.fields.slug} className="card__cover">
                  <img
                    src={
                      node.frontmatter.cover && node.frontmatter
                        .cover.childImageSharp.fluid.src
                    }
                    alt={title}
                  />
                </Link>
                <div className="card__content">
                  <h5 className="card__content-category">
                    {node.frontmatter.category}
                  </h5>
                  <Link to={node.fields.slug} className="card__content-title">
                    {title}
                  </Link>
                  <div className="card__content-info">
                    <div className="info__time">
                      <i className="far fa-clock"></i>
                      <p>
                        {new Date(node.frontmatter.date).toLocaleDateString(
                          "fa-IR"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Posts