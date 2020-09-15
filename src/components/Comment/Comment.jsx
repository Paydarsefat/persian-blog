import React from 'react'
import { useEffect, useState, useContext } from 'react'
import fetchHandler from '../../utils/fetchHandler'
import MyApp from '../../contexts/MyApp'
import CryptoJS from 'crypto-js'
import profileImg from '../Header/profile.png'
import loadingImage from '../Icon/loading.gif'
import ReplyModal from '../ReplyModal/ReplyModal'
import { Alert, Form, Button } from 'react-bootstrap'

const Comment = ({ uniquePath }) => {
  const [loading, setLoading] = useState(false)
  const [showReplyModal, setShowReplyModal] = useState(false)
  const [selectedComment, setSelectedComment] = useState(null)
  const [started, setStarted] = useState(false)
  const [disabledForm, setDisabledForm] = useState(true)
  const [responseFromAPI, setResponseFromAPI] = useState(null)
  const [formValue, setFormValue] = useState({})
  const app = useContext(MyApp)
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments()
  }, [])

  const handleChangeForm = (name, event) => {
    setStarted(true)
    if (event) event.preventDefault()
    setFormValue({
      ...formValue,
      [name]: event.target.value,
    })
    if (event.target.value.length > 0) {
      setDisabledForm(false)
    }
  }

  const handleRegister = () => {
    app.modal.setModalToShow('register')
  }

  const handleOpenReply = (comment) => {
    setSelectedComment(comment)
    setShowReplyModal(true)
  }

  const handleCloseReplyModal = () => {
    setSelectedComment(null)
    setShowReplyModal(false)
  }

  const getComments = async () => {
    const response = await fetchHandler({
      method: 'POST',
      url: '/api/v1/comment/list',
      auth: true,
      body: {
        path: uniquePath,
      },
    })
    setComments(response.data.result)
  }

  const handleSend = async (event) => {
    if (event) event.preventDefault()
    if (disabledForm) return
    setLoading(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/comment/add',
        body: {
          path: uniquePath,
          comment: formValue.comment,
        },
        auth: true,
      })
      if (result.data.success) {
        setResponseFromAPI({
          type: 'success',
          message: 'با تشکر، دیدگاه شما با موفقیت ثبت شد',
        })
        getComments()
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

  const admin = app.user.userData.id === 'b7a654d0-e078-11ea-bf92-2db818a04e2b'

  return (
    <div>
      <div className="post-footer__comment">
        {!comments ||
          (comments.length === 0 && (
            <Alert variant={'light'}>
              هنوز دیدگاهی ثبت نشده است. اولین نفر باشید
            </Alert>
          ))}
        {comments && comments.length > 0 && (
          <>
            <h3 className="comment-title">
              {' '}
              <span>{comments.length} دیدگاه</span>
            </h3>
            <div className="post-footer__comment__detail">
              {comments.map((comment) => (
                <div className="comment__item">
                  <div className="d-flex">
                    <div className="comment__item__avatar">
                      <img
                        src={`https://www.gravatar.com/avatar/${CryptoJS.MD5(
                          comment.user.email
                        )}.jpg`}
                        alt={`${comment.user.first_name} ${comment.user.last_name}`}
                      />
                    </div>

                    <div className="comment__item__content">
                      <div className="comment__item__content__header">
                        <h5>
                          {comment.user.first_name} {comment.user.last_name}
                        </h5>
                        <div className="data">
                          <p>
                            <i className="far fa-clock"></i>
                            {new Date(comment.created_at).toLocaleDateString(
                              'fa-IR'
                            )}
                          </p>
                        </div>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                  {admin && (
                    <div className="admin-button-comment">
                      <Button onClick={() => handleOpenReply(comment)}>
                        پاسخ
                      </Button>
                    </div>
                  )}

                  {comment.replies &&
                    comment.replies.map((reply) => (
                      <div className="comment__item__reply">
                        <div className="comment__item d-flex">
                          <div className="comment__item__avatar">
                            <img src={profileImg} alt="احسان گازار" />
                          </div>
                          <div className="comment__item__content">
                            <div className="comment__item__content__header">
                              <h5>احسان گازار</h5>
                              <div className="data">
                                <p>
                                  <i className="far fa-clock"></i>
                                  {new Date(
                                    reply.created_at
                                  ).toLocaleDateString('fa-IR')}
                                </p>
                              </div>
                            </div>
                            <p>{reply.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </>
        )}
        <h3 className="comment-title">
          {' '}
          <span>ثبت دیدگاه</span>
        </h3>
        <div className="post-footer__comment__form">
          <Form
            onSubmit={
              !loading && app.user.userData.id && !disabledForm
                ? handleSend
                : null
            }
          >
            {app.user.userData.id && (
              <>
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

                <div>
                  {loading && (
                    <img className="loading" src={loadingImage} alt="loading" />
                  )}
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={
                      loading || disabledForm || formValue.comment.length === 0
                    }
                  >
                    ارسال دیدگاه
                  </Button>
                </div>
              </>
            )}
            {!app.user.userData.id && (
              <div>
                <Alert variant={'warning'}>
                  برای ثبت دیدگاه می‌بایست عضو شده و وارد سایت شوید
                </Alert>
                <Button variant="primary" onClick={handleRegister}>
                  ثبت‌نام در وب‌سایت
                </Button>
              </div>
            )}
            <br />
            {responseFromAPI && (
              <Alert variant={responseFromAPI.type}>
                {responseFromAPI.message}
              </Alert>
            )}
          </Form>
        </div>
      </div>
      {admin && selectedComment && (
        <ReplyModal
          showReplyModal={showReplyModal}
          uniquePath={uniquePath}
          selectedComment={selectedComment}
          getComments={getComments}
          handleCloseReplyModal={handleCloseReplyModal}
        />
      )}
    </div>
  )
}

export default Comment
