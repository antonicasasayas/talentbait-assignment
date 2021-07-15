import React from 'react'

export default function Card({productName, productDescription, productImage, price}) {
    return (
      <div>
        <h3>{productName}</h3>
        <img src={productImage} alt="product" />
            <p>{productDescription}</p>
            <p>{ price}</p>
      </div>
    );
}
