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
import aboutProfile from './about.png'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const About = ({ location }) => {
  return (
    <Layout location={location} title={'درباره'} page="about">
      <SEO title={'درباره احسان گازار'} />
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
                  <p>
                    احسان گازار هستم.
                    <br />
                    برنامه‌نویسی رو از ۱۷ سالگی با QBasic شروع کردم و بعد رفتم
                    سراغ C. و بعد C++. از جاوا خیلی خوشم میومد اما علاقه‌ی زیادی
                    به برنامه‌نویسی وب داشتم. چندین سایت برای سرگرمی با HTML،
                    CSS و JavaScript نوشتم. اما کافی نبود، تصمیم گرفتم که در
                    دانشگاه خواجه نصیر سخت افزار بخونم. Assembly و رباتیک
                    فوق‌العاده بودن. الگوریتم‌ها و هوش مصنوعی هم همینطور. دوباره
                    مشغول PHP و تمام فریم‌ورک‌های آن شدم، مدارک ماکروسافت و MCSE
                    رو گذروندم JQuery یک پدیده بود و بعد Ruby on Rails. ویندوز
                    یا لینوکس؟ Mac OS, Debian, Fedora. پایتون چیست؟ و دوباره وقت
                    آن رسید که از JavaScript استفاده کنم. تبدیل به Full Stack
                    JavaScript Developer شدم, Dojo Toolkit, Backbone یا
                    AngularJS یا شایدم React. React برنده شد. انگولار ورژن ۲ شد
                    و Ember به خودش اومد و حالا Vue حرفی برای گفتن داره. React
                    Native؟ برنامه نویسی NodeJs یا شایدم کلا DevOps Engineer؟
                    اما الان بیش از هر چیزی AWS.
                    <br />
                    <br />
                    این زندگی من در دهه‌ی گذشته بوده و برنامه دارم یک دهه دیگه
                    با همین سرعت ادامه بدم. در حال حاضر در ملبورن استرالیا در
                    یکی از بهترین شرکت‌های اینجا به عنوان Senior Software
                    Engineer کار میکنم
                    <br />
                    <br />
                    همیشه به یاد دادن علاقه‌‌مند بودم و الان فرصتی رو پیدا کردم
                    که برای شما دوره‌هایی رو آماده کنم که عقیده دارم کیفیت آن‌ها
                    شما رو غافل‌گیر خواهد کرد. یکی از ویژگی‌های من تشویق و ترغیب
                    دوستان برای رسیدن به اهدافشون هست و امیدوارم بتونم کمکی در
                    جهت یادگیری شما باشم.
                    <br />
                    <br />
                    اگر حرفه‌ای هستید، یا در حال یادگیری، خوشحال میشم ایمیل یا
                    پیامی از شما در شبکه‌های اجتماعی بگیرم و گپی بزنیم.
                    <br />
                    <br />
                    اگر هم می‌خواید رزومه‌ی من رو ببینید سری به
                    <OutboundLink
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/gazar"
                    >
                      {` `}لینکداین‌ام{` `}
                    </OutboundLink>
                    بزنید
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
