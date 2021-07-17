import Reflux from "reflux";
import ads from "../pages/ads/ads";
import api from '../api/ads'
var Actions = Reflux.createActions(["create", "edit", "delete"]);

class StatusStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      ads: [],
    };
    this.listenables = Actions;
  }

  retrieveAds = async () => {
    const response = await api.get("/ads");
     return this.setState({ ads: response.data});
  };

  
    
  

  async onCreate(ad) {
    const request = {
      ...ad,
      
    };

    const response = await api.post("/ads", request);
    this.setState((prevState) => ({
      ads: [...prevState.ads, response],
    }));
  }

  async onEdit(id, adProperties) {
    

  }
  async onDelete(id) {
    await api.delete(`/ads/${id}`);
    const newAdList = this.state.ads.filter(ad => {
        return ad.id !== id
      })
   
    this.setState({ads: newAdList})
  }
}



const adsStore = new StatusStore();

export default adsStore;
