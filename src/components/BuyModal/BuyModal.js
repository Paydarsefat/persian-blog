import React, { useContext } from 'react'
import { Modal, Alert, Form, Button, Tabs, Tab } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import reactBasicImage from './../Footer/React-Basic.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
import MyApp from '../../contexts/MyApp'

const BuyModal = ({ showBuyModal, handleCloseBuyModal, isLoadingBuyModal }) => {
  const app = useContext(MyApp)

  console.log('app')

  return (
    <Modal show={showBuyModal} onHide={handleCloseBuyModal}>
      <Modal.Header closeButton>
        <Modal.Title>خرید دوره</Modal.Title>
      </Modal.Header>
      <Modal.Body className="loading-modal">
        {app.process.processName === 'react-advanced' && (
          <div className="buy-body">
            <div className="buy-section">
              <img src={reactAdvancedImage} alt="course" />
              <div>
                <h5>خرید دوره React JS پیشرفته</h5>
                <p>
                  در این دوره یاد میگیرید چطور با Webpack, GraphQL, NextJs,
                  Gatsby و غیره یک سایت حرفه‌ای بنویسید
                </p>
                <span className="courses-content-price">
                  <strike>2,480,000</strike>
                  1,488,000 تومان
                </span>
              </div>
            </div>
            <div className="tabs-buy">
              <Tabs defaultActiveKey="transfer" id="uncontrolled-tab-example">
                <Tab eventKey="transfer" title="انتقال به حساب">
                  <div className="tab-buy">
                    لطفا برای خرید دوره مبلغ
                    <strike>2,480,000</strike>
                    1,488,000 تومان را از طریق لینک پرداخت زیر واریز نمایید و
                    سپس پیغامی به
                    <a href="https://t.me/ehsangazar"> تلگرام </a>
                    من بدهید.
                  </div>
                </Tab>
                <Tab eventKey="payir" title="درگاه پرداخت">
                  <div className="tab-buy">در حال پیاده‌سازی</div>
                </Tab>
                <Tab eventKey="paypal" title="پی‌پال">
                  <div className="tab-buy">
                    اگر خارج ایران هستید، میتوانید از Paypal برای پرداخت استفاده
                    کنید، فقط کافی است معادل دلاری دوره را به حساب
                    <a href="https://www.paypal.me/ehsangazar"> پی‌پال </a>
                    من واریز کنید و سپس مسیجی در
                    <a href="https://t.me/ehsangazar"> تلگرام </a>
                    برای من بفرستید.
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        )}
        {app.process.processName === 'react-basic' && (
          <div className="buy-body">
            <div className="buy-section">
              <img src={reactBasicImage} alt="course" />
              <div>
                <h5>دوره آنلاین React JS مقدماتی</h5>
                <p>
                  دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید و یاد
                  میگیرید با React وب‌سایت بنویسید
                </p>
                <span className="courses-content-price">
                  <strike>870,000</strike>
                  522,000 تومان
                </span>
              </div>
            </div>
            <div className="tabs-buy">
              <Tabs defaultActiveKey="transfer" id="uncontrolled-tab-example">
                <Tab eventKey="transfer" title="انتقال به حساب">
                  <div className="tab-buy">
                    لطفا برای خرید دوره مبلغ
                    <strike>870,000</strike>
                    522,000 تومان را از طریق لینک پرداخت زیر واریز نمایید و سپس
                    پیغامی به
                    <a href="https://t.me/ehsangazar"> تلگرام </a>
                    من بدهید.
                  </div>
                </Tab>
                <Tab eventKey="payir" title="درگاه پرداخت">
                  <div className="tab-buy">در حال پیاده‌سازی</div>
                </Tab>
                <Tab eventKey="paypal" title="پی‌پال">
                  <div className="tab-buy">
                    اگر خارج ایران هستید، میتوانید از Paypal برای پرداخت استفاده
                    کنید، فقط کافی است معادل دلاری دوره را به حساب
                    <a href="https://www.paypal.me/ehsangazar"> پی‌پال </a>
                    من واریز کنید و سپس مسیجی در
                    <a href="https://t.me/ehsangazar"> تلگرام </a>
                    برای من بفرستید.
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default BuyModal
