import React from 'react'
import products from '../../data.json'
import Card from '../../components/Card/Card'
import './home.css'
import logo from '../../images/logo.png'
export default function home() {
    return (
      <>
       
        <img src={logo} alt="logo" id='logo' />
       
        <h1 id="title">Product List</h1>
        <div className="cards-container">
          {products.map((product) => (
              <Card {...product} key={product.id} />
          ))}
        </div>
      </>
    );
}
