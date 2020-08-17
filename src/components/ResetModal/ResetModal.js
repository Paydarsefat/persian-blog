import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from "../Icon/loading.gif"
import resetImage from "./reset.png"

const ResetModal = ({
    showResetModal,
    formResetValues,
    handleCloseResetModal,
    isLoadingResetForm,
    handleSubmitReset,
    handleChangeResetForm,
    responseOfApiReset,
}) => {
    return (
        <Modal show={showResetModal} onHide={handleCloseResetModal}>
            <Form
                onSubmit={
                    !isLoadingResetForm
                        ? handleSubmitReset
                        : null
                }
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="btn-with-loading">
                            {isLoadingResetForm && (
                                <img className="loading" src={loading} alt="loading" />
                            )}
                            تغییر کلمه عبور در سایت احسان گازار
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="register-body">
                        <img src={resetImage} alt="login-image" />
                        <div className="register-body-form">
                            {responseOfApiReset && (
                                <Alert variant={responseOfApiReset.type}>
                                    {responseOfApiReset.message}
                                </Alert>
                            )}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>کلمه عبور</Form.Label>
                                <Form.Control
                                    onChange={(event) => handleChangeResetForm('password',event)}
                                    type="password"
                                    value={formResetValues.passowrd}
                                    placeholder="کلمه‌عبور خود را وارد نمایید"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>تکرار کلمه عبور</Form.Label>
                                <Form.Control
                                    onChange={(event) => handleChangeResetForm('password-confirmation',event)}
                                    type="password"
                                    value={formResetValues['password-confirmation']}
                                    placeholder="کلمه‌عبور خود را وارد نمایید"
                                />
                            </Form.Group>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isLoadingResetForm}
                    >
                        تغییر کلمه عبور
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ResetModal