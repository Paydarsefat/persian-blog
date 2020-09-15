---
title: Prettier چیست و چگونه از آن در کنار ESlint استفاده کنیم
date: '2020-08-26'
videoSourceURL: https://www.youtube.com/embed/JloH5dQ2MoQ
videoTitle: 'Prettier چیست و چگونه از آن در کنار ESlint استفاده کنیم'
cover: cover.png
comment: true
category: react-advanced
description: 'Prettier چیست و چگونه از آن در کنار ESlint استفاده کنیم'
---

خب صحبت از prettier که می‌شود از اسمش مشخص هست که برای زیبا تر کردن کدها استفاده میشه، از ویژگی‌های خوبش میشه به درست کردن indent های کد یا space زدن بین متغیرها و غیره گفت.

الان خیلی مرسوم هست که در codebase ها از prettier استفاده میکنیم و تنظیماتش که بتونیم در کنار eslint قرارش بدیم کمی tricky است و بعضی وقت‌ها لازم هست زمان بیشتری برای نصبش سپری کنیم.

خب بعد از این که prettier رو از npm module ها نصب کردید لازم هست که eslint رو کمی تغییر بدید به صورت زیر:

```javascript
extends:
  - 'plugin:react/recommended'
  - airbnb
  - prettier
plugins:
  - react
  - prettier
```

یعنی extends کردن و plugin رو برای prettier اضافه می‌کنیم که میتونید مراحل کامل رو در ویدئو ببینید.

و لازم هست که تنظیمات prettier رو هم به صورت فایل ذخیره کنیم تا در پروژه بمونه و بقیه برنامه‌نویس‌ها هم از اون استفاده کنند.
که اسم فایل رو .prettierrc.yml میذارم به صورت زیر مینویسمش

```javascript
trailingComma: 'es5'
tabWidth: 2
semi: false
singleQuote: true
```

و خب حالا اگر در .vscode/settings.json هم کد زیر رو قرار داده باشین

```javascript
{
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true,
    },
    "editor.formatOnSave": true
}
```

میتونه خیالتون راحت باشه که تنظیمات هر دو کار می‌کنند. برای سادگی هم یادتون نره که prettier رو به عنوان extension در vscode هم نصب داشته باشین.

<br />

این یکی از ویدئو‌های
[آموزش آنلاین React پیشرفته](/react-advanced-course)
هست.
