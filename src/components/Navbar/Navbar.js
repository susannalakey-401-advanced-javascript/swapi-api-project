import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar