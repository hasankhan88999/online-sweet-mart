import React from 'react'
import './payment.css'
import Button from '../Button'
import Navbar from '../navbar/Navbar'

const Payment = () => {
  return (
    <>
        <Navbar/>
        <div className='section'>
        <div className='cart-block payment'> 
            <h1>Your Payment has been made <span style={{color: 'green'}}>Successfully.</span> <br/> <br/><Button value="Shop More" href='products'/> </h1>
            
        </div>
        <div className='order'>
            <h1>Payment Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Transaction ID</p>
                    <h4>txn23486487</h4>    
                </div>
                <div className='total'>
                    <p>Order ID</p>
                    <p>ord73746374</p>
                </div>
                <div className='total'>
                    <p>Date</p>
                    <p>06-10-2022</p>
                </div>
                <div className='total'>
                    <p>Payment Mode</p>
                    <p>Credit Card</p>
                </div>
                <div className='total final'>
                    <p>Name</p>
                    <h4>John Doe</h4>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Payment