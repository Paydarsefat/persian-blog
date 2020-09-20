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
import ConsultImg from './consult.png'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Consult = ({ location }) => {
  return (
    <Layout location={location} title={'مشاوره'} page="consult">
      <SEO title={'مشاوره'} />
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
              <li class="active">مشاوره</li>
            </ul>
          </div>
          <div class="Consult-us">
            <div class="row content-container">
              <>
                <div class="col-12 col-md-4 col-lg-4 content-image">
                  <img src={ConsultImg} alt="مشاوره" />
                </div>
                <div class="col-12 col-md-8 col-lg-8 content">
                  <h1>مشاوره</h1>
                  <p>
                    پشت صحنه‌ی این وب‌سایت، و حتی قبل از آن، من با دوستان زیادی
                    راجب علایق کاری یا تصمیم‌گیری برای پروژه‌هایشان صحبت می‌کنم
                  </p>
                  <br />
                  <p>
                    که دوستی پیشنهاد داد که این‌را به عنوان خدمتی در سایت بنویسم
                    تا کسانی که ممکن است شک و تردید به خودشان راه می‌دهند بدانند
                    می‌توانند با من در تماس باشند.
                  </p>
                  <br />
                  <p>
                    شما ممکن است میخواهید راجب یکی از موضوعات زیر سوال داشته
                    باشید
                  </p>
                  <ul>
                    <li>می‌خواهید بدانید آیا می‌بایست مهاجرت کنید؟</li>
                    <li>می‌خواهید راجب کار Remote بدانید؟</li>
                    <li>
                      می‌خواهید بدانید می‌توان با مصاحبه شغلی برای ویزای کشوری
                      اقدام کرد؟
                    </li>
                    <li>میخواهید راجب حقوق بدانید؟</li>
                    <li>می‌خواهید برای پروژه‌ی خود برنامه‌نویس پیدا کنید؟</li>
                    <li>می‌خواهید در حوزه‌ی برنامه‌نویسی کار پیدا کنید؟</li>
                    <li>می‌خواهید رزومه بنویسید؟</li>
                    <li>
                      میخواهید بدانید چه ابزار و تکنولوژی‌هایی را برای سایت خود
                      یا شرکت انتخاب کنید؟
                    </li>
                    <li>
                      می‌خواهید بدانید فروش یا درآمد محصولات قالب و غیره در
                      اینترنت چقدر است؟
                    </li>
                    <li>
                      می‌خواهید بدانید چه زبان برنامه‌نویسی را یاد بگیرید؟
                    </li>
                    <li>می‌خواهید بدانید مشکل یادگیری‌تان کجاست؟</li>
                    <li>می‌خواهید راجب تکنولوژی خاصی بدانید؟</li>
                    <li>
                      یا حتی ممکن است سوالی در مورد وضعیت خودتان در شرکت دارید؟
                    </li>
                  </ul>
                  <br />
                  <p>
                    پشت صحنه، سال‌هاست که من با دوستان در مورد سوالات بالا و
                    سوالات دیگر در ارتباط هستم، این خدمت به صورت رایگان بوده و
                    قرار هست تا هر زمانی که بشود به صورت رایگان نیز باقی بماند.
                  </p>
                  <br />
                  <p>
                    بعضی از سوالات شما تبدیل به دوره‌ای در وب‌سایت من شده‌است،
                    بعضی تبدیل به یک مطلب و بعضی ویدئوی آموزشی، سوالات شما باعث
                    می‌شود افراد دیگری نیز از آن‌ها استفاده کنند.
                  </p>
                  <br />
                  <p className="contact-method">
                    اگر می‌خواهید با من در ارتباط باشید پیامی به{` `}
                    <OutboundLink
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://t.me/ehsangazar"
                    >
                      تلگرام
                    </OutboundLink>{' '}
                    من، یا ایمیلی به me@ehsangazar.com بفرستید.
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

export default Consult
