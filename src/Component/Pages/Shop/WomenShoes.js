import React from 'react';
import { useState, useEffect } from 'react';
import ProductDiv from '../Product/ProductDiv';
import './WomenShoes.css';

const WomenShoes = () => {
    const [shoes, setShoes] = useState(null);

    useEffect(() => {
      fetch('./api/shoes')
        .then(response => response.json())
        .then(json => setShoes(json.shoes))
        .catch(err => console.log(err));
    }, []);
  
    const filterShoes = shoes && shoes.filter((product) => product.age.includes("Female"));
  
    return (
      <div className='Product-listing'>
        <div className='Product-title'>
          <h1>Women's Section </h1>
        </div>
        <div className='products'>
          {filterShoes && filterShoes.length > 0 ? (
              filterShoes.map(product =>
                <ProductDiv data={product} key={product.id}/>
                )
            ) : (
            <h1>NO SHOES</h1>
          )}
        </div>
      </div>
  )
}

export default WomenShoes;
