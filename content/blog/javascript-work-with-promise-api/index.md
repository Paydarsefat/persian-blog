---
title: کار با Promise API در جاوا اسکریپت
date: '2020-09-07'
description: 'کار با Promise API در جاوا اسکریپت'
videoSourceURL: https://www.youtube.com/embed/7BaUqQIWRAw
videoTitle: 'کار با Promise API در جاوا اسکریپت'
cover: cover.png
category: javascript
---

یکی از پرکاربردترین ویژگی‌های جاوا اسکریپت استفاده از Promise هاست که همونطور که از اسمش بر میاد باعث میشه ما از نتیجه‌ی یک فانکشن مطمئن بشیم صرف نظر از اینکه چقدر زمان لازم دارد.

<br />

برای تعریف یک Promise میشه از Syntax زیر استفاده کرد.

<br />

```javascript
const fetchAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve fetchAPI')
    }, 3000)
  })
}
```

<br />

همان‌طور که هی‌بینید ۳ ثانیه طول می‌کشد تا این Promise در نهایت Resolve شود.

<br />

اگر به هر دلیلی خطایی رخ دهد یا خودمان بخواهیم میتوانیم تابع Reject را صدا کنیم

<br />

```javascript
const fetchAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('reject fetchAPI')
    }, 3000)
  })
}
```

<br />

و اگر بخواهیم از این Function استفاده کنیم لازم است آن‌را صدا کنیم و تابع .then را تعریف کنیم

<br />

```javascript
fetchAPI().then((response) => {
  console.log(response)
})
```

<br />

همان‌طور که در کد میبینید می‌توانید برای مثال Reponse را Console.log بگیرید.

<br />

یا اگر بخواهیم هر دو حالت Success و Error را هندل کنیم می‌توانیم از توابع .then و .catch استفاده کنیم.

```javascript
fetchAPI()
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

<br />

جزئیات بیشتر را می‌توانید در ویدئو ببینید.

<br />

این یکی از ویدئو‌های
[دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد](/es6-es7-etc-babel-webpack-javascript-course)
هست.
