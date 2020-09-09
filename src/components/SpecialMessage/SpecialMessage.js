import React from 'react'
import { Link } from 'gatsby'

const SpecialMessage = () => {
  return (
    <div className="special">
      <div className="alert alert-info widthAll">
        برای همکاری با بنیاد{' '}
        <Link to="/yarra-foundation-charity" className="secondary">
          {' '}
          خیریه یارا{' '}
        </Link>{' '}
        و آماده سازی دوره جاوا اسکریپت ES6 با وارد کردن کد{' '}
        <span className="speacial-code">yarrafoundation.com</span> می‌توانید از
        تخفیف ۵۰ درصدی برای دوره‌ها برخوردار شوید <br />
        آخرین مهلت استفاده از این تخفیف ۲۱ ام شهریور می‌باشد
      </div>
    </div>
  )
}

export default SpecialMessage
