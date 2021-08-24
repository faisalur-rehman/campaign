import "./App.css";
import Login from "./components/Login/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import YourCampaigns from "./components/YourCampaigns/YourCampaigns";
import CreateCampaign from "./components/CreateCampaign/CreateCampaign";
import CreateCampaign2 from "./components/CreateCampaign/CreateCampaign2";
import CreateCampaign3 from "./components/CreateCampaign/CreateCampaign3";
import CreateCampaign4 from "./components/CreateCampaign/CreateCampaign4";
import MarketingPlan from "./components/MarketingPlan/MarketingPlan";
import SignUPForm from "./CreateUser/SignUPForm"
import UserList from "./users/UserList";
// import Edit from "./Edit/EditScreen";
import EditForm from "./Edit/edit";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/your-campaigns">
          <YourCampaigns />
        </Route>
        <Route path="/create-campaign">
          <CreateCampaign />
        </Route>
        <Route path="/create-campaign2">
          <CreateCampaign2 />
        </Route>
        <Route path="/create-campaign3">
          <CreateCampaign3 />
        </Route>
        <Route path="/create-campaign4">
          <CreateCampaign4 />
        </Route>
        <Route path="/marketing-plan">
          <MarketingPlan />
        </Route>
        <Route path="/Create-User">
          <SignUPForm/>
        </Route>
        <Route path="/User-List">
          <UserList/>
        </Route>
        <Route path="/User/:id">
          <EditForm/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
