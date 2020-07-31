import React from 'react'
import profileImage from './profile.png'
import { Link } from 'gatsby'

const Header = ({ page }) => (
  <header className="theme-default">
    <div className="container">
      <div className="header-wrapper">
        <div className="header__name">
          <Link to="/" className="header__logo">
            <img src={profileImage} alt="Logo" />
          </Link>
          <div>
            <h1>احسان گازار</h1>
            <p>برنامه نویس، مدرس، بلاگر و صخره نورد</p>
          </div>
        </div>
        <nav>
          <ul>
            <li className={`nav-item ${page === "homepage" ? "active" : ""}`}>
              <Link to={"/"}>خانه</Link>
            </li>
            <li className={`nav-item ${page === "about" ? "active" : ""}`}>
              <Link to="/about">درباره</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header 