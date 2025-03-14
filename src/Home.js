import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
  return (
    <div>
        <div className='home'>
            <div className="home-container">
                
            <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />
                
            <div className='home_row'>
                <Product 
                   id="1"
                   title="Bennette mystic 15.6 inch Laptop Sholder Messenger Sling Office Bag,Water Repellent 
                          Fabric for Men Women (Blue)"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
                <Product 
                   id="2"
                   title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                   price={70.6}
                   rating={3}
                   image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>

            </div>
            <div className='home_row'>
                <Product id="3"
                   title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                   price={96.6}
                   rating={2}
                   image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                   />

                <Product id="4"
                   title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                   price={99.6}
                   rating={4}
                   image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                <Product id="5"
                   title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                   price={98.6}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                   />

                
            </div>
            <div className='home_row'>
                 <Product id="6"
                   title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                   price={99.6}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                
            </div>
            
            
            </div>

        </div>
      
    </div>
  )
}

export default Home


