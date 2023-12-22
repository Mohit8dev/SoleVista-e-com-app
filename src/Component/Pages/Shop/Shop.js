import React from 'react';
import ProductDiv from '../Product/ProductDiv';
import './shop.css';
import { useState, useEffect } from 'react';


const Shop = () => {
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    fetch('./api/shoes')
      .then(response => response.json())
      .then(json => setShoes(json.shoes))
      .catch(err => console.log(err));
  }, []);

  const Popularity = () => {
    const sortedShoes = [...shoes].sort((r1, r2) => r1.rating - r2.rating);
    setShoes(sortedShoes);
  }

  const lowToHigh = () => {
    const sortedShoes = [...shoes].sort((p1, p2) => p1.price - p2.price);
    setShoes(sortedShoes);
  } 
  
  const highToLow = () => {
    const sortedShoes = [...shoes].sort((p1, p2) => p2.price - p1.price);
    setShoes(sortedShoes);
  }



  return (
    <div className='Product-listing'>
      <div className='Product-title'>
        <h1>Shop </h1>
        <form action='#'>
          <label htmlFor='sort'>Sort by : </label>
          <select id='sort' name='sort' onChange={(e) => {
            const selectedValue = e.target.value;
            if(selectedValue === 'Lowtohigh'){
              lowToHigh();
            }else if(selectedValue === 'Hightolow'){
              highToLow();
            }else if (selectedValue === 'Popularity'){
              Popularity();
            }
          }}>
            <option value='default'>Default</option>
            <option value='Lowtohigh'>Low to high</option>
            <option value='Hightolow'>high to Low</option>
            <option value='Popularity'>Popularity</option>
          </select>
        </form>
      </div>
      <div className='products'>
        {shoes && shoes.length > 0 ? (  
          shoes.map((product) => (
          <ProductDiv key={product.id} data={product}/>  
          ))
          ) : (
          <h1>NO SHOES</h1>
        )}
      </div>
    </div>
  )
}

export default Shop;
