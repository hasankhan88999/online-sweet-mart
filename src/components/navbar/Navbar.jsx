import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';
import "./navbar.scss"

const Navbar = () => {

  let user = false;

  let cartItem = 8;

  return (
    <>
        <div className="navbar">
            <Link className='logo' to='/'><i class="fa-solid fa-bag-shopping" style={{ color:"#333", fontSize:'30px'}}><span className='span'>SweetMart</span></i></Link>
            <input type="search" name="" id="" placeholder='Search' className='search'/>
            { user ?
            <div className='counter'><Link to='/cart' className='counter'>
              <i class="fa-solid fa-cart-shopping cartIcon" style={{ color:"#333"}}></i>
              { cartItem !== 0 ? <div className='badge'>{cartItem}</div> : "" }
            </Link>
            <Button value='logout' /> </div>
            :
            <div className=' signup-links btn'>
              <Button value="Register" href="register"/>
              <Button value="Login" href="login" />
            </div>
            }
        </div>
    </>
  )
}

export default Navbar