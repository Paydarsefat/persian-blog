import React, { useContext, useState, useEffect } from 'react'
import fetchHandler from '../../utils/fetchHandler'

import MyApp from '../../contexts/MyApp'
import { useQueryParam, StringParam } from 'use-query-params'

import RegisterModal from '../RegisterModal/RegisterModal'
import LoginModal from '../LoginModal/LoginModal'
import BuyModal from '../BuyModal/BuyModal'
import ForgotModal from '../ForgotModal/ForgotModal'
import ResetModal from '../ResetModal/ResetModal'
import RegisterConfirmModal from '../RegisterConfirmModal/RegisterConfirmModal'

const AuthModals = () => {
  const app = useContext(MyApp)

  const [formRegisterValues, setFormRegisterValues] = useState({})
  const [formLoginValues, setFormLoginValues] = useState({})
  const [formForgotValues, setFormForgotValues] = useState({})
  const [formResetValues, setFormResetValues] = useState({})

  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showForgotModal, setShowForgotModal] = useState(false)
  const [showResetModal, setShowResetModal] = useState(false)
  const [showConfirmEmailModal, setShowConfirmEmailModal] = useState(false)
  const [showBuyModal, setShowBuyModal] = useState(false)

  const [isLoadingRegisterForm, setIsLoadingRegisterForm] = useState(false)
  const [isLoadingLoginForm, setIsLoadingLoginForm] = useState(false)
  const [isLoadingForgotForm, setIsLoadingForgotForm] = useState(false)
  const [isLoadingResetForm, setIsLoadingResetForm] = useState(false)
  const [isLoadingBuyModal, setIsLoadingBuyModal] = useState(false)
  const [
    isLoadingRegisterConfirmModal,
    setIsLoadingRegisterConfirmModal,
  ] = useState(false)

  const [responseOfApiRegister, setResponseOfApiRegister] = useState(null)
  const [responseOfApiLogin, setResponseOfApiLogin] = useState(null)
  const [responseOfApiForgot, setResponseOfApiForgot] = useState(null)
  const [responseOfApiReset, setResponseOfApiReset] = useState(null)

  const [forgotEmailToken, setForgotEmailToken] = useQueryParam(
    'forgotEmailToken',
    StringParam
  )
  const [registerEmailToken, setRegisterEmailToken] = useQueryParam(
    'registerEmailToken',
    StringParam
  )

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
  const handleCloseBuyModal = () => {
    setShowBuyModal(false)
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
  const handleOpenBuyModal = () => {
    setShowBuyModal(true)
  }

  const handleChangeRegisterForm = (name, event) => {
    if (event) event.preventDefault()
    setFormRegisterValues({
      ...formRegisterValues,
      [name]: event.target.value,
    })
  }
  const handleChangeLoginForm = (name, event) => {
    if (event) event.preventDefault()
    setFormLoginValues({
      ...formLoginValues,
      [name]: event.target.value,
    })
  }
  const handleChangeForgotForm = (name, event) => {
    if (event) event.preventDefault()
    setFormForgotValues({
      ...formForgotValues,
      [name]: event.target.value,
    })
  }
  const handleChangeResetForm = (name, event) => {
    if (event) event.preventDefault()
    setFormResetValues({
      ...formResetValues,
      [name]: event.target.value,
    })
  }

  const handleSubmitRegister = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingRegisterForm(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/register',
        body: {
          email: formRegisterValues.email,
          first_name: formRegisterValues.first_name,
          last_name: formRegisterValues.last_name,
          password: formRegisterValues.password,
        },
      })
      if (result.data.success) {
        localStorage.setItem('token', result.data.jwt.token)
        setResponseOfApiRegister({
          type: 'success',
          message:
            'با تشکر، ایمیلی به شما ارسال شده است، لطفا آن‌را باز کنید و روی گزینه تایید ایمیل کلیک نمایید.',
        })
        app.user.updateUser()
        setTimeout(() => {
          handleCloseRegisterModal()
        }, 2000)
      } else {
        setResponseOfApiRegister({
          type: 'danger',
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
        method: 'POST',
        url: '/api/v1/user/login',
        body: {
          email: formLoginValues.email,
          password: formLoginValues.password,
        },
      })
      if (result.data.success) {
        localStorage.setItem('token', result.data.jwt.token)
        setResponseOfApiLogin({
          type: 'success',
          message: 'شما با موفقیت وارد شده‌اید',
        })
        app.user.updateUser()
        setTimeout(() => {
          handleCloseLoginModal()
        }, 1000)
      } else {
        setResponseOfApiLogin({
          type: 'danger',
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
        method: 'POST',
        url: '/api/v1/user/forgot',
        body: {
          email: formForgotValues.email,
        },
      })
      setResponseOfApiForgot({
        type: 'success',
        message: 'دستور‌العمل بازیابی کلمه عبور به ایمیل شما ارسال شد.',
      })
      app.user.updateUser()
      setTimeout(() => {
        handleCloseForgotModal()
      }, 10000)
    } catch (e) {
      console.error(e)
    }
    setIsLoadingForgotForm(false)
  }

  const handleSubmitReset = async (event) => {
    if (event) event.preventDefault()
    if (formResetValues.password !== formResetValues['password-confirmation']) {
      setResponseOfApiReset({
        type: 'danger',
        message: 'کلمه عبور و تکرار آن با هم مطابقت ندارند',
      })
      return
    }

    setIsLoadingResetForm(true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/reset',
        body: {
          password: formResetValues.password,
          security_hash: forgotEmailToken,
        },
      })
      if (result.data.success) {
        setResponseOfApiReset({
          type: 'success',
          message: 'با تشکر، شما با موفقیت کلمه عبور را تغییر دادید',
        })
        app.user.updateUser()
        setTimeout(() => {
          handleCloseResetModal()
        }, 10000)
      } else {
        setResponseOfApiReset({
          type: 'danger',
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
        method: 'POST',
        url: '/api/v1/user/confirm',
        body: {
          security_hash: registerEmailToken,
        },
      })
      app.user.updateUser()
    } catch (e) {
      console.error(e)
    }
    setIsLoadingRegisterConfirmModal(false)
  }

  const logout = () => {
    app.user.setUserData({})
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
    app.user.updateUser()
  }, [])

  useEffect(() => {
    if (app.modal.modalToShow === 'register') {
      handleOpenRegisterModal()
    }
    if (app.modal.modalToShow === 'login') {
      handleOpenLoginModal()
    }
    if (app.modal.modalToShow === 'buyModal') {
      handleOpenBuyModal()
    }
    setTimeout(() => {
      app.modal.setModalToShow(null)
    }, 2000)
  }, [app.modal.modalToShow])

  const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, null, '/')
    }, 2000)
  }

  return (
    <>
      <RegisterModal
        showRegisterModal={showRegisterModal}
        formRegisterValues={formRegisterValues}
        isLoadingRegisterForm={isLoadingRegisterForm}
        handleSubmitRegister={handleSubmitRegister}
        handleChangeRegisterForm={handleChangeRegisterForm}
        responseOfApiRegister={responseOfApiRegister}
        handleOpenLoginModal={handleOpenLoginModal}
        handleCloseRegisterModal={handleCloseRegisterModal}
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
      <BuyModal
        showBuyModal={showBuyModal}
        handleCloseBuyModal={handleCloseBuyModal}
        isLoadingBuyModal={isLoadingBuyModal}
      />
    </>
  )
}

export default AuthModals
