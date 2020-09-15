---
title: چطور از ترکیب useReducer و useContext استفاده کنیم
date: '2020-08-22'
videoSourceURL: https://www.youtube.com/embed/LDJcV3x3IrA
videoTitle: 'چطور از ترکیب useReducer و useContext استفاده کنیم'
cover: cover.png
comment: true
category: react-basic
description: 'چطور از ترکیب useReducer و useContext استفاده کنیم'
---

یکی از pattern هایی که ممکن است در برنامه‌نویسی FrontEnd مورد نیاز است ترکیب کردن
useReducer و useContext است که در اصل ساختار بسیار شبیهی به
Redux را درست میکند.

خب برای این کار می‌توانید یک reducer تعریف کنید مانند مثلا زیر

```javascript
const CartReducer = (state, action) => {
  let newCarts = []
  switch (action.type) {
    case 'ADD_TO_CART':
      newCarts = [...state.carts, action.id]
      localStorage.setItem('carts', JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
      }
    case 'REMOVE_FROM_CART':
      newCarts = state.carts
      newCarts.splice(
        state.carts.findIndex((cartId) => cartId === action.id),
        1
      )
      localStorage.setItem('carts', JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
      }
    default:
      break
  }
}

export default CartReducer
```

و بعد به سراغ ایجاد Context بروید که در این مثال CartReducer است

```javascript
import React from 'react'

const CartContext = React.createContext()

export default CartContext
```

سپس همانطور که می‌دانید می‌بایست از CartContext.Provider استفاده کنید.
که من چون Layout.js کامپوننت Parent ای است که بقیه کامپوننت ها در اصل children آن‌ هستند
آن را به صورت زیر تعریف کردم

```javascript
import React, { useReducer } from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import CartContext from '../../contexts/CartContext'
import CartReducer from '../../reducers/Cart'
import './Layout.css'

const Layout = ({ children }) => {
  let carts = JSON.parse(localStorage.getItem('carts'))
  const [state, dispatch] = useReducer(CartReducer, {
    carts: carts || [],
  })
  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        dispatchCart: dispatch,
      }}
    >
      <div className="Layout">
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export default Layout
```

این Pattern ساده خیلی از پیچیدگی‌های ارسال data به children های پایین تر را آسانتر می‌کند.
و اگر تمیز پیاده شود می‌تواند ساختار Redux را به شما بدهد.

این یکی از ویدئو‌های
[آموزش آنلاین React مقدماتی](/react-basic-course)
هست.
