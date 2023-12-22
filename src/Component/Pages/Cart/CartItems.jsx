import React, {useContext} from 'react';
import { ShopContext } from '../../../Context/Shop-context';
import './CartItems.css';

const CartItems = (props) => {
const { cartItems, removeFromCart, addToCart, deleteItem } = useContext(ShopContext);
const {id, price, productName, productImage} = props.data;

const handleOnChange = (event) =>{
  const newValue = event.target.value
  console.log(newValue);
} 
  return (
    <div className='cartItem-container' key={id}>
        <div className='cartItem' > 
            <img src={productImage} alt={productName}/>
        </div>
        <div className='cartItem-details'>
        <h3>{productName}</h3>
            <h4>MRP: ₹{price}</h4>
            <div className='cartItem-amount'>
            <button onClick={() => {removeFromCart(id)}}>-</button>
            <input value={cartItems[id]} onChange={handleOnChange}/>
            <button onClick={() => {addToCart(id)}}>+</button>
            </div>
            <span>BUY NOW</span>
        </div>
        <div className='delete-Item'>
        <button onClick={() => {deleteItem(id)}}>    
        <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
    </div>
  )
}

export default CartItems
