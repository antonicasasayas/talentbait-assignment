import React from 'react'
import './Ad.css'
import { Link } from "react-router-dom";
import adsStore from "../../reflux/StatusStore";
import like from '../../images/like.png'
import chat from '../../images/chat.png'
import share from '../../images/share.png'
export default function Ad({  id, headline, description, pictures, cta }) {
    console.log(pictures)
  return (
    <div className="ads-container">
      <div className="ad-container">
        <div id="header">
          <p>{headline}</p>
          <div>
            <Link to={`/ads/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => adsStore.onDelete(id)}>Delete</button>
          </div>
        </div>
        <div>
          {pictures ? (
            <img className="ad-image" src={pictures} alt="ad" />
          ) : null}
        </div>
        <div className="description-box">
          <h3>{cta}</h3>
          <p>{description}</p>
        </div>
        <div className="social-buttons">
          <div>
            <img src={like} alt="like" />
            <span>Like</span>
          </div>
          <div>
            <img src={chat} alt="comment" />
            <span>Comment</span>
          </div>
          <div>
            <img src={share} alt="share" />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
