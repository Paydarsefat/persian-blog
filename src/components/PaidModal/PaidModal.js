import React, { useContext, useState, useEffect } from 'react'
import { Modal, Alert } from 'react-bootstrap'
import ProductDetail from '../ProductDetail/ProductDetail'
import { useQueryParam, StringParam } from 'use-query-params'
import fetchHandler from '../../utils/fetchHandler'
import loading from '../Icon/loading.gif'
import reactBasicImage from './../Footer/React-Basic.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'

const PaidModal = () => {
  const [showPaidModal, setShowPaidModal] = useState(false)
  const [responseVerifyAPI, setResponseVerifyAPI] = useState(null)
  const [isLoadingVerification, setIsLoadingVerification] = useState(false)
  const [transaction, setTransaction] = useState(null)

  const [payir, setPayir] = useQueryParam('payir', StringParam)
  const [token, setToken] = useQueryParam('token', StringParam)
  const [status, setStatus] = useQueryParam('status', StringParam)

  useEffect(() => {
    if (Boolean(payir) && !Boolean(Number(status))) {
      setShowPaidModal(true)
      setResponseVerifyAPI({
        type: 'danger',
        message:
          'خطایی رخ داده است، اگر مبلغی از حسابتان کم شده است پس از یک ساعت برگردانده خواهد شد.',
      })
    }
    if (Boolean(payir) && Boolean(Number(status) && token)) {
      setShowPaidModal(true)
      handleVerifyTransaction()
    }
  }, [payir, status, token])

  const handleVerifyTransaction = async () => {
    setIsLoadingVerification(true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/pay/verify',
        body: {
          token: token,
        },
        auth: true,
      })
      if (result.data.success) {
        setTransaction(result.data.transaction)
        setResponseVerifyAPI({
          type: 'success',
          message: 'تایید تراکنش با موفقیت انجام شد',
        })
      } else {
        setResponseVerifyAPI({
          type: 'danger',
          message:
            'خطایی رخ داده است، اگر مبلغی از حسابتان کم شده است پس از یک ساعت برگردانده خواهد شد.',
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingVerification(false)
  }

  const handleClosePaidModal = () => {
    setShowPaidModal(false)
  }

  return (
    <Modal show={showPaidModal} onHide={handleClosePaidModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="btn-with-loading">
            {isLoadingVerification && (
              <img className="loading" src={loading} alt="loading" />
            )}
            بررسی تراکنش
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="paid-modal">
        {responseVerifyAPI && (
          <Alert variant={responseVerifyAPI.type}>
            {responseVerifyAPI.message}
          </Alert>
        )}
        {responseVerifyAPI && responseVerifyAPI.type === 'success' && (
          <>
            {transaction.course === 'react-basic' && (
              <ProductDetail
                title="دوره آنلاین React JS مقدماتی"
                description="دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید و یاد
                  میگیرید با React وب‌سایت بنویسید"
                oldPrice="870000"
                discount={transaction.code !== ''}
                newPrice={transaction.amount}
                image={reactBasicImage}
              />
            )}
            {transaction.course === 'react-advanced' && (
              <ProductDetail
                title="خرید دوره React JS پیشرفته"
                description="در این دوره یاد میگیرید چطور با Webpack, GraphQL, NextJs,
                  Gatsby و غیره یک سایت حرفه‌ای بنویسید"
                oldPrice="2480000"
                discount={transaction.code !== ''}
                newPrice={transaction.amount}
                image={reactAdvancedImage}
              />
            )}
          </>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default PaidModal
