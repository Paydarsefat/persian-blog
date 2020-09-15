import React, { useState, useContext } from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loadingImage from '../Icon/loading.gif'
import fetchHandler from '../../utils/fetchHandler'
import MyApp from '../../contexts/MyApp'
import CryptoJS from 'crypto-js'

const ReplyModal = ({
  showReplyModal,
  selectedComment,
  handleCloseReplyModal,
  getComments,
  uniquePath,
}) => {
  const app = useContext(MyApp)
  const [started, setStarted] = useState(false)
  const [formValue, setFormValue] = useState({})
  const [loading, setLoading] = useState(false)
  const [responseFromAPI, setResponseFromAPI] = useState(null)

  const handleChangeForm = (name, event) => {
    setStarted(true)
    if (event) event.preventDefault()
    setFormValue({
      ...formValue,
      [name]: event.target.value,
    })
  }

  const handleSend = async (event) => {
    if (event) event.preventDefault()
    setLoading(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/comment/add',
        body: {
          path: uniquePath,
          comment: formValue.comment,
          parentId: selectedComment.id,
        },
        auth: true,
      })
      if (result.data.success) {
        setResponseFromAPI({
          type: 'success',
          message: 'با تشکر، دیدگاه شما با موفقیت ثبت شد',
        })
        getComments()
        handleCloseReplyModal()
      } else {
        setResponseFromAPI({
          type: 'danger',
          message: 'خطایی رخ داده است',
        })
      }
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  if (!selectedComment) return <div />

  return (
    <Modal show={showReplyModal} onHide={handleCloseReplyModal}>
      <Form onSubmit={!loading ? handleSend : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">پاسخ</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="reply-body">
            <div className="reply-body-form">
              {responseFromAPI && (
                <Alert variant={responseFromAPI.type}>
                  {responseFromAPI.message}
                </Alert>
              )}
              <div>
                <div className="comment__item">
                  <div className="d-flex">
                    <div className="comment__item__avatar col-3">
                      <img
                        src={`https://www.gravatar.com/avatar/${CryptoJS.MD5(
                          selectedComment.user.email
                        )}.jpg`}
                        alt={`${selectedComment.user.first_name} ${selectedComment.user.last_name}`}
                      />
                    </div>

                    <div className="comment__item__content col-9">
                      <div className="comment__item__content__header">
                        <h5>
                          {selectedComment.user.first_name}{' '}
                          {selectedComment.user.last_name}
                        </h5>
                        <div className="data">
                          <p>
                            <i className="far fa-clock"></i>
                            {` `}
                            {new Date(
                              selectedComment.created_at
                            ).toLocaleDateString('fa-IR')}
                          </p>
                        </div>
                      </div>
                      <p>{selectedComment.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="d-flex">
                <Form.Group className="col-6">
                  <Form.Label>نام</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    value={`${app.user.userData.first_name} ${app.user.userData.last_name}`}
                  />
                </Form.Group>
                <Form.Group className="col-6">
                  <Form.Label>ایمیل</Form.Label>
                  <Form.Control
                    type="email"
                    disabled
                    value={app.user.userData.email}
                  />
                </Form.Group>
              </div>
              <Form.Group>
                <Form.Label>متن</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeForm('comment', event)}
                  as="textarea"
                  rows="6"
                />
                {started &&
                  (!formValue.comment || formValue.comment.length === 0) && (
                    <div className="textarea-alert">
                      متن نمی‌تواند خالی باشد
                    </div>
                  )}
              </Form.Group>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          {loading && (
            <img className="loading" src={loadingImage} alt="loading" />
          )}
          <Button variant="primary" type="submit" disabled={loading}>
            ارسال پاسخ
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ReplyModal
