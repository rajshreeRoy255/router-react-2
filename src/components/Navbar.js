import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navbox ={
        padding : "10px",
        margin : "20px",
        textAlign : "center"
    }
  return (
    <div style={navbox}>
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about">About Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/contact">Contact Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default Navbar