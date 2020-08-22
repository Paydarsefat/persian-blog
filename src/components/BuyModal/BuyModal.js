import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import TabsInModalToBuy from '../TabsInModalToBuy/TabsInModalToBuy'
import reactBasicImage from './../Footer/React-Basic.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
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
      </Modal.Body>
    </Modal>
  )
}

export default BuyModal
