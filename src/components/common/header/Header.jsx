import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/' className="solid-link">Home</Link>
            </li>
            <li>
              <Link to='/courses' className="solid-link ">All Services</Link>
            </li>
            <li>
              <Link to='/about' className="solid-link">About Us</Link>
            </li>
            <li>
              <Link to='/team' className="solid-link">Our Team</Link>
            </li>
            <li>
              <Link to='/pricing' className="solid-link">Pricing</Link>
            </li>
            <li>
              <Link to='/journal' className="solid-link">Journal</Link>
            </li>
            <li>
              <Link to='/contact' className="solid-link">Contact Us</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>
              <Link to ='/contact' className="solid-link">GET OUR OFFER NOW</Link>
              </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header;
