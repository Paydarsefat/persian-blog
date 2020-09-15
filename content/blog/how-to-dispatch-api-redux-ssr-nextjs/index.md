---
title: صدا کردن API در SSR برای NextJS با Dispatch در Redux
date: '2020-09-08'
videoSourceURL: https://www.youtube.com/embed/aOzwgcUJWQs
videoTitle: 'صدا کردن API در SSR برای NextJS با Dispatch در Redux'
number: 2
cover: cover.jpg
comment: true
category: react-advanced
description: 'صدا کردن API در SSR برای NextJS با Dispatch در Redux'
---

این ویدئو معرفی میکنه که چطور میشه در NextJs بیایم و Server Side Rendering داشته باشیم

<br />

که خیلی راحت این موضوع در NextJs میتونه با getInitialProps هندل بشه

```javascript
Home.getInitialProps = async ({ reduxStore }) => {}
```

<br />

و بعد اگر بخوایم می‌تونیم با دانشی که از Redux داریم بیایم و یک API رو صدا کنیم

<br />

```javascript
Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_LIST_JOB_ACTION())
  const { job } = await reduxStore.getState()
  return {
    loading: job.loading,
    jobs: job.jobs,
  }
}
```

<br />

جزئیات بیشتر را می‌توانید در ویدئو ببینید.

<br />

این یکی از ویدئو‌های
[آموزش آنلاین React پیشرفته](/react-advanced-course)
هست.
