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
import TermsConditionsImg from './terms.png'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const TermsConditions = ({ location }) => {
  return (
    <Layout
      location={location}
      title={'قوانین و مقررات'}
      page="TermsConditions"
    >
      <SEO title={'قوانین و مقررات'} />
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
              <li class="active">قوانین و مقررات</li>
            </ul>
          </div>
          <div class="TermsConditions-us">
            <div class="row content-container">
              <>
                <div class="col-12 col-md-4 col-lg-4 content-image">
                  <img src={TermsConditionsImg} alt="قوانین و مقررات" />
                </div>
                <div class="col-12 col-md-8 col-lg-8 content">
                  <h1>قوانین و مقررات</h1>
                  <p>
                    توجه داشته باشید این‌ها قوانین و مقررات سایت فارسی احسان
                    گازار هست و من و شما را موظف به رعایت آن‌ها می‌کند.
                  </p>
                  <br />
                  <p>
                    در صورتی که در آینده تغییری در این شرایط حاصل شود، در همین
                    صفحه به روز رسانی خواهد شد و استفاده شما از سایت به معنی
                    قبول این قوانین است.
                  </p>
                  <br />
                  <p>
                    در صورتی که در آینده تغییری در این شرایط حاصل شود، در همین
                    صفحه به روز رسانی خواهد شد و استفاده شما از سایت به معنی
                    قبول این قوانین است.
                  </p>
                  <br />
                  <p>
                    سایت احسان گازار در صورتی که در دیدگاه‌ها و ارتباطات شما با
                    وب‌سایت بی‌احترامی‌ای صورت بگیرد یا به صورت مستقیم و غیر
                    مستقیم شخصی خطاب شود و حرکتی در جهت به زیر سوال بردن آن شخص
                    صورت بگیرد، آن‌ها را پاک خواهد کرد.
                  </p>
                  <br />
                  <p>
                    تمامی عکس‌ها و قالب وب‌سایت لایسنس رسمی خرید از دیزاینر‌های
                    آن‌ها دارند و همه خریده‌داری شده‌اند. در نتیجه لطفا آن‌ها را
                    کپی کنید
                  </p>
                  <br />
                  <p>
                    محتواهای تولید شده در سایت کاملا تولید شده توسط احسان گازار
                    هستند و وقت زیادی برای آن‌ها صرف شده است، در صورتی که
                    میخواهید تنها می‌توانید لینک به مطلب از این سایت بدهید و
                    می‌بایست کاربران برای مطالعه و بازدید ویدئو‌ها به سایت یا
                    کانال یوتیوب مراجعه کنند.
                  </p>
                  <br />
                  <p>
                    در صورتی که دوره‌ای را خریداری کردید و از کیفیت آن ناراضی
                    بودید، می‌توانید تا ۲۴ ساعت صرف نظر هزینه‌‌های تراکنش و
                    ایجاد لایسنس درخواست بازگشت پول بدهید
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

export default TermsConditions
