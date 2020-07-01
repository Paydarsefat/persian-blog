import React, { useState } from "react"
import { Link } from "gatsby"
import WINDOW from '../../utils/window'

const Posts = ({ posts }) => {
  const urlParams = new URLSearchParams(WINDOW.location.search);
  const [chosenCategory, setChosenCategory] = useState(urlParams.get('category'))
  const changeSearchParams = (categoryName) => {
    if (categoryName === 'nothing') {
      WINDOW.history.pushState('page2','All','/');
      setChosenCategory('')
      return
    }
    WINDOW.history.pushState('page2', categoryName, `?category=${categoryName}`);
    setChosenCategory(categoryName)
  }

  return (
    <div>
      <div className="menu">
        <ul>
          <li className={chosenCategory === '' ? 'selected' : ''}>
            <button onClick={()=>changeSearchParams('nothing')}>
              خانه
            </button>
          </li>
          <li className={chosenCategory === 'technology' ? 'selected' : ''}>
            <button onClick={()=>changeSearchParams('technology')}>
              تکنولوژی
            </button>
          </li>
          <li className={chosenCategory === 'git' ? 'selected' : ''}>
            <button onClick={() => changeSearchParams('git')}>
              گیت
            </button>
          </li>
          <li className={chosenCategory === 'react-basic' ? 'selected' : ''}>
            <button onClick={() => changeSearchParams('react-basic')}>
              دوره React مقدماتی
            </button>
          </li>
        </ul>
      </div>
      <div className="posts">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          if (chosenCategory && chosenCategory !== '') {
            if (node.frontmatter.category !== chosenCategory){
              return
            }
          }
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
    </div>
  )
}

export default Posts
