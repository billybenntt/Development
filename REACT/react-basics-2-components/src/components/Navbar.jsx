import React from 'react';
import logo from '../assets/airbnb-logo.png'


function Navbar() {

    return (
        <nav className='nav--navbar'>
            <img src={logo} alt="logo" className='nav--logo' />
        </nav>
    )
}

export default Navbar;