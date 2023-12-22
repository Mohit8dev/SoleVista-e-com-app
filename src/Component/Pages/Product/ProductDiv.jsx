import React, { useContext } from 'react';
import './productdiv.css';
import { ShopContext } from '../../../Context/Shop-context';

const ProductDiv = (props) => {
  const {id, price, productName, productImage} = props.data;
  const {addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmaount = cartItems[id];
  return (  
    <div className='products-lists'>
      <div className='product-card'>
            <div  className='product' key={id}>
              <img src={productImage} alt={productName} />
              <h4>{productName}</h4>
              <p>MRP: ₹{price}</p>
              <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmaount > 0 && <>({cartItemAmaount})</>}</button>
            </div>
      </div>
    </div>
  );
};

export default ProductDiv;
