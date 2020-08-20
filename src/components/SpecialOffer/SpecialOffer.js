import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import reactBasicImage from './../Footer/React-Basic.png'
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
      <div className="special">
        <div className="alert alert-info widthAll">
          به مناسبت بازگشایی وب‌سایت تخفیف ۴۰ درصدی روی دو دوره مقدماتی و
          پیشرفته تا ۵ شهریور
        </div>
      </div>
      {!location.pathname.includes('-course') && (
        <div className="courses">
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
              <span className="courses-content-price">
                <strike>870,000</strike>
                522,000 تومان
              </span>
              <Button onClick={() => handleBuy('react-basic')} variant="info">
                خرید دوره مقدماتی
              </Button>
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
              <span className="courses-content-price">
                <strike>2,480,000</strike>
                1,488,000 تومان
              </span>
              <Button
                onClick={() => handleBuy('react-advanced')}
                variant="info"
              >
                خرید دوره پیشرفته
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SpecialOffer
