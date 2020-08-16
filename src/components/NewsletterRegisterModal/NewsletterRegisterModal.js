import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from "../Icon/loading.gif"
import newsletterImage from "./newsletter.png"

const NewsletterRegisterModal = ({
    showNewsletterModal,
    email,
    handleCloseNewsletterModal,
    isLoadingNewsletterModalSubmit,
    handleSubmitRegisterNewsletter,
    handleChangeNewsletterEmail,
    responseOfApiRegisteringNewsletter,
}) => {
    return (
        <Modal show={showNewsletterModal} onHide={handleCloseNewsletterModal}>
            <Form
                onSubmit={
                    !isLoadingNewsletterModalSubmit
                        ? handleSubmitRegisterNewsletter
                        : null
                }
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="btn-with-loading">
                            {isLoadingNewsletterModalSubmit && (
                                <img className="loading" src={loading} alt="loading" />
                            )}
                            خبرنامه سایت احسان گازار
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="newsletter-body">
                        <img src={newsletterImage} alt="newsletter-image" />
                        <div className="newsletter-body-form">
                            {responseOfApiRegisteringNewsletter && (
                                <Alert variant={responseOfApiRegisteringNewsletter.type}>
                                    {responseOfApiRegisteringNewsletter.message}
                                </Alert>
                            )}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control
                                    onChange={handleChangeNewsletterEmail}
                                    type="email"
                                    value={email}
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
                        disabled={isLoadingNewsletterModalSubmit}
                    >
                        ثبت نام در خبرنامه
                     </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default NewsletterRegisterModal