import React from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const CodeForm = ({
  isLoadingCoupon,
  loading,
  handleSubmitCoupon,
  responseCouponAPI,
  handleChangeCoupon,
  coupon,
}) => {
  return (
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
  )
}

export default CodeForm
