import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import TabsInModalToBuy from '../TabsInModalToBuy/TabsInModalToBuy'
import reactBasicImage from './../Footer/React-Basic.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
import javaScriptImage from './../Footer/JavaScript.png'
import awsConceptsImage from './../Footer/AWS-Concepts.png'
import workImage from './../Footer/Work-Logo.png'

import MyApp from '../../contexts/MyApp'

const BuyModal = ({ showBuyModal, handleCloseBuyModal, isLoadingBuyModal }) => {
  const app = useContext(MyApp)

  return (
    <Modal show={showBuyModal} onHide={handleCloseBuyModal}>
      <Modal.Header closeButton>
        <Modal.Title>خرید دوره</Modal.Title>
      </Modal.Header>
      <Modal.Body className="loading-modal">
        {app.process.processName === 'react-advanced' && (
          <TabsInModalToBuy
            image={reactAdvancedImage}
            title="خرید دوره React JS پیشرفته"
            description="در این دوره یاد میگیرید چطور با Webpack, GraphQL, NextJs,
                  Gatsby و غیره یک سایت حرفه‌ای بنویسید"
            price="2480000"
          />
        )}
        {app.process.processName === 'react-basic' && (
          <TabsInModalToBuy
            image={reactBasicImage}
            title="دوره آنلاین React JS مقدماتی"
            description="دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید و یاد
                  میگیرید با React وب‌سایت بنویسید"
            price="870000"
          />
        )}
        {app.process.processName === 'javascript' && (
          <TabsInModalToBuy
            image={javaScriptImage}
            title="دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد"
            description="در این دوره با تمامی ویژگی های جاوا اسکریپت ES6 به بعد همراه با
                ابزارهای جدید آشنا می‌شوید"
            price="440000"
          />
        )}
        {app.process.processName === 'aws-concepts' && (
          <TabsInModalToBuy
            image={awsConceptsImage}
            title="دوره آنلاین معرفی مفاهیم AWS یا Amazon Web Services"
            description="در طول این دوره یاد میگیرید که AWS چه نقش مهمی را در کاریابی و پیاده‌سازی اپلیکیشن‌های مهم در شرکت‌های دنیا دارد."
            price="330000"
          />
        )}
        {app.process.processName === 'work-course' && (
          <TabsInModalToBuy
            image={workImage}
            title="چطور وارد دنیای برنامه‌نویسی شویم و چطور پیشرفت کنیم؟"
            description="در این دوره بسیاری از مهارت‌های کاریابی و پیشرفت شغلی را یاد خواهید گرفت"
            price="330000"
          />
        )}
      </Modal.Body>
    </Modal>
  )
}

export default BuyModal
