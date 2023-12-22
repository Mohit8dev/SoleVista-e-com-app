import React from 'react';
import './Home.css';
import mainImage from '../../../Images/main-image.jpg';
import menImage from '../../../Images/men-section.jpg';
import womenImage from '../../../Images/women-section.jpg';
import kidsImage from '../../../Images/kid-section.jpg';
import mainImage2 from '../../../Images/main-image2.jpg';
import {Link} from 'react-router-dom';
import ProductCarousel from '../Product/ProductCarousel';


const Home = () => {

  return (
    <div className='home-container'>
      <div className='home-content'>
          <div className='first-container'>
           <div className='text'>
            <h1>KICKS THAT HELP TO IMPROVE</h1>
            <p>The gift that never goes out of style.</p>
            <button><Link to='/shop' style={{textDecoration: 'none', color: 'white'}}>Shop</Link></button>
           </div>
           <div className='image main'>
            <img src={mainImage} alt='reload'/>
           </div>
          </div>
          <div className='second-container'>
          <h1>Browse</h1>
            <div className='second-content'> 
              <ProductCarousel />
            </div>
          </div>
          <div className='third-container'>
            <h1>The Essentials</h1>
            <div className='age-group'>
              <div className='Essentials'>
                <div className='men-image'>
                  <img src={menImage} alt='menShoe'/>
                  <button><Link to='/menShoes' style={{textDecoration: 'none', color: 'white'}}>Men's</Link></button>
                </div>
              </div>
              <div className='Essentials'>
              <div className='women-image'>
                  <img src={womenImage} alt='womenShoe'/>
                  <button><Link to='/womenShoes' style={{textDecoration: 'none', color: 'white'}}>Women's</Link></button>
                </div>
              </div>
              <div className='Essentials'>
              <div className='kids-image'>
                  <img src={kidsImage}  alt='kidShoe'/>
                  <button><Link to='/kidsShoes' style={{textDecoration: 'none', color: 'white'}}>Kids'</Link></button>
                </div>
              </div>
            </div>
          </div>
          <div className='fourth-container'>
            <h1>Don't Miss</h1>
            <div className='fourth-content'>
            <div className='text'>
              <p>Coming Soon</p>
              <h2>ALPHA 3</h2>
              <p>Get ready to rethink everything that you thought you were capable of.</p>
              <button>Notify Me</button>
            </div>
            <div className='image'>
            <img src={mainImage2} alt='reload'/>
            </div>
           </div>
          </div>
          <footer className='page-footer'>
            <div className='about'>
              <ul>
                <li>Find a store</li>
                <li>Become a member</li>
                <li>Give Us Feedback</li>
              </ul>
            </div>
            <div className='about'>
              <ul>
                <li>GET HELP</li>
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='about'>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>News</li>
                <li>Investors</li>
              </ul>
            </div>
            <div className='about'>
              <ul className='last-child'>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
              </ul>
            </div>
          </footer>
      </div>
    </div>
  )
}

export default Home;
