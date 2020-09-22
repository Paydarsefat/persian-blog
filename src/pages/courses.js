import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import '../app/assets/css/elegant.css'
import '../app/assets/css/custom_bootstrap.css'
import '../app/assets/css/slick.css'
import '../app/assets/css/plyr.min.css'
import '../app/assets/css/style.css'
import './index.css'
import handleFeatures from '../configs/handleFeatures'
import SpecialOffer from '../components/SpecialOffer/SpecialOffer'

const Courses = ({ location }) => {
  return (
    <Layout location={location} title={'دوره‌ها'} page="courses">
      <SEO title={'دوره‌های آموزشی'} />
      {/* <Banner /> */}
      <div id="content">
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to={'/'}>
                  <i className="fas fa-home"></i>خانه
                </Link>
              </li>
              <li className="active">دوره‌ها</li>
            </ul>
          </div>
          <div className="about-us">
            <div className="about-us">
              <SpecialOffer
                location={location}
                features={handleFeatures(location)}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Courses
