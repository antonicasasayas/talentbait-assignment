import React, {useState} from 'react'
import Reflux from 'reflux'
import Ad from '../components/Ad'
export default function Ads() {
    
    const [ads, setAds] = useState([Reflux.GlobalState.statusStore.ads]);
    
    return (
        <div>
            {ads.map(ad => <Ad {...ad} />)}
        </div>
    )
}
