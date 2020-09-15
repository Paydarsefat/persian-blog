---
title: با Context آشنا شویم و از useContext استفاده کنیم
date: '2020-08-20'
videoSourceURL: https://www.youtube.com/embed/PPAcI2BeDIM
videoTitle: 'با Context آشنا شویم و از useContext استفاده کنیم'
cover: cover.png
comment: true
category: react-basic
description: 'با Context آشنا شویم و از useContext استفاده کنیم'
---

یکی از ویژگی‌های مطرح شده در React که خیلی از کارها ساده می‌کند استفاده از
Context API هاست. در این ویدئو یاد میگیرید که چطور
با آن‌ها کار کنید و از useContext استفاده کنید.

خیلی از ویژگی‌هایی که در React هستند ممکن است به روش‌های مختلف پیاده سازی شوند،
و مطمئنا Context API یکی از آن‌هاست

بحث‌های زیادی وجود دارد که میتوان در حد اپلیکیشن‌های بزرگ Context API ها را
جایگزین Redux نیز کرد. که به نظر به خاطر پیچیدگی های پیاده‌سازی
بهتر است این کار انجام نشود.
برای آنکه بهتر است کار برای برنامه‌نویس‌های دیگر و آتی ساده تر باشد، ممکن است
پیاده سازی شما به قدری پیچیده شود که آن‌ها قادر به تغییر یا رفع ایراد از کد نباشند.
اتفاقی که در پروژه‌های با Scale بالا به سرعت رخ می‌دهد.

اگر تنها با این کد شروع کنید

```javascript
import React from 'react'

const ThemeContext = React.createContext()

export default ThemeContext
```

اولین context خود را تعریف کرده‌اید.

سپس می‌بایست سراغ Provider بروید و آن‌را جایی که میخواهید از useContext ها استفاده کنید دور همه‌ی کامپوننت‌ها قرار دهید.
مثلا می‌تواند این فایل به نام App.js باشد.

```javascript
import React, { useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import themeConfig from '../../configs/theme'

const App = () => {
  const [activeTheme, setActiveTheme] = useState('green')
  return (
    <ThemeContext.Provider
      value={{
        theme: themeConfig[activeTheme],
        setActiveTheme,
      }}
    >
      <Main />
    </ThemeContext.Provider>
  )
}
```

سپس می‌توانید سراغ استفاده از useContext بروید و هر جایی که می‌خواهید
به این روش آن‌را تعریف کنید

```javascript
import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const Footer = () => {
  const themeValues = useContext(ThemeContext)
  return (
    <div className="Footer">
      <h5>Developed By Ehsan</h5>
      <div>
        <button
          onClick={() => themeValues.setActiveTheme('green')}
          className="green"
        >
          Green
        </button>
        <button
          onClick={() => themeValues.setActiveTheme('blue')}
          className="blue"
        >
          Blue
        </button>
      </div>
    </div>
  )
}
```

این یکی از آسان‌ترین روش‌های استفاده از Context هاست. مراقب باشید که مداوم از آن‌ها برای هر چیزی استفاده کنید که ممکن است به جای آسان‌کردن کار به پیچیدگی پروژه اضافه‌کنند.

ویدوئوی بالا نحوه‌ی نصب و تعریف route جدید رو توضیح میده و در اصل این ویدئو
یکی از ویدئو‌های آموزشی در دوره
[آموزش آنلاین React مقدماتی](/react-basic-course)
هست.
