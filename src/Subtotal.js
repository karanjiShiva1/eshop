import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat
            //  renderText={(value)(
            //    <>
            //    <p>
            //        Subtotal(0 items):<strong>$0</strong>

            //    </p>
            //    <small className="subtotal_gift">
            //        <input type="checkbox">This order  contains a Gift</input>
            //    </small>
               
               
            //    </>


            //  )}

            //  decimalScale={2}
            //  value={0}
            //  displayType={"text"}
            //  thousandSeparator={true}
        
        />
      
    </div>
  )
}

export default Subtotal
