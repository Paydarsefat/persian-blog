---
title: برنامه نویسی یک Custom Hook و معرفی این ساختار
date: '2020-08-30'
videoSourceURL: https://www.youtube.com/embed/x7zppCq0yDY
videoTitle: 'برنامه نویسی یک Custom Hook و معرفی این ساختار'
cover: cover.png
comment: true
category: react-advanced
description: 'برنامه نویسی یک Custom Hook و معرفی این ساختار'
---

اگر با CSS in JS آشنایی دارید می‌دانید که کتابخانه‌های مختلفی از Radium تا Styled Component و حالا Emotion روش‌های مختلفی را برای پیاده سازی ارائه کردند.

<br />

اکثر پروژه‌های اخیر در حال استفاده از [Emotion JS](https://emotion.sh/) هستند و خب این کتابخانه بسیاری را جذب و افرادی هم هنوز کتابخانه‌های دیگر را ترجیح می‌دهند.

برای نصب آن کافی است:

```javascript
npm i emotion @emotion/core
```

و سپس در هر کامپوننت که میخواهید استفاده کنید از کد زیر پیروی کنید.

```javascript
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Alert = ({ children }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        text-decoration: none;
        border: none;
        color: ${theme.colors.linkPrimary};
        border-color: ${theme.colors.linkPrimary};
        background-color: ${theme.colors.tertiary};
        padding-top: ${theme.spaces[2]};
        padding-bottom: ${theme.spaces[2]};
        padding-right: ${theme.spaces[4]};
        padding-left: ${theme.spaces[4]};
        color: ${theme.colors.white};
        transition-duration: 0.4s;
      `}
    >
      {children}
    </div>
  )
}

export default Alert
```

جزئیات بیشتر را می‌توانید در ویدئو ببینید.

<br />

این یکی از ویدئو‌های
[آموزش آنلاین React پیشرفته](/react-advanced-course)
هست.
