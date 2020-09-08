---
title: کار کردن با Cookie و Dispatch کردن در سمت سرور و انتقال State به کلاینت ساید
date: '2020-09-09'
videoSourceURL: https://www.youtube.com/embed/aOzwgcUJWQs
videoTitle: 'کار کردن با Cookie و Dispatch کردن در سمت سرور و انتقال State به کلاینت ساید'
number: 2
cover: cover.png
category: react-advanced
description: 'کار کردن با Cookie و Dispatch کردن در سمت سرور و انتقال State به کلاینت ساید'
---

این ویدئو ترکیبی از خیلی از دانش‌هایی است که در این دوره یاد گرفتیم، یعنی میخوایم در Server که در NextJs با getInitialProps هندل میشه، بیایم و یک Request به سمت سرور برای مشخص کردن وضعیت Auth برای کاربر بفرستیم.

<br />

خب شاید قسمت اول کمی واضح باشه که خب در NextJs میتونیم بیایم و در getInitialProps اطلاعات رو بگیریم

<br />

که در این مثال چون برای تمامی App میخوایم اینکار رو انجام بدیم باید این رو در فایل ‍‍`_app.jsx` بنویسیم.

```javascript
MyApp.getInitialProps = async (appContext) => {}
```

<br />

مرحله‌ی بعد باید بدونیم که چون میخوایم اطلاعات رو سمت سرور بگیریم پس باید به نحوی آن‌را در سمت کلاینت نیز بفرستیم. راهکارهای زیادی برای این موضوع وجود دارد ولی من از Cookie در این پروژه استفاده میکنم.

<br />

پس در نتیجه لازم است در سمت سرور با Cookie کار کنم! که چون در سمت سرور Window تعریف نشده است می‌بایست از متغیر ctx استفاده کنم.

<br />

```javascript
MyApp.getInitialProps = async (appContext) => {
  let cookies = {}
  if (appContext.ctx.req) {
    cookies = new Cookies(appContext.ctx.req.headers.cookie)
  } else {
    cookies = new Cookies()
  }
  windowHandler.cookies = cookies

  const pageProps = await App.getInitialProps(appContext)
  return {
    ...pageProps,
  }
}
```

و مسئله‌ی بعدی چون من در این پروژه از Redux استفاده میکنم بهتر هم هست که باز برای صدا کردن این API بیام و از Dispatch استفاده کنم.

```javascript
MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store
  let cookies = {}
  if (appContext.ctx.req) {
    cookies = new Cookies(appContext.ctx.req.headers.cookie)
  } else {
    cookies = new Cookies()
  }
  windowHandler.cookies = cookies
  if (cookies.get('user')) {
    await store.dispatch(VALIDATE_ME_ACTION())
    if (appContext.ctx.res) {
      const { auth } = await store.getState()
      const { email } = auth.user
      const emailCookie = `email=${email}`
      appContext.ctx.res.setHeader('set-cookie', `${emailCookie}`)
      const loggedCookie = `logged=${auth.logged}`
      appContext.ctx.res.setHeader('set-cookie', `${loggedCookie}`)
    }
  } else {
    if (appContext.ctx.res) {
      const loggedCookie = `logged=false`
      appContext.ctx.res.setHeader('set-cookie', `${loggedCookie}`)
      const emailCookie = `email=`
      appContext.ctx.res.setHeader('set-cookie', `${emailCookie}`)
      const userCookie = `user=`
      appContext.ctx.res.setHeader('set-cookie', `${userCookie}`)
    }
    await store.dispatch(LOGOUT_ACTION())
  }
  const pageProps = await App.getInitialProps(appContext)
  return {
    ...pageProps,
  }
}
```

کد بالا داره نشون میده که من چطور اطلاعات رو از API با صدا کردن VALIDATE_ME_ACTION میگیرم و چطور بعدش اطلاعات دریافتی رو تحلیل میکنم و روی Cookie قرار میدهمو

<br />

این سناریو خیلی میتونه نسبت به پروژه متفاوت باشه و پیاده‌سازی های مختلفی رو ازش میتونین ببینید. اما مراحل و روش استفاده تقریبا همیشه همین هست.

<br />

جزئیات بیشتر را می‌توانید در ویدئو ببینید.

<br />

این یکی از ویدئو‌های
[آموزش آنلاین React پیشرفته](/react-advanced-course)
هست.
