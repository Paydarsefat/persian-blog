import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import registerImage from './register.png'

const RegisterModal = ({
  showRegisterModal,
  formRegisterValues,
  isLoadingRegisterForm,
  handleSubmitRegister,
  handleChangeRegisterForm,
  handleOpenLoginModal,
  responseOfApiRegister,
  handleCloseRegisterModal,
}) => {
  return (
    <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
      <Form onSubmit={!isLoadingRegisterForm ? handleSubmitRegister : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">
              {isLoadingRegisterForm && (
                <img className="loading" src={loading} alt="loading" />
              )}
              ثبت نام در سایت احسان گازار
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-body">
            <img src={registerImage} alt="register-image" />
            <div className="register-body-form">
              {responseOfApiRegister && (
                <Alert variant={responseOfApiRegister.type}>
                  {responseOfApiRegister.message}
                </Alert>
              )}
              <Form.Group controlId="formBasicText">
                <Form.Label>نام</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('first_name', event)
                  }
                  type="text"
                  value={formRegisterValues.first_name}
                  placeholder="نام خود را وارد نمایید"
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('last_name', event)
                  }
                  type="text"
                  value={formRegisterValues.last_name}
                  placeholder="نام خانوادگی خود را وارد نمایید"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>ایمیل</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeRegisterForm('email', event)}
                  type="email"
                  value={formRegisterValues.email}
                  placeholder="ایمیل خود را وارد نمایید"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>کلمه عبور</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('password', event)
                  }
                  type="password"
                  value={formRegisterValues.password}
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
              handleCloseRegisterModal()
              handleOpenLoginModal()
            }}
          >
            وارد شوید
          </a>
          <Button
            variant="primary"
            type="submit"
            disabled={isLoadingRegisterForm}
          >
            ثبت نام
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default RegisterModal
