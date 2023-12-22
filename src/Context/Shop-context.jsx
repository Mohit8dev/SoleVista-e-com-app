import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    fetch('./api/shoes')
      .then(response => response.json())
      .then(json => setShoes(json.shoes))
      .catch(err => console.log(err));
  }, []);

  
  const getDefaultCart = () => {
    let cart = {};
    if (shoes && Array.isArray(shoes)) {
      shoes.forEach((shoe) => {
        cart[shoe.id] = 0;
      });
    }
    return cart;
  };
  
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmountInCart = () => {
    let totalAmount = 0;
    for(let item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = shoes.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }
  
  const addToCart = (itemId) => {
    setCartItems(prevCartItems => {
      const updatedCart = { ...prevCartItems };
      updatedCart[itemId] += 1;
      return updatedCart;
    });
  };
  
  const removeFromCart = (itemId) => {
    setCartItems(prevCartItems => {
      const updatedCart = { ...prevCartItems }; 
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  const deleteItem = (itemId) => {
    setCartItems(prevCartItems => {
      const updatedCart = { ...prevCartItems };
      updatedCart[itemId] *= 0;
      return updatedCart;
    });
  }
  
  useEffect(() => {
    if (shoes) {
      setCartItems(getDefaultCart());
    }
  }, [shoes]);
  
  const contextValue = { cartItems, addToCart, removeFromCart, deleteItem, getTotalAmountInCart } ;


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;




















