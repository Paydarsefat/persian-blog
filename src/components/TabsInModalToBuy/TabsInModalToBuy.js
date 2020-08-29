import React, { useContext, useState } from 'react'
import { Tabs, Tab, Form, Button, Alert } from 'react-bootstrap'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import fetchHandler from '../../utils/fetchHandler'
import formatPrice from '../../utils/formatPrice'
import payirImage from './payir.png'
import loading from '../Icon/loading.gif'
import ProductDetail from '../ProductDetail/ProductDetail'
import MyApp from '../../contexts/MyApp'

const TabsInModalToBuy = ({ title, description, price, image }) => {
  const app = useContext(MyApp)
  const [isLoadingCoupon, setIsLoadingCoupon] = useState(false)
  const [isLoadingGetToken, setIsLoadingGetToken] = useState(false)

  const [responseCouponAPI, setResponseCouponAPI] = useState(null)
  const [responseGetTokenAPI, setResponseGetTokenAPI] = useState(null)

  const [coupon, setCoupon] = useState(null)
  const [token, setToken] = useState(null)
  const [discount, setDiscount] = useState(null)

  const handleChangeCoupon = (event) => {
    if (event) event.preventDefault()
    setCoupon(event.target.value)
  }

  const handleSubmitCoupon = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingCoupon(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/code/check',
        body: {
          code: coupon,
        },
        auth: true,
      })
      if (result.data.success) {
        setDiscount(result.data.result.discount)
        setResponseCouponAPI({
          type: 'success',
          message: `%${result.data.result.discount} تخفیف اعمال شد`,
        })
      } else {
        setResponseCouponAPI({
          type: 'danger',
          message: 'این کد معتبر نمی‌باشد',
        })
        setDiscount(null)
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingCoupon(false)
  }

  const handleGetToken = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingGetToken(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/pay/prepare',
        body: {
          processName: app.process.processName,
          code: coupon || null,
        },
        auth: true,
      })
      if (result.data.success) {
        setToken(result.data.response.token)
        setResponseGetTokenAPI({
          type: 'success',
          message: `در حال انتقال به سایت بانک`,
        })
        setTimeout(() => {
          window.location.href = `https://pay.ir/pg/${result.data.response.token}`
        }, 1000)
      } else {
        setResponseGetTokenAPI({
          type: 'danger',
          message: 'این کد معتبر نمی‌باشد',
        })
        setDiscount(null)
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingGetToken(false)
  }

  let newPrice = discount
    ? (Number(price) * (100 - Number(discount))) / 100
    : price
  newPrice = formatPrice(newPrice)

  const oldPrice = formatPrice(price)

  return (
    <div className="buy-body">
      <ProductDetail
        title={title}
        image={image}
        description={description}
        discount={discount}
        oldPrice={oldPrice}
        newPrice={newPrice}
      />
      <div className="buy-coupon">
        <div className="buy-coupon-section">
          <div className="buy-coupon-title">
            {isLoadingCoupon && (
              <img className="loading" src={loading} alt="loading" />
            )}
            <h5>کد تخفیف</h5>
          </div>
          <div className="coupon-form">
            <Form onSubmit={!isLoadingCoupon ? handleSubmitCoupon : null}>
              {responseCouponAPI && (
                <Alert variant={responseCouponAPI.type}>
                  {responseCouponAPI.message}
                </Alert>
              )}
              <div className="coupon-form-inputs">
                <Form.Control
                  onChange={handleChangeCoupon}
                  type="text"
                  value={coupon}
                  placeholder="کد تخفیف را وارد نمایید"
                />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoadingCoupon}
                >
                  اعمال
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="tabs-buy">
        <Tabs defaultActiveKey="transfer" id="uncontrolled-tab-example">
          <Tab eventKey="transfer" title="انتقال">
            <div className="tab-buy">
              لطفا مبلغ
              {` `}
              {!discount && `${oldPrice} تومان`}
              {` `}
              {discount && (
                <>
                  <strike>{oldPrice}</strike> {newPrice} تومان
                </>
              )}
              {` `}
              را به شماره حساب زیر واریز نمایید
              <div className="buy-number">6104 3374 9981 1279</div>
              <div className="buy-name">زینب ناصری</div>
              سپس رسید خرید را برای من ارسال نمایید
              <div className="tab-buy-actions">
                <OutboundLink
                  rel="noopener noreferrer"
                  className="btn btn-success"
                  target="_blank"
                  href="https://t.me/ehsangazar"
                >
                  تلگرام
                </OutboundLink>
              </div>
            </div>
          </Tab>
          {/* <Tab eventKey="payir" title="درگاه پرداخت">
            <div className="tab-buy payir-section">
              <div className="payir-name">
                <div className="payir-loading">
                  {isLoadingGetToken && (
                    <img className="loading" src={loading} alt="loading" />
                  )}
                </div>
                <div>
                  <img src={payirImage} alt="payir" />
                </div>
                <div>استفاده از درگاه پرداخت pay.ir</div>
              </div>
              <div className="payir-button">
                <Button
                  variant="primary"
                  type="submit"
                  className="widthAll"
                  onClick={handleGetToken}
                  disabled={isLoadingGetToken}
                >
                  {isLoadingGetToken && 'در حال انتقال'}
                  {!isLoadingGetToken && 'انتقال به درگاه بانک'}
                </Button>
              </div>
            </div>
          </Tab> */}
          <Tab eventKey="paypal" title="پی‌پال">
            <div className="tab-buy">
              اگر خارج ایران هستید، میتوانید از Paypal برای پرداخت استفاده کنید،
              فقط کافی است معادل دلاری دوره را به حساب
              <OutboundLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.paypal.me/ehsangazar"
              >
                {' '}
                پی‌پال{' '}
              </OutboundLink>
              من واریز کنید و سپس مسیجی در
              <a href="https://t.me/ehsangazar"> تلگرام </a>
              برای من بفرستید.
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default TabsInModalToBuy
