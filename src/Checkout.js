import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkoult_left">
        <img src="" alt="" className="checkout_ad" />

       <div>
        <h2 className='checkout_title'>Your Shopping Basket</h2>
        <CheckoutProduct/>
       </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>


      </div>

      
    </div>
  )
}

export default Checkout
