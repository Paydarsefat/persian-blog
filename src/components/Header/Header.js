import React, { useState, useContext } from 'react'
import AuthModals from '../AuthModals/AuthModals'
import PaidModal from '../PaidModal/PaidModal'
import SpecialOffer from '../SpecialOffer/SpecialOffer'
import MyApp from '../../contexts/MyApp'
import profileImage from './profile.png'
import { Link, navigate } from 'gatsby'
import { Button, Dropdown } from 'react-bootstrap'

import loading from '../Icon/loading.gif'

const Header = ({ page, location }) => {
  const app = useContext(MyApp)

  const handleClickOnLogOut = () => {
    localStorage.setItem('token', '')
    app.user.updateUser()
    navigate('/')
  }

  return (
    <>
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
                <li
                  className={`nav-item ${page === 'homepage' ? 'active' : ''}`}
                >
                  <Link to={'/'}>خانه</Link>
                </li>
                <li className={`nav-item ${page === 'about' ? 'active' : ''}`}>
                  <Link to="/about">درباره</Link>
                </li>
              </ul>
            </nav>
            <div className="auth-buttons">
              {app.load.loadingName === 'profile' && (
                <img className="loading" src={loading} alt="loading" />
              )}
              {!app.user.userData.id && (
                <>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => app.modal.setModalToShow('register')}
                  >
                    ثبت نام
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    onClick={() => app.modal.setModalToShow('login')}
                  >
                    ورود
                  </Button>
                </>
              )}
              {app.user.userData.id && (
                <div className="user-info">
                  <div className="hi">سلام {app.user.userData.first_name}!</div>
                  <a>
                    <Dropdown>
                      <Dropdown.Toggle variant="dropdown">
                        <img src={app.user.userData.image} alt="profile" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Link
                          className="dropdown-item"
                          to={'/profile?state=editProfile'}
                        >
                          پروفایل
                        </Link>
                        {/* <Link
                          className="dropdown-item"
                          to={'/profile?state=transactions'}
                        >
                          تراکنشات
                        </Link>
                        <Link
                          className="dropdown-item"
                          to={'/profile?state=courses'}
                        >
                          دوره‌ها
                        </Link> */}
                        <Link
                          className="dropdown-item"
                          to={'/profile?state=changePassword'}
                        >
                          تغییر رمز عبور
                        </Link>
                        <Dropdown.Item onClick={handleClickOnLogOut}>
                          خروج
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="special-offer-homepage">
        <SpecialOffer location={location} />
      </div>
      <AuthModals />
      <PaidModal />
    </>
  )
}

export default Header
