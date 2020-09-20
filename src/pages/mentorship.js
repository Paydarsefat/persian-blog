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
import SpecialOffer from '../components/SpecialOffer/SpecialOffer'

const Mentorship = ({ location }) => {
  return (
    <Layout location={location} title={'منتورشیپ'} page="mentorship">
      <SEO title={'منتورشیپی آموزشی'} />
      {/* <Banner /> */}
      <div id="content">
        <div class="container">
          <div class="breadcrumb">
            <ul>
              <li>
                <Link to={'/'}>
                  <i class="fas fa-home"></i>خانه
                </Link>
              </li>
              <li class="active">منتورشیپ</li>
            </ul>
          </div>
          <div class="about-us">
            <div className="about-us">
              <div>
                قبل از آنکه منتورشیپی من را ببینید، شاید بهتر باشد کلمه‌ی
                منتورشیپ را از آن‌ها حذف کنم.{' '}
              </div>
              <SpecialOffer location={location} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Mentorship
