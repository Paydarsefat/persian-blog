import React, { useState, useContext, useEffect } from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loadingImage from '../Icon/loading.gif'
import fetchHandler from '../../utils/fetchHandler'
import MyApp from '../../contexts/MyApp'
import testimonialImg from './testimonial.png'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useQueryParam, StringParam } from 'use-query-params'

const TestimonialModal = ({
  showTestimonialModal,
  setShowTestimonialModal,
}) => {
  const app = useContext(MyApp)
  const [started, setStarted] = useState(false)
  const [formValue, setFormValue] = useState({})
  const [loading, setLoading] = useState(false)
  const [responseFromAPI, setResponseFromAPI] = useState(null)
  const [testimonial, setTestimonial] = useQueryParam(
    'testimonial',
    StringParam
  )

  const handleChangeForm = (name, event) => {
    if (event) event.preventDefault()
    setFormValue({
      ...formValue,
      [name]: event.target.value,
    })
  }
  const handleRate = (event, rate) => {
    if (event) event.preventDefault()
    setFormValue({
      ...formValue,
      rate,
    })
  }

  useEffect(() => {
    if (testimonial) {
      if (app.user.userData.id) {
        setShowTestimonialModal(true)
        setTimeout(() => {
          resetUrl()
        }, 100)
      }
    }
  }, [testimonial, app.user.userData.id])

  const handleCloseTestimonialModal = () => {
    setShowTestimonialModal(false)
  }

  const handleSend = async (event) => {
    if (event) event.preventDefault()
    setStarted(true)
    if (!formValue.content || !formValue.rate || !formValue.course) return
    setLoading(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/testimonial/add',
        body: {
          content: formValue.content,
          course: formValue.course,
          rate: formValue.rate,
        },
        auth: true,
      })
      if (result.data.success) {
        setResponseFromAPI({
          type: 'success',
          message: 'با تشکر، توصیه‌نامه شما با موفقیت ثبت شد',
        })
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

  const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, null, '/')
    }, 2000)
  }

  return (
    <Modal show={showTestimonialModal} onHide={handleCloseTestimonialModal}>
      <Form onSubmit={!loading ? handleSend : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">ثبت توصیه‌نامه</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="testimonial-body">
            <div className="testimonial-body-form">
              <div className="imageContainer">
                <img className="image" src={testimonialImg} />
              </div>
              {responseFromAPI && (
                <Alert variant={responseFromAPI.type}>
                  {responseFromAPI.message}
                </Alert>
              )}
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
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>دوره</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) => handleChangeForm('course', event)}
                >
                  <option value="">لطفا دوره‌تان را انتخاب کنید</option>
                  <option value="react-advanced">
                    دوره آنلاین React JS پیشرفته
                  </option>
                  <option value="react-basic">
                    دوره آنلاین React JS مقدماتی
                  </option>
                  <option value="javascript">
                    دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد
                  </option>
                  <option value="aws-concepts">
                    دوره آنلاین معرفی مفاهیم AWS یا Amazon Web Services
                  </option>
                </Form.Control>
                {started && !formValue.course && (
                  <div className="textarea-alert">
                    لطفا یک دوره را انتخاب کنید
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>امتیاز</Form.Label>
                <div className="stars">
                  <span>بسیار عالی</span>

                  <button
                    onClick={(event) => handleRate(event, 5)}
                    className={formValue.rate === 5 && 'selected'}
                  >
                    <div className="outline">
                      <AiOutlineStar />
                    </div>
                    <div className="fill">
                      <AiFillStar />
                    </div>
                  </button>
                  <button
                    onClick={(event) => handleRate(event, 4)}
                    className={formValue.rate === 4 && 'selected'}
                  >
                    <div className="outline">
                      <AiOutlineStar />
                    </div>
                    <div className="fill">
                      <AiFillStar />
                    </div>
                  </button>
                  <button
                    onClick={(event) => handleRate(event, 3)}
                    className={formValue.rate === 3 && 'selected'}
                  >
                    <div className="outline">
                      <AiOutlineStar />
                    </div>
                    <div className="fill">
                      <AiFillStar />
                    </div>
                  </button>
                  <button
                    onClick={(event) => handleRate(event, 2)}
                    className={formValue.rate === 2 && 'selected'}
                  >
                    <div className="outline">
                      <AiOutlineStar />
                    </div>
                    <div className="fill">
                      <AiFillStar />
                    </div>
                  </button>
                  <button
                    onClick={(event) => handleRate(event, 1)}
                    className={formValue.rate === 1 && 'selected'}
                  >
                    <div className="outline">
                      <AiOutlineStar />
                    </div>
                    <div className="fill">
                      <AiFillStar />
                    </div>
                  </button>
                  <span>ضعیف</span>
                </div>
                {started && !formValue.rate && (
                  <div className="textarea-alert">لطفا امتیاز بدهید</div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>متن توصیه نامه‌</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeForm('content', event)}
                  as="textarea"
                  rows="6"
                />
                {started &&
                  (!formValue.content || formValue.content.length === 0) && (
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

          <Button variant="success" type="submit" disabled={loading}>
            ارسال متن
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TestimonialModal
