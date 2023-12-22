import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../Images/SoleVista.png';

const Navbar = () => {
const [menuVisible, setMenuVisible] = useState(false);

const toggleMenu = () => {
  setMenuVisible(!menuVisible);
}

  return (
    <div>
      <div className='navbar-container'>
        <div className='navbar-logo'>
            <Link to='/'><img src={logo} alt='SV'/></Link>
        </div>
        <div className={`${menuVisible ? 'navbar-menu right' : 'navbar-menu left'}`}>
            <ul>
                <li><Link to='/shop'>New & Featured</Link></li>
                <li><Link to='/menShoes'>Men</Link></li>
                <li><Link to='/womenShoes'>Women</Link></li>
                <li><Link to='/kidsShoes'>Kids</Link></li>
            </ul>
        </div>
        <div className='navbar-profile'>
            <div className='navbar-search'>
               <i className="fa-solid fa-magnifying-glass">&nbsp;</i><input type='search' id="site-search" placeholder='Search'/>
            </div>
            <div className='navbar-cart'>
            
            <Link  to='/cart' style={{color: 'black'}}><i className="fa-solid fa-bag-shopping"></i></Link>
            </div>  
            <div className='menu-bar'>
          <button onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar;



