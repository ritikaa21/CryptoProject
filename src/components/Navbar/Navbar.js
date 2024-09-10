import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrown_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>
            <button>Sign up <img src={arrown_icon} alt=''/></button>
        </div>
    </div>
  )
}

export default Navbar
