import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => (
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
                RubyOnRails و PHP بردم و با علاقه زیاد به لینوکس و DevOps بیشتر
                و بیشتر به سمت JavaScript روی آوردم. امروز به عنوان Senior
                Software Engineer در یکی از بهترین شرکت‌ها در استرالیا مشغول کار
                هستم.
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
                  <OutboundLink
                    className="card__cover"
                    href="https://designwich.com/courses/react-basic/"
                  >
                    <img
                      src="https://designwich.com/wp-content/uploads/2020/04/React-Site-thumb-3.jpg"
                      alt="دوره React JS مقدماتی"
                    />
                  </OutboundLink>
                  <div className="card__content">
                    <OutboundLink
                      className="card__content-title"
                      href="https://designwich.com/courses/react-basic/"
                    >
                      دوره React JS مقدماتی
                    </OutboundLink>
                    <p>
                      دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید و
                      یاد میگیرید با React وب‌سایت بنویسید
                    </p>
                  </div>
                </div>
                <div className="post-card -tiny">
                  <OutboundLink
                    className="card__cover"
                    href="https://designwich.com/courses/react-basic/"
                  >
                    <img
                      src="https://designwich.com/wp-content/uploads/2020/05/React-Site-thumb-2-1.png"
                      alt="دوره React JS پیشرفته"
                    />
                  </OutboundLink>
                  <div className="card__content">
                    <OutboundLink
                      className="card__content-title"
                      href="https://designwich.com/courses/react-advanced/"
                    >
                      دوره React JS پیشرفته
                    </OutboundLink>
                    <p>
                      برای برنامه‌نویسی FrontEnd نیازمندید به صورت حرفه‌ای
                      React,Next JS, Webpack و تکنولوژی‌های دیگری مثل GraphQL و
                      Testing را بدانید که در این دوره می‌توانید یاد بگیرید
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
                    <h5>تماس با من</h5>
                  </div>
                  <p className="contact-method">
                    اگر می‌خواهید با من در ارتباط باشید پیامی به{" "}
                    <OutboundLink href="https://www.instagram.com/ehsangazar/">
                      اینستاگرام
                    </OutboundLink>{" "}
                    من، یا ایمیلی به me@ehsangazar.com بفرستید.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-12 space-up">
                  <div className="center-line-title">
                    <h5>من را در صفحات اجتماعی دنبال کنید</h5>
                  </div>
                  <div className="social-block">
                    <OutboundLink href="https://www.facebook.com/ehsangazarcom">
                      <i className="fab fa-facebook-f"></i>
                    </OutboundLink>
                    <OutboundLink href="https://twitter.com/ehsangazar">
                      <i className="fab fa-twitter"></i>
                    </OutboundLink>
                    <OutboundLink href="https://www.instagram.com/ehsangazar/">
                      <i className="fab fa-instagram"></i>
                    </OutboundLink>
                    <OutboundLink href="https://github.com/ehsangazar">
                      <i className="fab fa-github"></i>
                    </OutboundLink>
                    <OutboundLink href="http://ehsangazar.com">EN</OutboundLink>
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
    </div>
  </footer>
)

export default Footer;