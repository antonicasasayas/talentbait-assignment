import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
export default function Card({id, productName, productImage, productDescription, price}) {
  return (
    <Link
      style={{ color: "inherit", textDecoration: "inherit" }}
      to={`/ads/${id}`}
    >
      <div className="card">
        <div
          style={{ backgroundImage: `url(${productImage})` }}
          className="card-image"
        ></div>
        <div className="card-text">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
        </div>
        <div className="card-stats">
          <div className="stat">
            <h3>{price}€</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
