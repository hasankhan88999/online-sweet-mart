import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div className='btn'><Link to={`/${props.href}`} className='alink'><span>{props.value}</span></Link></div>
  )
}

export default Button