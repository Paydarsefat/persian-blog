import React from 'react'

const ProductDetail = ({
  image,
  title,
  description,
  discount,
  oldPrice,
  newPrice,
  newPriceFormatted,
}) => {
  return (
    <div className="buy-section">
      <img src={image} alt="course" />
      <div className="buy-details">
        <h4>{title}</h4>
        <p>{description}</p>
        {newPrice > 0 && (
          <span className="courses-content-price">
            {!discount && `${oldPrice} تومان`}
            {discount && (
              <>
                <strike>{oldPrice}</strike> {newPriceFormatted} تومان
              </>
            )}
          </span>
        )}
        {Number(newPrice) === 0 && (
          <span className="courses-content-price">این دوره رایگان است</span>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
