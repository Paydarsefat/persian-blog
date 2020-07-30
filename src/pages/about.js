import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../app/assets/css/elegant.css"
import "../app/assets/css/custom_bootstrap.css"
import "../app/assets/css/slick.css"
import "../app/assets/css/plyr.min.css"
import "../app/assets/css/style.css"
import "./index.css"
import aboutProfile from './about.png'

const About = ({ location }) => {
  return (
    <Layout location={location} title={"درباره"}>
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
              <li class="active">
                درباره
              </li>
            </ul>
          </div>
          <div class="about-us">
            <div class="row align-items-center">
                <>
                  <div class="col-4">
                    <img src={aboutProfile} alt="درباره احسان گازار" />
                  </div>
                  <div class="col-8 content">
                    <h1>درباره</h1>
                    <br />
                    <br />
                    <p>
                        احسان گازار هستم.
                        <br />
                        کمی تاریخچه، از ۱۷ سالگی برنامه نویسی رو شروع کردم. از QBasic شروع کردم و بعد رفتم سمت C و C++ء از گیم هایی که دولوپ کردم و بعد رفتم سمت رباتیک.
                        تصمیم گرفتم در دانشگاه کامپیوتر بخونم و در خواجه نصیر رشته سخت افزار قبول شدم. از همان ابتدای کار وارد برنامه نویسی وب و لینوکس و سرور و ویندوز سرور و مدارک ماکروسافت شدم.
                        <br />
                        علاقه من به تکنولوژی چون سر و ته نداشت وارد PHP و RubyOnRails و Python شدم.
                        ولی همچنان JavaScript وارد صحنه نشده بود که بعد تصمیم گرفتم وارد دنیای فرانت اند نیز بشم.
                        <br />
                        از شرکت‌های نت‌برگ و پرشین‌گیگ و میزگردنرم افزار که شرکت‌های آخر کاریم در ایران بود خاطرات عالی‌ای دارم که بیشتر به دنیای JavaScript ختم می‌شد.
                        <br />
                        بعد مهاجرت کردم به استرالیا و در الان به عنوان Senior Software Engineer در یکی از بهترین شرکت‌های اینجا مشغول کار هستم.
                        <br />
                        اگر بخواهیم برنامه‌نویسی را تقسیم کنیم به بخش‌های مختلف من مطمئنا وارد تمامی بخش‌ها شده‌ام اما هنوز جای زیادی برای یادگیری وجود دارد و هر روز در حال مشتاقانه در حال یادگیری هستم.
                        <br />
                        دوره‌هایی را برای فارسی زبانان نیز به پیشنهاد دوستان و علاقه‌ی خودم به تدریس شروع کردم که بسیار از نتیجه راضی هستم و بیشتر و بیشتر برای یادگیری دوستان زمان می‌گذارم.
                        <br />
                        امیدوارم بتوانیم با هم تجربه‌ی خوبی را در دنیای برنامه‌نویسی داشته باشیم. چه در حال یادگیری در دوره‌های من هستین یا همکار من بوده‌این و یا حرفه‌ای دنیای برنامه نویسی هستید، خوشحال میشم ایمیلی یا پیامی رد و بدل کنیم.
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
