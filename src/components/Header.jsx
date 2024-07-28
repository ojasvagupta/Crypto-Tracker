import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { FaEthereum } from "react-icons/fa";
const header = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>Crypto Tracker</h1>
        <FaEthereum color='skyblue' size={'30'} />
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='./Coins'>Coins</Link></li>
      </ul>
    </div>
  )
}

export default header
