import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from "../Icon/loading.gif"
import newsletterImage from './newsletter.png'

const NewsletterConfirmModal = ({
    showConfirmEmailModal,
    handleCloseConfirmEmailModal,
    isLoadingNewsletterConfirmModal,
}) => {
    return (
        <Modal
            show={showConfirmEmailModal}
            onHide={handleCloseConfirmEmailModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className="btn-with-loading">
                        {isLoadingNewsletterConfirmModal && (
                            <img className="loading" src={loading} />
                        )}
                        خبرنامه سایت احسان گازار
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="loading-modal">
                <div className="newsletter-body">
                    <img src={newsletterImage} />
                    <div className="newsletter-body-form">
                        {isLoadingNewsletterConfirmModal && (
                            <img className="loading" src={loading} />
                        )}
                        {!isLoadingNewsletterConfirmModal && (
                            <Alert variant={"success"}>ایمیل شما با موفقیت فعال شد</Alert>
                        )}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default NewsletterConfirmModal