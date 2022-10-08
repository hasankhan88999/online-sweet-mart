import React from 'react'
import { images } from '../../constants'
import Button from "../../components/Button";
import "./user.scss"
import {Link} from 'react-router-dom'

const User = () => {
  return (
    <>
    {/* <Link className='logo' to='/'><i class="fa-solid fa-bag-shopping" style={{ color:"#333", fontSize:'30px'}}><span className='span'>SweetMart</span></i></Link>  */}
    <h1><span style={{color:"#85a3e0"}}>Hey!</span> Here's some Data for you.</h1>
    <div className='section log'> 
      <div className='logImg'>
        <img src={images.image4} alt="" />
      </div>
          <div className=' user-links btn'>
              <Button value="Show Users" href="showUsers"/>
              <Button value="Delete User" href="deleteUser" />
          </div>
    </div>
    </>
  )
}

export default User