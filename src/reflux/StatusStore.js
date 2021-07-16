import Reflux from "reflux";
import ads from "../pages/ads";

var Actions = Reflux.createActions(["create", "edit", "delete"]);

class StatusStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      ads: [
        {
          id: "1",
          headline: "The newest dumbbells",
          description: "Train like a pro, get big like a pro",
          pictures: [
            "https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "https://images.pexels.com/photos/4498292/pexels-photo-4498292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          ],
          cta: "Buy now and get 50% off",
        },
      ],
    };
    this.listenables = Actions;
  }

  onCreate(headline, description, pictures, cta) {
      let newAd = Object.create({
        headline, description, pictures, cta
      })
      
      this.setState({...this.state.ads, newAd})
  }

  onEdit(id, adProperties) {
    let index = this.state.ads.findIndex(ad=> ad.id == id);
    this.setState({
      ads: [
         ...this.state.ads.slice(0,index),
         Object.assign({}, this.state.ads[index], adProperties),
         ...this.state.ads.slice(index+1)
      ]
    });
  }
  onDelete(id) {
    let index = this.state.ads.findIndex((ad) => ad.id == id);
    this.setState({
      ads: [
        ...this.state.ads, ads.splice(index, 1)
      ],
    });
  }
}


StatusStore.id = "statusStore";
