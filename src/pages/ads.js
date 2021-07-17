import React, {useState, useEffect} from 'react'
import Ad from '../components/Ad/Ad'
import adsStore from '../reflux/StatusStore'
import { Link } from "react-router-dom";
export default function Ads(props) {
    
    const [ads, setAds] = useState(adsStore.state.ads)
console.log(ads)
    useEffect(() => {
        const getProductAds = () => {
          setAds(ads.filter((ad) => ad.id_product === props.match.params.id));
        };
        getProductAds()
       
    }, [])
    return (
      <div>
        <Link to={`/ads/${props.match.params.id}/create`}>
          <button>Create an ad for this product</button>
        </Link>
        {ads ? (
          ads.map((ad) => <Ad key={ad.id_product} {...ad} />)
        ) : (
          <h1>There's no ads for this product yet.</h1>
        )}
      </div>
    );
}
