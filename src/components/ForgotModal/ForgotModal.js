import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from "../Icon/loading.gif"
import forgotImage from "./forgot.png"

const ForgotModal = ({
    showForgotModal,
    formForgotValues,
    handleCloseForgotModal,
    isLoadingForgotForm,
    handleSubmitForgot,
    handleChangeForgotForm,
    responseOfApiForgot,
}) => {
    return (
        <Modal show={showForgotModal} onHide={handleCloseForgotModal}>
            <Form
                onSubmit={
                    !isLoadingForgotForm
                        ? handleSubmitForgot
                        : null
                }
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="btn-with-loading">
                            {isLoadingForgotForm && (
                                <img className="loading" src={loading} alt="loading" />
                            )}
                            فراموشی کلمه عبور در سایت احسان گازار
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="register-body">
                        <img src={forgotImage} alt="login-image" />
                        <div className="register-body-form">
                            {responseOfApiForgot && (
                                <Alert variant={responseOfApiForgot.type}>
                                    {responseOfApiForgot.message}
                                </Alert>
                            )}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control
                                    onChange={(event) => handleChangeForgotForm('email',event)}
                                    type="email"
                                    value={formForgotValues.email}
                                    placeholder="ایمیل خود را وارد نمایید"
                                />
                            </Form.Group>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isLoadingForgotForm}
                    >
                        ارسال درخواست
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ForgotModal