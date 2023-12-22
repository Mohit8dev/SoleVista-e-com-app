import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <div className='logo'>
            <h4>SoleVista</h4>
        </div>
        <div className='header-menu'>
            <ul className='list-menu'>
                <li>Find a Store</li>
                <li>Help</li>
                <li>Join Us</li>
                <li>Sign In</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
