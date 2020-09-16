---
title: یادگیری Design Patterns برای FrontEnd Engineers
date: '2020-09-16 12:00:00'
description: 'یادگیری Design Patterns برای FrontEnd Engineers'
cover: cover.jpg
comment: true
category: tips
---

این مقاله برای بررسی Design Pattern ها و یادگیری آن‌ها برای FrontEnd Engineer هاست.

<br />

# Design Pattern چیست؟

یک Design Pattern روش/ساختاری است که شما میتوانید با آن برنامه نویسی کنید. وقتی که میخواهید ویژگی‌ای را در برنامه نویسی خود توسعه دهید. همیشه در حال استفاده از یک روش یا یک Design Pattern هستید.

<br />

ممکن است در حال برنامه‌نویسی با روش Spaghetti هستید! همین جا متوقف شوید. این روشی نیست که شما می‌خواهید کد بزنید. اسپاگتی همانطور که در ذهن هم می‌آید روشی است که هر رشته به هم در آمیخته شده و کسی از آن سر در نمی‌آورد.

<br />

پس برنامه‌نویسان در طی سال‌ها این روش‌ها یا Design Pattern ها را Document کرده‌اند و دانستن آن‌ها باعث می‌شود که بتوانید App خود را بهتر توسعه دهید.

<br />

الزامی برای به خاطر سپردن اسامی آن‌ها نیست، ولی حتی اشاره به نام آن‌ها در جلسات مختلف باعث شگفتی سایر برنامه‌نویسان می‌شود. و اگر آن‌ها را بشنوید و ایده‌ای نداشته باشید مکالمه به نفع شما تمام نخواهد شد.

<br />

# چه Design Pattern های وجود دارد؟

اینجا می‌بایست خطی بین Design Pattern های تکنولوژی‌های بک‌اند و فرانت‌اند کشید، چرا که ما در FrontEnd بیشتر به سمت Functional Programming هستیم و بیشتر تکنولوژی‌های بک‌اند هنوز ساختار Object Oriented Programming را پیروی می‌کنند.

<br />

خب اگر برنامه‌نویس Backend هستید حتما با این اسامی آشنا هستید

<br />

<div class="ltr">

## Creational

- [**Abstract Factory**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/creational-patterns/abstract-factory.cpp)
- [**Builder**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/creational-patterns/builder.cpp)
- [**Factory Method**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/creational-patterns/factory-method.cpp)
- [**Prototype**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/creational-patterns/prototype.cpp)
- [**Singleton**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/creational-patterns/singleton.cpp)

## Structural

- [**Adapter**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/adapter.cpp)
- [**Bridge**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/bridge.cpp)
- [**Composite**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/composite.cpp)
- [**Decorator**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/decorator.cpp)
- [**Facade**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/facade.cpp)
- [**Flyweight**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/flyweight.cpp)
- [**Null Object**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/null_object.cpp)
- [**Proxy**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/structural-patterns/proxy.cpp)

## Behavioral

- [**Chain Of Responsibility**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/chain-of-responsibility.cpp)
- [**Command**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/command.cpp)
- [**Interpreter**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/interpreter.cpp)
- [**Iterator**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/iterator.cpp)
- [**Mediator**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/mediator.cpp)
- [**Momento**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/momento.cpp)
- [**Observer**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/observer.cpp)
- [**State**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/state.cpp)
- [**Strategy**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/strategy.cpp)
- [**Template Method**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/template-method.cpp)
- [**Visitor**](https://github.com/ehsangazar/design-patterns-cpp/blob/master/behavioral-patterns/visitor.cpp)

</div>

این‌ها لیستی است که من جمع‌آوری کرده و نوشتم و در دو Repository زیر به دو زبان برنامه‌نویسی قرار دادم

<br />

<div class="ltr">

PHP: [Design Patterns in PHP with Real Examples](https://github.com/ehsangazar/design-patterns-php)
<br />

C++: [Design Patterns in C++ with Real Examples](https://github.com/ehsangazar/design-patterns-cpp)

</div>

<br />

اما اگر برنامه‌نویس FrontEnd هستید یادگیری این تعداد Design Pattern به نظر دیگر نیازی نیست. بعضی از آن‌ها ویژگی‌های ES6 شده اند مانند Proxy و بعضی دیگر به خاطر ساختار Class بودنشان دیگر استفاده نمی شودند.

<br />

# لیست Design Pattern های معروف برای FrontEnd

سه ساختار معروف وجود دارد که روش‌های معروفی در برنامه‌نویسی با React هستند و کتاب‌خانه‌های دیگر کم و بیش روش‌های خود را نیز دارند

- معرفی ساختار Components و Containers یا کامپونتت‌های ساده و باهوش!
  <br />
  (آموزش در[React Advanced](/react-advanced-course))

- معرفی ساختار HOC یا Higher Order Components
  <br />
  (آموزش در[React Advanced](/react-advanced-course))
- [برنامه نویسی یک Custom Hook و معرفی این ساختار](/how-to-work-custom-hooks-react/)
- Singleton
- Proxy
  <br />
  (آموزش در[JavaScript ES6](/es6-es7-etc-babel-webpack-javascript-course))
- Observer Pattern
- Publish/Subscribe Pattern

این‌ها Design Pattern های معروفی هستند که کاربردی تر بوده و بیشتر استفاده می‌شوند. چند آموزش در دوره React Advanced قرار داده شده است و باقی در صورت تمایل دوستان به سایت اضافه خواهد شد.

<br />

# می‌خواهید برای هر Interview آماده باشید؟

اگر می‌خواهید با خیال راحت به Interview ها بروید حتما نگاهی به Design Pattern های بک‌اند نیز بیاندازید. در صورتی که استقبال از یادگیری این‌ روش‌ها زیاد باشد، حتما ویدئوهایی برای آموزش‌ آن‌‌ها آماده خواهم کرد.
