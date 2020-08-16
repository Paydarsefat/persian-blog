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
import aboutProfile from './about.png'

const About = ({ location }) => {
  return (
    <Layout location={location} title={"درباره"} page="about">
      <SEO title={"درباره احسان گازار"} />
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
              <li class="active">درباره</li>
            </ul>
          </div>
          <div class="about-us">
            <div class="row content-container">
              <>
                <div class="col-12 col-md-4 col-lg-4 content-image">
                  <img src={aboutProfile} alt="درباره احسان گازار" />
                </div>
                <div class="col-12 col-md-8 col-lg-8 content">
                  <h1>درباره</h1>
                  <br />
                  <br />
                  <p>
                    احسان گازار هستم.
                    <br />
                    کمی تاریخچه، از ۱۷ سالگی شروع به برنامه‌نویسی کردم QBasic زبانی بود که اول از همه یاد گرفتم و بعد رفتم سمت
                    C و C++، و بعد رفتم سراغ رباتیک. 
                    تصمیم گرفتم در دانشگاه کامپیوتر بخونم و رشته مهندسی سخت افزار خواجه نصیر قبول شدم. طی همون سال اول با کمک سال بالایی ها و علاقه‌ی خودم و کلاس‌های مدارک ماکروسافت 
                    تونستم کلی در مورد اوبونتو، لینوکس، ویندوز سرور، PHP، RubyOnRails و CMS ها و غیره یاد بگیرم
                    <br /><br />
                    آخرین شرکت‌هایی که در ایران کار کردم نت‌برگ، پرشین‌گیگ و میزگرد نرم‌افزار بود و بعد به استرالیا مهاجرت کردم. از همان ابتدای تحولات JavaScript
                    با علاقه این زبان رو دنبال کردم و با یادگیری خیلی بیشتری در زمینه AWS و DevOps در حال حاضر به عنوان
                    Senior Software Engineer در یکی از بهترین شرکت‌های اینجا مشغول کار هستم.
                    <br /><br />
                    اگر بخواهیم برنامه‌نویسی را تقسیم کنیم به بخش‌های مختلف من
                    مطمئنا وارد تمامی بخش‌ها شده‌ام اما هنوز جای زیادی برای
                    یادگیری وجود دارد و هر روز مشتاقانه در حال یادگیری
                    هستم.
                    <br /><br />
                    دوره‌هایی رو هم برای فارسی‌زبانان به پیشنهاد دوستم و علاقه‌ی خودم شروع کردم. بازخورد‌هایی که از دانشجویان 
                    دوره گرفته شده، رضایت بسیار بالایی رو نشون میده و من هم زمان زیادی رو براشون میذارم تا به آموخته‌هاشون مسلط بشن.
                    
                    <br /><br />
                    اگر حرفه‌ای هستید، یا در حال یادگیری، خوشحال میشم ایمیل یا پیامی از شما در شبکه‌های اجتماعی بگیرم و گپی بزنیم.
                    <br />
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

export default About
