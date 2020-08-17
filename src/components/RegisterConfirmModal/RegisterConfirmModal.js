import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from "../Icon/loading.gif"
import confirmImage from './confirm.png'

const RegisterConfirmModal = ({
    showConfirmEmailModal,
    handleCloseConfirmEmailModal,
    isLoadingRegisterConfirmModal,
}) => {
    return (
        <Modal
            show={showConfirmEmailModal}
            onHide={handleCloseConfirmEmailModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className="btn-with-loading">
                        {isLoadingRegisterConfirmModal && (
                            <img className="loading" src={loading} />
                        )}
                        تایید ایمیل برای سایت احسان گازار
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="loading-modal">
                <div className="newsletter-body">
                    <img src={confirmImage} />
                    <div className="newsletter-body-form">
                        {isLoadingRegisterConfirmModal && (
                            <img className="loading" src={loading} />
                        )}
                        {!isLoadingRegisterConfirmModal && (
                            <Alert variant={"success"}>ایمیل شما با موفقیت فعال شد</Alert>
                        )}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default RegisterConfirmModal