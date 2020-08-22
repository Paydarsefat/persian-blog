import React from 'react'

const ProductDetail = ({
  image,
  title,
  description,
  discount,
  oldPrice,
  newPrice,
}) => {
  return (
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
  )
}

export default ProductDetail
