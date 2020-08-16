import React, { useState, useEffect } from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import reactBasicImage from './React-Basic.png'
import reactAdvancedImage from './React-Advanced.png'
import { useQueryParam, StringParam } from "use-query-params"
import { Link } from 'gatsby'
import { Button, Form, Alert } from "react-bootstrap"
import NewsletterConfirmModal from '../NewsletterConfirmModal/NewsletterConfirmModal'
import NewsletterRegisterModal from '../NewsletterRegisterModal/NewsletterRegisterModal'
import fetchHandler from "../../utils/fetchHandler"

const Footer = ({ location }) => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const [showConfirmEmailModal, setShowConfirmEmailModal] = useState(false)
  const [email, setEmail] = useState("")
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
  const [emailToken, setEmailToken] = useQueryParam("emailToken", StringParam)
  const [modal, setModalToken] = useQueryParam("modal", StringParam)

  const handleCloseNewsletterModal = () => setShowNewsletterModal(false)
  const handleCloseConfirmEmailModal = () => setShowConfirmEmailModal(false)
  const handleChangeNewsletterEmail = event => setEmail(event.target.value)

  useEffect(() => {
    if (!localStorage.getItem("newsletter")) {
      setTimeout(() => {
        setShowNewsletterModal(true)
      }, 10000)
    }
  }, [])

  useEffect(() => {
    if (emailToken){
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
        method: "POST",
        url: "/api/v1/newsletter/validate",
        body: {
          security_hash: emailToken,
        },
      })
    } catch (e) {
      console.error(e)
    }
    setIsLoadingNewsletterConfirmModal(false)
  }

  const handleSubmitRegisterNewsletter = async event => {
    if (event) event.preventDefault()
    setLoadingNewsletterModalSubmit(true)
    localStorage.setItem("newsletter", true)
    try {
      const result = await fetchHandler({
        method: "POST",
        url: "/api/v1/newsletter/register",
        body: {
          email,
        },
      })
      if (result.data.success) {
        setResponseOfApiRegisteringNewsletter({
          type: "success",
          message:
            "با تشکر، ایمیلی به شما ارسال شده است، لطفا آن‌را باز کنید و روی گزینه تایید ایمیل کلیک نمایید.",
        })
      } else {
        setResponseOfApiRegisteringNewsletter({
          type: "danger",
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
              <div className="footer-col -about">
                <div className="center-line-title">
                  <h5>درباره من</h5>
                </div>
                <p>
                  احسان گازار هستم، از ۱۷ سالگی برنامه‌نویسی رو با QBasic شروع
                  کردم و این علاقه رو به سمت زبان‌های بعدی مثل Javaو .Net,
                  RubyOnRails و PHP بردم و با علاقه زیاد به لینوکس و DevOps
                  بیشتر و بیشتر به سمت JavaScript روی آوردم. امروز به عنوان
                  Senior Software Engineer در یکی از بهترین شرکت‌ها در استرالیا
                  مشغول کار هستم.
                </p>
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
                    href="https://www.instagram.com/ehsangazar/"
                  >
                    اینستاگرام
                  </OutboundLink>{" "}
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
                    <Link className="card__cover" to="/react-basic-course">
                      <img src={reactBasicImage} alt="دوره React JS مقدماتی" />
                    </Link>
                    <div className="card__content">
                      <Link
                        className="card__content-title"
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
                  <div className="post-card -tiny">
                    <Link className="card__cover" to="/react-advanced-course">
                      <img
                        src={reactAdvancedImage}
                        alt="دوره React JS پیشرفته"
                      />
                    </Link>
                    <div className="card__content">
                      <Link
                        className="card__content-title"
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
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="footer-col -util">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-12">
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
                        <Alert
                          variant={responseOfApiRegisteringNewsletter.type}
                        >
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
                      <h5>من را در صفحات اجتماعی دنبال کنید</h5>
                    </div>
                    <div className="social-block">
                      <OutboundLink
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/ehsangazarcom"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </OutboundLink>
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
                        href="https://www.instagram.com/ehsangazar/"
                      >
                        <i className="fab fa-instagram"></i>
                      </OutboundLink>
                      <OutboundLink
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/ehsangazar"
                      >
                        <i className="fab fa-github"></i>
                      </OutboundLink>
                      <OutboundLink
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://t.me/ehsangazar"
                      >
                        <i className="fab fa-telegram"></i>
                      </OutboundLink>
                      <OutboundLink
                        rel="noopener noreferrer"
                        target="_blank"
                        href="http://ehsangazar.com"
                      >
                        EN
                      </OutboundLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Ehsan Gazar ©</p>
        </div>

        <NewsletterRegisterModal 
          email={email}
          showNewsletterModal={showNewsletterModal}
          handleCloseNewsletterModal={handleCloseNewsletterModal}
          isLoadingNewsletterModalSubmit={isLoadingNewsletterModalSubmit}
          handleChangeNewsletterEmail={handleChangeNewsletterEmail}
          handleSubmitRegisterNewsletter={handleSubmitRegisterNewsletter}
          responseOfApiRegisteringNewsletter={responseOfApiRegisteringNewsletter}
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

export default Footer;