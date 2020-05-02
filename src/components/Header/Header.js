import React from 'react'
import { Link } from "gatsby"
import profileSrc from './profile.png'

const Header = () => (
  <div className="header">
    <div className="header-title">
      <Link to={`/`} className="no-link">
        <div>
          <img src={profileSrc} />
        </div>
        <div>
          <h3 className="shabnam">احسان گازار</h3>
          <h4 className="serif">برنامه نویس، بلاگر و صخره نورد</h4>
        </div>
      </Link>
    </div>
    <div className="menuContainer">
      <ul className="menu">
        <li>
          <a href="https://ehsangazar.com">English</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header 