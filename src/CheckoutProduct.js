import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkout_ProductImage" />
      <div className='product_Info'>
         <p className="checkoutProduct_title">Bennette mystic 15.6 inch Laptop Sholder Messenger Sling Office Bag,Water Repellent 
            Fabric for Men Women (Blue)
        </p>
        <p className="checkoutProduct_Price">
                <small>$</small>
                <strong>20</strong>
        </p>

         <div className="checkoutProduct_rating">
            ⭐⭐
         </div>
         <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
