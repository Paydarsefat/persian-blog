---
title: چطور درخواست Fetch را در جاوا اسکریپت کنسل کنیم؟
date: '2020-10-10 10:00:00'
description: چطور درخواست Fetch را در جاوا اسکریپت کنسل کنیم؟
cover: cover.png
comment: true
homepage: true
videoSourceURL: https://www.youtube.com/embed/gxihC_kq_UU
videoTitle: 'چطور درخواست Fetch را در جاوا اسکریپت کنسل کنیم؟'
category: javascript
---

یکی از مشکلات در JavaScript بعضا کنسل کردن Promise هاست! فرض کنید به دلیلی یکی از API ها برای دریافت اطلاعات Failed میشود به این دلیل که کاربر دیگر Authenticated نیست.
در نتیجه بهتر است که ریکوئست‌های دیگر کنسل شود و از ارسال آن‌ها جلوگیری شود.

<br />

```javascript
const { signal } = controller

const getEmployees = async () => {
  const response = await fetch(
    'http://dummy.restapiexample.com/api/v1/employees',
    { signal }
  )
  return await response.json()
}

controller.abort()

const employees = getEmployees()
```
