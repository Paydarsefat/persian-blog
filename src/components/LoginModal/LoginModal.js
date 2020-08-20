import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import loginImage from './login.png'

const LoginModal = ({
  showLoginModal,
  formLoginValues,
  handleCloseLoginModal,
  isLoadingLoginForm,
  handleSubmitLogin,
  handleChangeLoginForm,
  responseOfApiLogin,
  handleOpenForgotModal,
}) => {
  return (
    <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
      <Form onSubmit={!isLoadingLoginForm ? handleSubmitLogin : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">
              {isLoadingLoginForm && (
                <img className="loading" src={loading} alt="loading" />
              )}
              ورود در سایت احسان گازار
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-body">
            <img src={loginImage} alt="login-image" />
            <div className="register-body-form">
              {responseOfApiLogin && (
                <Alert variant={responseOfApiLogin.type}>
                  {responseOfApiLogin.message}
                </Alert>
              )}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>ایمیل</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeLoginForm('email', event)}
                  type="email"
                  value={formLoginValues.email}
                  placeholder="ایمیل خود را وارد نمایید"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>کلمه عبور</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeLoginForm('password', event)}
                  type="password"
                  value={formLoginValues.password}
                  placeholder="کلمه‌عبور خود را وارد نمایید"
                />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a
            className="link"
            onClick={() => {
              handleOpenForgotModal()
              handleCloseLoginModal()
            }}
          >
            فراموشی کلمه عبور
          </a>
          <Button variant="primary" type="submit" disabled={isLoadingLoginForm}>
            ورود
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default LoginModal
