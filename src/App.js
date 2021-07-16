import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home/home";
import ads from "./pages/ads";
import createAd from "./pages/createAd";
import editAd from "./pages/editAd";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/ads/:id" component={ads} />
        <Route path="/ads/:id/create" component={createAd} />
        <Route exact path="/ads/:id/edit" component={editAd} />
      </Switch>
    </Router>
  );
}

export default App;
