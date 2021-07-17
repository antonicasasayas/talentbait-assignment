import React, {useState, useEffect} from 'react'
import Ad from '../../components/Ad/Ad'
import { Link } from "react-router-dom";
import api from "../../api/ads";
import logo from '../../images/logo.png'
import './ads.css'

export default function Ads(props) {
    
    const [ads, setAds] = useState([])
 
  
  const retrieveAds = async () => {
    const response = await api.get("/ads");
    return response.data;
  };
    useEffect(() => {
        const getAllAds = async () => {
          const allAds = await retrieveAds();
          
          setAds(allAds.filter((ad) => ad.id_product === props.match.params.id));
        };
      getAllAds();
      
       
    }, [])

 
    return (
      <div>
        <div className="ads-page">
         
            <img src={logo} alt="logo" id="logo" />
         
          <Link to={`/ads/${props.match.params.id}/create`}>
            <button>
              <h3>Create an ad for this product</h3>
            </button>
          </Link>
        </div>

        <div className="ads-container">
          {ads ? (
            ads.map((ad) => <Ad key={ad.id} {...ad} />)
          ) : (
            <h1>There's no ads for this product yet.</h1>
          )}
        </div>
      </div>
    );
}
