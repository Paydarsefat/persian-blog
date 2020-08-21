import React, { useContext, useState } from 'react'
import { Tabs, Tab, Form, Button, Alert } from 'react-bootstrap'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import fetchHandler from '../../utils/fetchHandler'
import formatPrice from '../../utils/formatPrice'

const TabsInModalToBuy = ({ id, title, description, price, image }) => {
  const [isLoadingCoupon, setIsLoadingCoupon] = useState(false)
  const [responseCouponAPI, setResponseCouponAPI] = useState(null)
  const [coupon, setCoupon] = useState(null)
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

  let newPrice = discount
    ? (Number(price) * (100 - Number(discount))) / 100
    : price
  newPrice = formatPrice(newPrice)

  const oldPrice = formatPrice(price)

  return (
    <div className="buy-body">
      <div className="buy-section">
        <img src={image} alt="course" />
        <div className="buy-details">
          <h4>{title}</h4>
          <p>{description}</p>
          <span className="courses-content-price">
            {!discount && `${oldPrice} تومان`}
            {discount && (
              <>
                <strike>{oldPrice}</strike> {newPrice} تومان
              </>
            )}
          </span>
        </div>
      </div>
      <div className="buy-coupon">
        <div className="buy-coupon-section">
          <h5>کد تخفیف</h5>
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
              {!discount && `${oldPrice} تومان`}
              {` `}
              {discount && (
                <>
                  <strike>{oldPrice}</strike> {newPrice} تومان
                </>
              )}
              {` `}
              را از طریق لینک زیر برای من واریز نمایید سپس پیغامی به
              <a href="https://t.me/ehsangazar"> تلگرام </a>
              من بدهید.
              <div className="tab-buy-actions">
                <OutboundLink
                  rel="noopener noreferrer"
                  className="btn btn-success"
                  target="_blank"
                  href="https://me.pay.ir/ehsangazar"
                >
                  پرداخت
                </OutboundLink>
              </div>
            </div>
          </Tab>
          <Tab eventKey="payir" title="درگاه پرداخت">
            <div className="tab-buy">در حال پیاده‌سازی</div>
          </Tab>
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
