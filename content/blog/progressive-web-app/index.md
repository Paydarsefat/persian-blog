---
title: Progressive Web App یا PWA چیست؟ و چگونه آن را برنامه‌نویسی کنیم
date: "2020-08-02"
description: "Progressive Web App یا PWA چیست؟ و چگونه آن را برنامه‌نویسی کنیم"
cover: cover.png
category: FrontEnd
---

 برخوردار شده است. یکی از مهم‌ترین مسائلی هم که با آن روبرو شده ایم شاید تولید یک برنامه‌ با بهترین تجربه‌ی کاربری باشد.

یکی از اسم‌هایی که امروزه می‌شنویم Progressive Web App یا PWA است. شاید بدانید که مثلا VS Code یا Slack یا حتی طی خبری تازه Microsoft 360 به همین طریق نوشته شده و در اصل یک PWA هستند.

می‌توانید دموی اپلیکیشنی که آماده کرده‌ام را در آدرس زیر ببینید:

https://mazda-pwa-qmtrcvydqz.now.sh

همچنین برای دیدن کد اپلیکیشن:

https://github.com/ehsangazar/mazda-pwa

# تعریف برنامه‌ی تحت وب پیش‌رو چیست؟


این ترجمه‌ای است که ویکی‌پدیا ارائه می‌کند:

برنامه‌ی تحت وب پیش‌رو یک نمونه وب‌سایت تحت وب است که تجربه‌ی کاربری‌ای همانند برنامه‌های گوشی/دسکتاپ (native) ارائه می کند. این برنامه‌ها از آخرین امکانات مرورگر‌ها استفاده می‌کنند تا بهترین تجربه را به همراه بیاورند.

# PWA ها می‌بایست چه ویژگی‌هایی داشته باشند؟

- Cross Browser Accessibility
یعنی می‌بایست مطمئن شد که در تمامی مرورگرهای معروف و پراستفاده کار‌میکنند و ساپورت خوبی از مرورگرها در موبایل‌ها و تبلت داشته باشد.

- واکنش‌گرا یا Responsive:
خب این دیگر جدید نیست و مطمئنا خیلی از شما با این آشنا هستید و به راحتی امروزه با استفاده از CSS FLEXBox یا CSS GRID و غیره می‌توان به این دست یافت.

- عدم وابستگی به اینترنت
 با استفاده از Service Worker ها، می‌تواند صرف نظر از اینترنت کار کند، که این مورد را در این پست بیشتر توضیح خواهم داد چون نیاز‌مند برنامه‌نویسی است.

- تجربه‌ی اپلیکیشن مانند:
یعنی می‌تواند به سرعت از صفحه‌ای به صفحه‌ی دیگر برود و تفاوت چشم‌گیری با یک اپلیکیشن در گوشی نداشته باشد، خب مهم‌ترین مسئله در این قسمت بحث Push کردن Route جدید در History است جای Replace کردن آن که برای آن هم در ادامه‌ی این پست توضیحی خواهم آورد.


- به‌روز‌رسانی:
 به صورت خودکار آپدیت می شود، این هم موردی است که می‌توان با Service Workerها و Background Sync به آن دست یافت یا می‌توان از سیستم‌های ساده‌تری مثل Polling استفاده کرد.
منظور از این قسمت آن است که کاربر نیازی به Refresh صفحه برای گرفتن اطلاعات جدید نداشته باشد، و خود App سیستمی داشته باشد تا اطلاعات را هر از چندگاه یا به صورت Real Time آپدیت کند.

- امنیت:
از Https استفاده کند و امن باشد. خب Security مسئله است که تنها به PWA ها ختم نمی‌شود ولی لازم است که حتما در آن‌ها رعایت شود.

- قابلیت پیدا شدن:
برای موتورهای جستجو طراحی شده باشد. خب این چندین مورد را شامل می‌شود که از جمله‌ی آن به داشتن Schema برای Search Engine ها می‌توان اشاره کرد و به صورت حرفه‌ای تر داشتن Server Side Rendering، این مورد را می‌توانید به صورت حرفه‌ای در طول دوره [React Advanced](https://designwich.com/courses/react-advanced/) مشاهده ‌کنید.

- قابلیت آگاهی رسانی به کاربر را نیز داشته باشد: 
منظور از این مورد آن است که تنها وابسته به حضور کاربر در تب مرورگر نباشد و در موقع نیاز بتواند کاربر را متوجه تغییرات یا اخبار مهم کند که خب برای این مورد می‌توان از Push Notification استفاده کرد. که این هم موردی است که در ادامه‌ی این مطلب توضیح داده است.

- قابلیت اشتراک‌گذاری دارد:
خب این مورد واضحی است و منظور به آن است که برای صفحات اجتماعی نیز بهینه شده باشد و در صورت نیاز لینک اشتراک گذاری برای صفحات اجتماعی نیز در آن تهیه شده باشد.


# کار کردن با Service Worker برای آفلاین کردن وب‌سایت
در اصل Service Worker ها نقش میانی بین سایت و سرور بازی می‌کند و با کنترل کردن request ها قبل از ارسال می‌توانید در صورت نیاز آن‌ها را از Cache بخوانید یا واقعا از سرور اطلاعات را بگیرید.

- برای Register کردن:
ابتدا می‌بایست مطمئن شوید که serviceWorker در navigator موجود باشد که به معنی پشتیبانی مرورگر است.

```javascript
// Check for browser support of service worker
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js')
 .then(function(registration) {
   // Successful registration
   console.log('successful, scope is:', registration.scope);
 })
 .catch(function(err) {
   // Failed
   console.log('Whoops, error:', error);
});
}
```

- نحوه‌ی Install کردن و Active کردن:
در ابتدا می‌توانید مشخص کنید جه آدرس‌هایی را لازم دارید که در Cache قرار بگیرد. Cache API ها نیز سرویسی است که مرورگر در اختیارتان قرار داده است تا بتوانید Request ها را ذخیره کنید.

```javascript

var CACHE_NAME = 'my-pwa-cache-v1';
var urlsToCache = [
  '/',
  '/styles/styles.css',
  '/script/webpack-bundle.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});

```

توجه کنید که در سیستم بالا، webpack-bundle نیز که در اصل bundle ایجاد شده توسط webpack است نیز Cache شده است.



- فراخوانی و کار کردن آفلاین
در نهایت با گذاشتن addEventListener روی رویداد fetch می‌توانید تمامی request ها را کنترل کنید و در صورت موجود بودن در Cache تنها آن را از خود مرورگر کاربر برگردانید.


```javascript

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

```


توجه کنید که service-worker.js بخشی از جاوااسکریپت صفحه نمی‌باشد، در نتیجه دسترسی به DOM ندارد و در صورتی که میخواهید صفحه را آپدیت کنید لازم است جاوا اسکریپت جدایی آن را انجام دهد.



# کار کردن با Background Sync برای آپدیت کردن اطلاعات وقتی کاربر مشغول کار دیگری است

هر چند باید دقت کنید که Service Worker های خود را آپدیت کنید، وگرنه همچنان همیشه سایت به صورت قدیمی لود خواهد شد.

در این قسمت قصد دارم در مورد Background Sync که یکی از API های Service Worker است صحبت کنم که در صورتی که کاربر تب مرورگر خود را نبسته باشد و اینترنتش قطع شده باشد می‌توانید از آن برای تشخیص آنلاین شدن استفاده کنید و در صورت لزوم کاری کنید.


```javascript
navigator.serviceWorker.ready.then(function(swRegistration) {
  return swRegistration.sync.register('myFirstSync');
});

```

اگر این قسمت کد را در service-worker.js خود قرار دهید می‌تواانید در صورت آنلاین شدن تابع myFirstSync را Register کنید و مثلا Notification ای بفرستید.

توجه داشته باشید Background Sync، در صورت بسته بودن تب مرورگر کار نمی‌کند و Browser ها اکثرا پس از مدتی جلوی فعالیت‌ Service Worker ها را میگیرند.

اما اگر Desktop Application می‌نویسید یا Progressive Web Application ای که کاربر مداوم به سایت شما رجوع می‌کند این ویژگی Experimental یا آزمایشی به کارتان می‌آید.


# چگونه تشخصی دهیم کاربر آفلاین است؟ یا اینترنت کاربر قطع شده است؟

فرض کنید از لپ تاپ استفاده می‌کنید و اتصال شما به اینترنت برای لحظه‌ای قطع می‌شود در حالیکه لازم است اطلاعات را به صورت Real Time نمایش دهید. در این صورت لازم است که پیغامی به کاربر نشان دهید و در صورت تغییر وضعیت سایت را آپدیت کنید

```javascript
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus(event) {
  var condition = navigator.onLine ? "online" : "offline";
  document.body.className = condition;
}
```

با استفاده از این Event می‌توانید به راحتی تشخصی دهید که کاربر online یا offline است و در صورت نیاز تغییری در صفحه دهید یا اطلاعات قدیمی‌تر را به کاربر نمایش دهید.

# ارسال Notification به کاربر‌ها
در این قسمت لازم که شما با استفاده‌ از کد‌های ساده‌ای به API های مرورگر متصل شوید و در صورت نیاز Notification ها را نمایش دهید.

```javascript
new Promise((resolve, reject) => {
    if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
    reject()
    }

    // Let's check whether notification permissions have alredy been granted
    else if (Notification.permission === "granted") {
    resolve()
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
        resolve()
        }
    });
    }
})
```

کد بالا خیلی راحت به شما کمک می‌کند که مرورگر را برای نمایش Notification ها آماده کنید و سپس با کد زیر می‌توانید در صورت نیاز یک Notification را فعال و ایونت مربوطه را صدا کنید.
 
```javascript
self.registration.showNotification("Sync event fired!")

```

# ایجاد Manifest برای دسترسی کاربران به سایت
این فایل ساده این امکان را به کاربر می‌دهد تا اپلیکیشن را در دستگاه خود نصب کند.
کافی است فایلی با نام manifest.json در فولدر پابلیک خود قرار دهید و این کد را در آن قرار داده و ویرایش کنید.
‍
```javascript
{
    "short_name": "MazdaPWA",
    "name": "Mazda Progressive Web Application",
    "icons": [{
            "src": "/logo.png",
            "type": "image/png",
            "sizes": "192x192"
        },
        {
            "src": "/logo.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ],
    "start_url": "/",
    "background_color": "#990000",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#990000"
}
```

و سپس این را در HTML خود قرار دهید
```javascript
<link href="/manifest.json" rel="manifest" />
```


# بهینه سازی برای صفحات اجتماعی
اگر می‌خواهید پس از Share کردن وب‌سایت یا لینکی از سایت شما در صفحات اجتماعی اطلاعات به درستی در آن‌ها نمایش داده شوند می‌توانید از OpenGraph استفاده کنید که برای مثال به روش زیر است

```javascript
{/* Twitter OpenGraph */}
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@ehsangazar" />
<meta name="twitter:creator" content="@ehsangazar" />

{/* SocialMedia OpenGraph */}
<meta property="og:url" content="https://fa.ehsangazar.com/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Open Graph: Sample Web Page of Mazda PWA" />
<meta property="og:description" content="Open Graph: Best Progressive Web App" />
<meta property="og:image" content="https://fa.ehsangazar.com/logo.png" />
```

این کد را ویرایش کنید و در HTML سایت خود قرار دهید


# برنامه‌نویسی Notification و کنترل از سرویس‌های دیگر

خب مرورگرها امکانی را فراهم می‌کنند که شما سایت خود را در سرویس‌هایی ثبت کنید و از طریق آن‌ها Notification به کاربران بفرستید.

برای مثال اگر در سایت OneSignal ثبت کنید و کلید API را دریافت کنید با کد زیر می‌توانید سایت را در مرورگر کاربر ثبت کنید.

```javascript
const applicationServerPublicKey = <NEW KEY>
const applicationServerKey = this._urlBase64ToUint8Array(applicationServerPublicKey);
console.log('ServiceWorker::: Push Notification for the event')
if ("serviceWorker" in navigator) {
    this._askForPermision()
    .then(() => {
        navigator.serviceWorker.ready.then((swRegistration) => {
        swRegistration.pushManager.getSubscription()
            .then(function (subscription) {
            const isSubscribed = !(subscription === null);
            if (isSubscribed) {
                console.log('User IS subscribed.', subscription);
            } else {
                swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
                })
            }
            });
        });
    });
}
```

و وقتی بخواهید Notification ای برای کاربر بفرستید از پنل سایت OneSignal استفاده می‌کنید و با کد زیر در صورت دریافت آن به روشی در سایت تغیری اعمال میکنید یا Notfication ای در سیستم عامل کاربر نمایش می‌دهید
```javascript
self.addEventListener('push', function (event) {
  const title = 'Push Notification Add event listener';
  const options = {
    body: 'Yay it works.',
    icon: 'static/logo.png',
    badge: 'static/logo.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

```


مطمئنا پیچیدگی‌های زیادی نسبت به پروژه‌ی شما ممکن است در هر کدام از این بخش‌ها پیش بیاید که خوشحال می‌شوم راجب آن‌ها بشنوم.

اما این لیست کاملی است که در صورت رعایت کردن آن‌ می‌توانید مطمئن شوید بهترین تجربه‌ی کاربری را از نظر برنامه‌نویسی برای بازدیدکنندگان App یا ساییتان در اختیارشان قرار می‌دهید.

شرکت‌ها بر حسب نیاز ممکن است تمام این موارد را داشته باشند یا هر روز در تلاش برای پیاده‌سازی بهتر و بهینه تر آن‌ها باشند. پس دانش شما در این زمینه‌ها می‌تواند نقش کلیدی ای در شرکت و محصول شما داشته باشد.






