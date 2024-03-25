import React from 'react'
import './Product.css'

function Product({id,title,image,rating,price}) {
  return (
    <div>
      <div className="Product">
        <div className="product_info">
            <p>{title}
            </p>
            
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map(()=>(
                  <p>⭐</p>
                ))}
            </div>
            </div>
        
        <img className="bag" src={image} alt="product_img" />
        <button className='button'> Add to Basket</button>
    
      </div>
    </div>
  )
}

export default Product
