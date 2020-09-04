---
title: برنامه نویسی یک Custom Hook و معرفی این ساختار
date: '2020-09-03'
videoSourceURL: https://www.youtube.com/embed/x7zppCq0yDY
videoTitle: 'برنامه نویسی یک Custom Hook و معرفی این ساختار'
cover: cover.png
category: react-advanced
description: 'برنامه نویسی یک Custom Hook و معرفی این ساختار'
---

یکی از دیزاین پترن‌هایی که در ورژن جدید React ارائه شد خب استفاده از Hooks ها بود که حتی می‌توانیم Custom Hook خودمون رو هم برنامه نویسی کنیم

<br />

با کد زیر مثلا میتونید یک Custom hook برای کار با localStorage تعریف کنید.

```javascript
import WINDOW from '../utils/window'

const useLocalStorage = (key) => {
  const getValue = () => {
    return WINDOW.localStorage.getItem(key)
  }
  const setValue = (value) => {
    return WINDOW.localStorage.setItem(key, value)
  }
  const value = getValue()
  return [value, setValue]
}

export default useLocalStorage
```

<br />

جزئیات بیشتر را می‌توانید در ویدئو ببینید.

<br />

این یکی از ویدئو‌های
[آموزش آنلاین React پیشرفته](/react-advanced-course)
هست.
