import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import SpecialMessage from '../SpecialMessage/SpecialMessage'
import reactBasicImage from './../Footer/React-Basic.png'
import javaScriptImage from './../Footer/JavaScript.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
import MyApp from '../../contexts/MyApp'

const SpecialOffer = ({ location }) => {
  const app = useContext(MyApp)

  const handleBuy = (courseName) => {
    app.process.setProcessName(courseName)
    if (!app.user.userData.id) {
      app.modal.setModalToShow('register')
    } else {
      app.modal.setModalToShow('buyModal')
    }
  }

  return (
    <>
      <SpecialMessage />
      {!location.pathname.includes('-course') && (
        <div className="courses">
          <div className="courses-single">
            <Link
              className="courses-link"
              to="/es6-es7-etc-babel-webpack-javascript-course"
            >
              <img
                src={javaScriptImage}
                alt="دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد"
              />
            </Link>
            <div className="courses-content">
              <Link
                className="courses-content-title"
                to="/es6-es7-etc-babel-webpack-javascript-course"
              >
                دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد
              </Link>
              <p>
                در این دوره با تمامی ویژگی های جاوا اسکریپت ES6 به بعد همراه با
                ابزارهای جدید آشنا می‌شوید
              </p>
              <span className="courses-content-price">440,000 تومان</span>
              <Button onClick={() => handleBuy('javascript')} variant="info">
                خرید دوره جاوا اسکریپت ES6
              </Button>
              <div class="note">
                سود فروش این دوره به حساب
                <Link to="/yarra-foundation-charity" className="secondary">
                  {' '}
                  خیریه یارا{' '}
                </Link>
                واریز می‌شود
              </div>
            </div>
          </div>
          <div className="courses-single">
            <Link className="courses-link" to="/react-advanced-course">
              <img src={reactAdvancedImage} alt="دوره React JS پیشرفته" />
            </Link>
            <div className="courses-content">
              <Link
                className="courses-content-title"
                to="/react-advanced-course"
              >
                دوره React JS پیشرفته
              </Link>
              <p>
                در این دوره یاد میگیرید چطور با Webpack, GraphQL, NextJs, Gatsby
                و غیره یک سایت حرفه‌ای بنویسید
              </p>
              <span className="courses-content-price">2,480,000 تومان</span>
              <Button
                onClick={() => handleBuy('react-advanced')}
                variant="info"
              >
                خرید دوره React JS پیشرفته
              </Button>
            </div>
          </div>
          <div className="courses-single">
            <Link className="courses-link" to="/react-basic-course">
              <img src={reactBasicImage} alt="دوره React JS مقدماتی" />
            </Link>
            <div className="courses-content">
              <Link className="courses-content-title" to="/react-basic-course">
                دوره React JS مقدماتی
              </Link>
              <p>
                دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید و یاد
                میگیرید با React وب‌سایت بنویسید
              </p>
              <span className="courses-content-price">870,000 تومان</span>
              <Button onClick={() => handleBuy('react-basic')} variant="info">
                خرید دوره React JS مقدماتی
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SpecialOffer
