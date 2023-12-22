import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../../../Context/Shop-context';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {

const [shoes, setShoes] = useState(null);
const { cartItems, getTotalAmountInCart } = useContext(ShopContext);
const totalAmount = getTotalAmountInCart();

useEffect(() => {
  fetch('./api/shoes')
    .then(response => response.json())
    .then(json => setShoes(json.shoes))
    .catch(err => console.log(err));
}, []);

const cartHasItems = Object.values(cartItems).some(quantity => quantity > 0);

  return (
    <div className='cart-cotainer'>
      <div className='cart-content'>
        <h1>Shopping Cart</h1>
        <div className='cart-products'>
          {shoes && (cartHasItems ? (shoes.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItems key={product.id} data={product} />;
            }else {
              return null;
            }
          })
          ) : (
          <div><h1 style={{textAlign: 'center'}}>Your Cart is Empty</h1></div>
          )
          )}
        </div>
        <div className='cart-bottom'>
          <h3>Total Amount: ₹{totalAmount}</h3>
          <div className='forward'>
          <button>Place Order</button>
          <button><Link to='/shop' style={{textDecoration: 'none', color: 'white'}}>Continue Shopping</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
