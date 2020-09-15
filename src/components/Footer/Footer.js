import React, { useState, useEffect } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import reactBasicImage from './React-Basic.png'
import reactAdvancedImage from './React-Advanced.png'
import javaScriptImage from './../Footer/JavaScript.png'
import awsConceptsImage from './../Footer/AWS-Concepts.png'
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
            <div className="col-12 col-md-6 col-lg-4">
              <div className="col-12 col-md-6 col-lg-12">
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
              <div className="col-12 col-md-6 col-lg-12 space-up">
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
              <div className="col-12 col-md-6 col-lg-12 space-up">
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
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-col -feature-post">
                <div className="center-line-title">
                  <h5>دوره‌ها</h5>
                </div>
                <div className="feature-post-block">
                  <div className="post-card -tiny">
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
                      <p>
                        در طول این دوره یاد میگیرید که AWS چه نقش مهمی را در
                        کاریابی و پیاده‌سازی اپلیکیشن‌های مهم در شرکت‌های دنیا
                        دارد.
                      </p>
                    </div>
                  </div>
                  <div className="post-card -tiny">
                    <Link
                      className="card__cover"
                      to="/es6-es7-etc-babel-webpack-javascript-course"
                    >
                      <img src={javaScriptImage} alt="دوره React JS پیشرفته" />
                    </Link>
                    <div className="card__content">
                      <Link
                        className="card__content-link"
                        to="/es6-es7-etc-babel-webpack-javascript-course"
                      >
                        دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد
                      </Link>
                      <p>
                        در این دوره با تمامی ویژگی های جاوا اسکریپت ES6 به بعد
                        همراه با ابزارهای جدید آشنا می‌شوید
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="footer-col -feature-post">
                <div className="center-line-title"></div>
                <div className="feature-post-block">
                  <div className="post-card -tiny">
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
                      <p>
                        برای برنامه‌نویسی FrontEnd نیازمندید به صورت حرفه‌ای
                        React,Next JS, Webpack و تکنولوژی‌های دیگری مثل GraphQL
                        و Testing را بدانید که در این دوره می‌توانید یاد بگیرید
                      </p>
                    </div>
                  </div>
                  <div className="post-card -tiny">
                    <Link className="card__cover" to="/react-basic-course">
                      <img src={reactBasicImage} alt="دوره React JS مقدماتی" />
                    </Link>
                    <div className="card__content">
                      <Link
                        className="card__content-link"
                        to="/react-basic-course"
                      >
                        دوره React JS مقدماتی
                      </Link>
                      <p>
                        دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید
                        و یاد میگیرید با React وب‌سایت بنویسید
                      </p>
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
