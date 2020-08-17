import React, { useState, useEffect, useContext } from 'react'
import fetchHandler from '../../utils/fetchHandler'
import RegisterModal from '../RegisterModal/RegisterModal'
import { useQueryParam, StringParam } from "use-query-params"
import LoginModal from '../LoginModal/LoginModal'
import ForgotModal from '../ForgotModal/ForgotModal'
import ResetModal from '../ResetModal/ResetModal'
import RegisterConfirmModal from '../RegisterConfirmModal/RegisterConfirmModal'
import profileImage from './profile.png'
import loading from "../Icon/loading.gif"
import reactBasicImage from './../Footer/React-Basic.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'
import MyApp from '../../contexts/MyApp'

const Header = ({ page, location }) => {
  const app = useContext(MyApp);
  const [formRegisterValues, setFormRegisterValues] = useState({})
  const [formLoginValues, setFormLoginValues] = useState({})
  const [formForgotValues, setFormForgotValues] = useState({})
  const [formResetValues, setFormResetValues] = useState({})

  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showForgotModal, setShowForgotModal] = useState(false)
  const [showResetModal, setShowResetModal] = useState(false)
  const [showConfirmEmailModal, setShowConfirmEmailModal] = useState(false)

  const [isLoadingRegisterForm, setIsLoadingRegisterForm] = useState(false)
  const [isLoadingLoginForm, setIsLoadingLoginForm] = useState(false)
  const [isLoadingForgotForm, setIsLoadingForgotForm] = useState(false)
  const [isLoadingResetForm, setIsLoadingResetForm] = useState(false)
  const [isLoadingRegisterConfirmModal, setIsLoadingRegisterConfirmModal] = useState(false)
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)

  const [responseOfApiRegister, setResponseOfApiRegister] = useState(null)
  const [responseOfApiLogin, setResponseOfApiLogin] = useState(null)
  const [responseOfApiForgot, setResponseOfApiForgot] = useState(null)
  const [responseOfApiReset, setResponseOfApiReset] = useState(null)

  const [forgotEmailToken, setForgotEmailToken] = useQueryParam("forgotEmailToken", StringParam)
  const [registerEmailToken, setRegisterEmailToken] = useQueryParam("registerEmailToken", StringParam)


  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false)
  }
  const handleCloseLoginModal = () => {
    setShowLoginModal(false)
  }
  const handleCloseForgotModal = () => {
    setShowForgotModal(false)
  }
  const handleCloseResetModal = () => {
    setShowResetModal(false)
  }
  const handleCloseConfirmEmailModal = () => {
    setShowConfirmEmailModal(false)
  }

  const handleOpenLoginModal = () => {
    setShowLoginModal(true)
  }
  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true)
  }
  const handleOpenForgotModal = () => {
    setShowForgotModal(true)
  }
  const handleOpenResetModal = () => {
    setShowResetModal(true)
  }
  const handleOpenConfirmEmailModal = () => {
    setShowConfirmEmailModal(true)
  }

  const handleChangeRegisterForm = (name,event) => {
    if (event) event.preventDefault()
    setFormRegisterValues({
      ...formRegisterValues,
      [name]: event.target.value
    })
  }
  const handleChangeLoginForm = (name,event) => {
    if (event) event.preventDefault()
    setFormLoginValues({
      ...formLoginValues,
      [name]: event.target.value
    })
  }
  const handleChangeForgotForm = (name,event) => {
    if (event) event.preventDefault()
    setFormForgotValues({
      ...formForgotValues,
      [name]: event.target.value
    })
  }
  const handleChangeResetForm = (name,event) => {
    if (event) event.preventDefault()
    setFormResetValues({
      ...formResetValues,
      [name]: event.target.value
    })
  }


  const handleSubmitRegister = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingRegisterForm(true)

    try {
      const result = await fetchHandler({
        method: "POST",
        url: "/api/v1/user/register",
        body: {
          email: formRegisterValues.email,
          first_name: formRegisterValues.first_name,
          last_name: formRegisterValues.last_name,
          password: formRegisterValues.password,
        },
      })
      if (result.data.success) {
        localStorage.setItem('token',result.data.jwt.token)        
        setResponseOfApiRegister({
          type: "success",
          message:
            "با تشکر، ایمیلی به شما ارسال شده است، لطفا آن‌را باز کنید و روی گزینه تایید ایمیل کلیک نمایید.",
        })
        updateUser()
        setTimeout(() => {
          handleCloseRegisterModal()
        }, 2000);
      } else {
        setResponseOfApiRegister({
          type: "danger",
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingRegisterForm(false)
  }

  const handleSubmitLogin = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingLoginForm(true)
    try {
      const result = await fetchHandler({
        method: "POST",
        url: "/api/v1/user/login",
        body: {
          email: formLoginValues.email,
          password: formLoginValues.password,
        },
      })
      if (result.data.success) {
        localStorage.setItem('token', result.data.jwt.token)        
        setResponseOfApiLogin({
          type: "success",
          message:
            "شما با موفقیت وارد شده‌اید",
        })
        updateUser()
        setTimeout(() => {
          handleCloseLoginModal()
        }, 1000);
      } else {
        setResponseOfApiLogin({
          type: "danger",
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingLoginForm(false)
  }

  const handleSubmitForgot = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingForgotForm(true)

    try {
      const response = await fetchHandler({
        method: "POST",
        url: "/api/v1/user/forgot",
        body: {
          email: formForgotValues.email,
        },
      })
      setResponseOfApiForgot({
        type: "success",
        message:
          "دستور‌العمل بازیابی کلمه عبور به ایمیل شما ارسال شد.",
      })
      updateUser()
      setTimeout(() => {
        handleCloseForgotModal()
      }, 10000);
    } catch (e) {
      console.error(e)
    }
    setIsLoadingForgotForm(false)
  }

  const handleSubmitReset = async (event) => {
    if (event) event.preventDefault()
    if (formResetValues.password !== formResetValues['password-confirmation']){
      setResponseOfApiReset({
        type: "danger",
        message:
          "کلمه عبور و تکرار آن با هم مطابقت ندارند",
      })
      return
    }

    setIsLoadingResetForm(true)
    try {
      const result = await fetchHandler({
        method: "POST",
        url: "/api/v1/user/reset",
        body: {
          password: formResetValues.password,
          security_hash: forgotEmailToken,
        },
      })
      if (result.data.success) {
        setResponseOfApiReset({
          type: "success",
          message:
            "با تشکر، شما با موفقیت کلمه عبور را تغییر دادید",
        })
        updateUser()
        setTimeout(() => {
          handleCloseResetModal()
        }, 10000);
      } else {
        setResponseOfApiReset({
          type: "danger",
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingResetForm(false)
  }

  const handleSubmitConfirmEmail = async () => {
    setIsLoadingRegisterConfirmModal(true)
    try {
      await fetchHandler({
        method: "POST",
        url: "/api/v1/user/confirm",
        body: {
          security_hash: registerEmailToken,
        },
      })
      updateUser()
    } catch (e) {
      console.error(e)
    }
    setIsLoadingRegisterConfirmModal(false)
  }

  useEffect(() => {
    if (forgotEmailToken) {
      handleOpenResetModal()
      resetUrl()
    }
  }, [])

  useEffect(() => {
    if (registerEmailToken) {
      handleOpenConfirmEmailModal()
      handleSubmitConfirmEmail()
      resetUrl()
    }
  }, [])

  useEffect(() => {
    console.log('app.user', app.user)
    updateUser()
  }, [])


  const updateUser = async () => {
    if (!localStorage.getItem('token')) return
    if (app.user.userData.id) return

    setIsLoadingProfile(true)
    try {
      const result = await fetchHandler({
        method: "GET",
        url: "/api/v1/user/profile",
        auth:true
      })
      app.user.setUserData(result.data.user)
    } catch (e) {
      console.error(e)
    }
    setIsLoadingProfile(false)
  }

  const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, null, '/')
    }, 2000);
  };

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
                  className={`nav-item ${page === "homepage" ? "active" : ""}`}
                >
                  <Link to={"/"}>خانه</Link>
                </li>
                <li className={`nav-item ${page === "about" ? "active" : ""}`}>
                  <Link to="/about">درباره</Link>
                </li>
              </ul>
            </nav>
            <div className="auth-buttons">
              {isLoadingProfile && (
                <img className="loading" src={loading} alt="loading" />
              )}
              {!app.user.userData.id &&
                <>      
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleOpenRegisterModal}
                  >
                    ثبت نام
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    onClick={handleOpenLoginModal}
                  >
                    ورود
                  </Button>
                </>
              }
              {app.user.userData.id &&
                <div>      
                  سلام {app.user.userData.first_name}!
                  <a>
                    <img src={app.user.userData.image} alt="profile" />
                  </a>
                </div>
              }
            </div>
          </div>
        </div>
      </header>
      <div className="special">
        <div class="alert alert-info widthAll">
          به مناسبت بازگشایی وب‌سایت تخفیف ۴۰ درصدی روی دو دوره مقدماتی و
          پیشرفته تا ۵ شهریور
        </div>
      </div>
      {!location.pathname.includes("-course") && (
        <div className="courses">
          <div className="courses-single">
            <Link className="courses-link" to="/react-basic-course">
              <img src={reactBasicImage} alt="دوره React JS مقدماتی" />
            </Link>
            <div className="courses-content">
              <Link className="courses-content-title" to="/react-basic-course">
                دوره React JS مقدماتی
              </Link>
              <p>
                دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید و یاد
                میگیرید با React وب‌سایت بنویسید
              </p>
              <span className="courses-content-price">
                <strike>870,000</strike>
                522,000 تومان
              </span>
            </div>
          </div>
          <div className="courses-single">
            <Link className="courses-link" to="/react-advanced-course">
              <img src={reactAdvancedImage} alt="دوره React JS پیشرفته" />
            </Link>
            <div className="courses-content">
              <Link
                className="courses-content-title"
                to="/react-advanced-course"
              >
                دوره React JS پیشرفته
              </Link>
              <p>
                در این دوره یاد میگیرید چطور با Webpack, GraphQL, NextJs, Gatsby
                و غیره یک سایت حرفه‌ای بنویسید
              </p>
              <span className="courses-content-price">
                <strike>2,480,000</strike>
                1,488,000 تومان
              </span>
            </div>
          </div>
        </div>
      )}
      <RegisterModal 
        showRegisterModal={showRegisterModal}
        formRegisterValues={formRegisterValues}
        handleCloseRegisterModal={handleCloseRegisterModal}
        isLoadingRegisterForm={isLoadingRegisterForm}
        handleSubmitRegister={handleSubmitRegister}
        handleChangeRegisterForm={handleChangeRegisterForm}
        responseOfApiRegister={responseOfApiRegister}
      />
      <LoginModal 
        showLoginModal={showLoginModal}
        formLoginValues={formLoginValues}
        handleCloseLoginModal={handleCloseLoginModal}
        isLoadingLoginForm={isLoadingLoginForm}
        handleSubmitLogin={handleSubmitLogin}
        handleChangeLoginForm={handleChangeLoginForm}
        responseOfApiLogin={responseOfApiLogin}
        handleOpenForgotModal={handleOpenForgotModal}
      />
      <ForgotModal 
        showForgotModal={showForgotModal}
        formForgotValues={formForgotValues}
        handleCloseForgotModal={handleCloseForgotModal}
        isLoadingForgotForm={isLoadingForgotForm}
        handleSubmitForgot={handleSubmitForgot}
        handleChangeForgotForm={handleChangeForgotForm}
        responseOfApiForgot={responseOfApiForgot}
      />
      <ResetModal 
        showResetModal={showResetModal}
        formResetValues={formResetValues}
        handleCloseResetModal={handleCloseResetModal}
        isLoadingResetForm={isLoadingResetForm}
        handleSubmitReset={handleSubmitReset}
        handleChangeResetForm={handleChangeResetForm}
        responseOfApiReset={responseOfApiReset}
      />
      <RegisterConfirmModal 
        showConfirmEmailModal={showConfirmEmailModal}
        handleCloseConfirmEmailModal={handleCloseConfirmEmailModal}
        isLoadingRegisterConfirmModal={isLoadingRegisterConfirmModal}
      />
    </>
  )
}

export default Header 