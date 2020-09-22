import React, { useState, useEffect } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import reactBasicImage from './React-Basic.png'
import reactAdvancedImage from './React-Advanced.png'
import javaScriptImage from './../Footer/JavaScript.png'
import awsConceptsImage from './../Footer/AWS-Concepts.png'
import workImg from '../Footer/Work-Logo.png'
import { useQueryParam, StringParam } from 'use-query-params'
import { Link } from 'gatsby'
import { Button, Form, Alert } from 'react-bootstrap'
import NewsletterConfirmModal from '../NewsletterConfirmModal/NewsletterConfirmModal'
import NewsletterRegisterModal from '../NewsletterRegisterModal/NewsletterRegisterModal'
import fetchHandler from '../../utils/fetchHandler'

const Footer = ({ location }) => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const [showConfirmEmailModal, setShowConfirmEmailModal] = useState(false)
  const [email, setEmail] = useState('')
  const [
    isLoadingNewsletterModalSubmit,
    setLoadingNewsletterModalSubmit,
  ] = useState(false)
  const [
    isLoadingNewsletterConfirmModal,
    setIsLoadingNewsletterConfirmModal,
  ] = useState(false)
  const [
    responseOfApiRegisteringNewsletter,
    setResponseOfApiRegisteringNewsletter,
  ] = useState(null)
  const [newsletterEmailToken, setNewsletterEmailToken] = useQueryParam(
    'newsletterEmailToken',
    StringParam
  )
  const [modal, setModalToken] = useQueryParam('modal', StringParam)

  const handleCloseNewsletterModal = () => setShowNewsletterModal(false)
  const handleCloseConfirmEmailModal = () => setShowConfirmEmailModal(false)
  const handleChangeNewsletterEmail = (event) => setEmail(event.target.value)

  // useEffect(() => {
  //   if (!localStorage.getItem('newsletter')) {
  //     setTimeout(() => {
  //       setShowNewsletterModal(true)
  //     }, 10000)
  //   }
  // }, [])

  useEffect(() => {
    if (newsletterEmailToken) {
      handleConfirmEmail()
    }
  }, [])

  useEffect(() => {
    if (modal === 'newsletter') {
      setShowNewsletterModal(true)
    }
  }, [])

  const handleConfirmEmail = async () => {
    setIsLoadingNewsletterConfirmModal(true)
    setShowConfirmEmailModal(true)
    try {
      await fetchHandler({
        method: 'POST',
        url: '/api/v1/newsletter/validate',
        body: {
          security_hash: newsletterEmailToken,
        },
      })
    } catch (e) {
      console.error(e)
    }
    setIsLoadingNewsletterConfirmModal(false)
  }

  const handleSubmitRegisterNewsletter = async (event) => {
    if (event) event.preventDefault()
    setLoadingNewsletterModalSubmit(true)
    localStorage.setItem('newsletter', true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/newsletter/register',
        body: {
          email,
        },
      })
      if (result.data.success) {
        setResponseOfApiRegisteringNewsletter({
          type: 'success',
          message:
            'با تشکر، ایمیلی به شما ارسال شده است، لطفا آن‌را باز کنید و روی گزینه تایید ایمیل کلیک نمایید.',
        })
      } else {
        setResponseOfApiRegisteringNewsletter({
          type: 'danger',
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setLoadingNewsletterModalSubmit(false)
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="col-12">
                <div className="center-line-title">
                  <h5>اخبار و مقالات سایت را دنبال کنید</h5>
                </div>
                <div className="social-block">
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/ehsangazar"
                  >
                    <i className="fab fa-twitter"></i>
                  </OutboundLink>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://t.me/fa_ehsangazar_com"
                  >
                    <i className="fab fa-telegram"></i>
                  </OutboundLink>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/channel/UC-NKQJ0bsHTXS_PzYCSvVUQ"
                  >
                    <i className="fab fa-youtube"></i>
                  </OutboundLink>
                </div>
              </div>
              <div className="col-12 space-up">
                <div className="center-line-title">
                  <h5>عضویت در خبرنامه</h5>
                </div>
                <Form
                  onSubmit={
                    !isLoadingNewsletterModalSubmit
                      ? handleSubmitRegisterNewsletter
                      : null
                  }
                >
                  {responseOfApiRegisteringNewsletter && (
                    <Alert variant={responseOfApiRegisteringNewsletter.type}>
                      {responseOfApiRegisteringNewsletter.message}
                    </Alert>
                  )}
                  <div className="newsletter-form-footer">
                    <Form.Control
                      onChange={handleChangeNewsletterEmail}
                      type="email"
                      value={email}
                      placeholder="ایمیل خود را وارد نمایید"
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isLoadingNewsletterModalSubmit}
                    >
                      ثبت نام
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="col-12 space-up">
                <div className="center-line-title">
                  <h5>تماس با من</h5>
                </div>
                <p className="contact-method">
                  اگر می‌خواهید با من در ارتباط باشید پیامی به{` `}
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://t.me/ehsangazar"
                  >
                    تلگرام
                  </OutboundLink>{' '}
                  من، یا ایمیلی به me@ehsangazar.com بفرستید.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="col-12">
                <div className="footer-col -feature-post">
                  <div className="center-line-title">
                    <h5>دوره‌ها</h5>
                  </div>
                  <div className="feature-post-block d-flex flex-wrap">
                    <div className="col-12 post-card -tiny">
                      <Link
                        className="card__cover"
                        to="/find-a-programming-job-course"
                      >
                        <img
                          src={workImg}
                          alt="چطور وارد دنیای برنامه‌نویسی شویم و چطور پیشرفت کنیم؟"
                        />
                      </Link>
                      <div className="card__content">
                        <Link
                          className="card__content-link"
                          to="/find-a-programming-job-course"
                        >
                          چطور وارد دنیای برنامه‌نویسی شویم و چطور پیشرفت کنیم؟
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 post-card -tiny">
                      <Link
                        className="card__cover"
                        to="/amazon-web-services-concepts-course"
                      >
                        <img
                          src={awsConceptsImage}
                          alt="دوره آنلاین معرفی مفاهیم AWS"
                        />
                      </Link>
                      <div className="card__content">
                        <Link
                          className="card__content-link"
                          to="/amazon-web-services-concepts-course"
                        >
                          دوره آنلاین معرفی مفاهیم AWS
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 post-card -tiny">
                      <Link
                        className="card__cover"
                        to="/es6-es7-etc-babel-webpack-javascript-course"
                      >
                        <img
                          src={javaScriptImage}
                          alt="دوره React JS پیشرفته"
                        />
                      </Link>
                      <div className="card__content">
                        <Link
                          className="card__content-link"
                          to="/es6-es7-etc-babel-webpack-javascript-course"
                        >
                          دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 post-card -tiny">
                      <Link className="card__cover" to="/react-basic-course">
                        <img
                          src={reactBasicImage}
                          alt="دوره React JS مقدماتی"
                        />
                      </Link>
                      <div className="card__content">
                        <Link
                          className="card__content-link"
                          to="/react-basic-course"
                        >
                          دوره React JS مقدماتی
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 post-card -tiny">
                      <Link className="card__cover" to="/react-advanced-course">
                        <img
                          src={reactAdvancedImage}
                          alt="دوره React JS پیشرفته"
                        />
                      </Link>
                      <div className="card__content">
                        <Link
                          className="card__content-link"
                          to="/react-advanced-course"
                        >
                          دوره React JS پیشرفته
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Ehsan Gazar ©</p>
          <ul>
            <li>
              <Link to={'/'}>خانه</Link>
            </li>
            <li>
              <Link to="/about">درباره</Link>
            </li>
            <li>
              <Link to="/courses">دوره‌ها</Link>
            </li>
            <li>
              <Link to="/terms-conditions">قوانین و مقررات</Link>
            </li>
            <li>
              <Link to="/privacy-policy">حریم خصوصی</Link>
            </li>
          </ul>
        </div>

        <NewsletterRegisterModal
          email={email}
          showNewsletterModal={showNewsletterModal}
          handleCloseNewsletterModal={handleCloseNewsletterModal}
          isLoadingNewsletterModalSubmit={isLoadingNewsletterModalSubmit}
          handleChangeNewsletterEmail={handleChangeNewsletterEmail}
          handleSubmitRegisterNewsletter={handleSubmitRegisterNewsletter}
          responseOfApiRegisteringNewsletter={
            responseOfApiRegisteringNewsletter
          }
        />

        <NewsletterConfirmModal
          showConfirmEmailModal={showConfirmEmailModal}
          handleCloseConfirmEmailModal={handleCloseConfirmEmailModal}
          isLoadingNewsletterConfirmModal={isLoadingNewsletterConfirmModal}
        />
      </div>
    </footer>
  )
}

export default Footer
