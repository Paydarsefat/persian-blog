---
title: پیاده سازی localStorage و Persistence برای پروژه و Deploy کردن آن
date: '2020-08-25'
videoSourceURL: https://www.youtube.com/embed/CUP3GCbqvIc
videoTitle: 'پیاده سازی localStorage و Persistence برای پروژه و Deploy کردن آن'
cover: cover.png
comment: true
category: react-basic
description: 'پیاده سازی localStorage و Persistence برای پروژه و Deploy کردن آن'
---

برای داشتن Persistence در پروژه لازم هست که دیتاها در Database ای در مرورگر ذخیره بشوند.
که یکی از پرکاربردترین‌های آن‌ها localStorage هست.
<br />
در نتیجه در این پروژه Todo با تعریف کردن ذخیره کردن State در localStorage به صورت زیر هر بار پس از تغییر مطمئن می‌شوم که اطلاعات در مرورگر کاربر ذخیره شده‌اند.

```javascript
const addTask = (taskTitle) => {
  const newTasks = [
    ...tasks,
    {
      id: uuidv4(),
      title: taskTitle,
      status: false,
    },
  ]
  setTasks(newTasks)
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}
```

سپس هر وقت که بخوایم دیتا رو پس از refresh کاربر از این دیتابیس بخونیم کافی است دستور زیر رو اجرا کنیم

```javascript
useEffect(() => {
  let storedTasks = localStorage.getItem('tasks')
  if (storedTasks) {
    storedTasks = JSON.parse(storedTasks)
  } else {
    storedTasks = []
  }
  setTasks(storedTasks)
}, [])
```

خیلی ساده‌است و در صورتی که Server Side Rendering ندارید و اطلاعات همه در Client Side لود می‌شوند به راحتی می‌تونید با localStorage کار کنید و در صورت نیاز دیتاها را ذخیره کنید.

<br />

این یکی از ویدئو‌های
[آموزش آنلاین React مقدماتی](/react-basic-course)
هست.
