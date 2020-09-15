---
title: چگونه از eslint برای استانداردسازی codebase همراه با vscode استفاده کنیم
date: '2020-08-23'
videoSourceURL: https://www.youtube.com/embed/fuT9MbUET-8
videoTitle: 'چگونه از eslint برای استانداردسازی codebase همراه با vscode استفاده کنیم'
cover: cover.png
comment: true
category: react-basic
description: 'چگونه از eslint برای استانداردسازی codebase همراه با vscode استفاده کنیم'
---

یکی از ابزارهایی که کار برنامه نویسی را راحت می‌کند مطمئنا Eslint هست.
خب اگر با مفهموم linting آشنایی دارید یعنی آنکه کد شما بر اساس استانداردهای
معروف بررسی و حتی درست بشه.

خب برای شروع میتونید eslint رو به صورت globally نصب کنید

```javascript
npm i -g eslint
```

و بعد در روت پروژه اتون میتونید از دستور زیر استفاده کنید.

```javascript
eslint --init
```

یه سری تنظیمات و پیشنهادات در سوالات نصب eslint پرسیده میشه که توی ویدئو به صورت کامل توضیح میدم.

ولی مطمئن بشید که React رو انتخاب کنید و بعد می‌تونید برید داخل VSCode و
از لیست Extension ها Eslint رو انتخاب کنید و نصب کنید.

اگر مثل من به کارهای اتوماتیک VSCode علاقه‌مندید می‌تونید از تنظیمات فایلی استفاده کنید و مثلا این تنظیمات رو در .vscode/settings قرار بدید.

```javascript
{
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true
    }
}
```

این باعث میشه که هر بار که تغییری در کد می‌دید به صورت خودکار Eslint اجرا بشه و در صورت نیاز خطاهای کد شما رو تصحیح کنه.

کل تنظیمات eslint رو هم میتونید توی فایلی مثل .eslintrc.json ببینید که برای این پروژه که در دوره مقدماتی مطرح شد به صورت هست:

```javascript
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
```

این یکی از ویدئو‌های
[آموزش آنلاین React مقدماتی](/react-basic-course)
هست.
