import React from 'react'
import products from '../data.json'
import Card from '../components/Card/Card'
export default function index() {
    return (
        <div>
            {products.map(product => <Card {...product} />)}
        </div>
    )
}
