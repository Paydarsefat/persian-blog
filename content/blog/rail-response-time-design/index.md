---
title: مدل اندازه‌گیری و طراحی واکنش‌های وب‌سایت RAIL
date: '2020-08-03'
description: 'مدل اندازه‌گیری و طراحی واکنش‌های وب‌سایت RAIL'
cover: cover.png
comment: true
homepage: true
category: programming-world
---

![alt text](rail.png 'مدل اندازه‌گیری و طراحی واکنش‌های وب‌سایت RAIL')

تا به حال سوالی برایتان مطرح شده است که چگونه اجزای صفحه را طراحی کنید که برای کاربران قابل فهم‌تر باشد؟ و آیا منبع علمی برای آن وجود دارد؟

هدف بازدهی بیشتر متناسب با کاربران است که اکثرا از روش ثابتی استفاده می‌کنند و انتظارات مشخصی دارند.

![alt text](table.png 'مدل اندازه‌گیری و طراحی واکنش‌های وب‌سایت RAIL')

این جدول توضیح می‌دهد که انتظار کاربران از هر واکنشی که در صفحه انجام می‌دهد تقریبا چه چیزی است:

- فاصله‌ی بین ۰ تا ۱۶ میلی ثانیه:
  در این فاصله زمانی آن‌ها هیچ انتظاری ندارند و مرورگر می‌تواند به راحتی فریم‌های انیمیشنی را بارگذاری کند.

- فاصله‌ی بین ۰ تا ۱۰۰ میلی ثانیه:
  کاربر در این فاصله‌ی زمانی فکر می‌کند هر ریسپانسی از صفحه خوب و با سرعت است.

- فاصله‌ی بین ۱۰۰ تا ۳۰۰ میلی ثانیه:
  در این فاصله کاربر شروع به حس تاخیر می‌کند.

- فاصله‌ی بین ۳۰۰ میلی‌ثانیه تا یک ثانیه:
  کاربر از روند طبیعی خود خارج شده است، کاربر می‌تواند انتظار لود شدن صفحه‌ی جدید داشته باشد.

- فاصله‌ی بیشتر از یک ثانیه:
  کاربر منحرف شده است و تمرکزش را از دست داده است

- فاصله‌ی بیشتر از ده ثانیه:
  کاربر خسته شده و ممکن است کاملا برود یا کار را به بعد بسپارد

# ابزار‌ها:

برای اندازه‌گیری این روند‌ها مانند لود صفحه‌ی اول وب‌سایت می‌توانید از ابزاراتی مثل Chrome DevTools, Lighthouse یا WebPageTest استفاده کنید.

این مثالی است که من از سایتی که روی آن کار می‌کنم به دست آورده‌ام:

![alt text](performance.png 'مدل اندازه‌گیری و طراحی واکنش‌های وب‌سایت RAIL')

همانطور که در عکس می‌بینید تقریبا ۶ الی ۸ ثانیه طول می کشد تا کاربر چیزی با معنی ببینید! و ۱۵ ثانیه طول می‌کشد تا منو‌ها و جاوا اسکریپت به درستی لود شوند که کمی برای کاربر خسته کننده است.
