import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import "../app/assets/css/elegant.css"
import "../app/assets/css/custom_bootstrap.css"
import "../app/assets/css/slick.css"
import "../app/assets/css/plyr.min.css"
import "../app/assets/css/style.css"
import "./index.css"
import notFoundProfile from "./404.png"

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location} title={"۴۰۴"}>
      <SEO title={"گم‌شده اید"} />
      {/* <Banner /> */}
      <div class="no-pd" id="content">
        <div class="container">
          <div class="breadcrumb">
            <ul>
              <li>
                <Link to={"/"}>
                  <i class="fas fa-home"></i>خانه
                </Link>
              </li>
              <li class="active">گم شده‌اید؟</li>
            </ul>
          </div>
          <div class="about-us">
            <div class="row align-items-center">
              <>
                <div class="col-4">
                  <img src={notFoundProfile} alt="گم شده‌اید" />
                </div>
                <div class="col-8 content">
                  <h1>گم شده‌اید؟</h1>
                  <br />
                  <p>
                    خب به نظر میاد دنبال چیزی میگردید که وجود ندارد؟
                    <br />
                    شاید هدف خودتان را فراموش کرده‌اید؟
                    <br />
                    <br />
                    هر آنچه هست احتمالا اگر تنها روی گزینه خانه‌ بالا سمت چپ کلیک کنید پیدا خواهید شد.
                    <br />
                    <br />
                    پیدا شدید؟
                  </p>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
