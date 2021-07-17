import React from 'react'
import './Ad.css'
export default function Ad({ headline, description, pictures, cta }) {
    console.log(pictures[0])
    return (
      <div className="ad-container">
        <div>
                <p>{ headline}</p>
        </div>
        <div>
          <img className='ad-image' src={pictures[0]} alt="ad" />
        </div>
        <div className="description-box">
          <h3>{cta}</h3>
          <p>{description}</p>
        </div>
        <div >
          <span>Like</span>
          <span>Like</span>
          <span>Like</span>
        </div>
      </div>
    );
}
