import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import YourCampaigns from "./components/YourCampaigns/YourCampaigns";
import CreateCampaign3 from "./components/CreateCampaign/CreateCampaign3";
import CreateCampaign4 from "./components/CreateCampaign/CreateCampaign4";
import MarketingPlan from "./components/MarketingPlan/MarketingPlan";
import SignUPForm from "./CreateUser/SignUPForm";
import UserList from "./users/UserList";
// import Edit from "./Edit/EditScreen";
import EditForm from "./Edit/edit";
import Company from "./Create_company/comapny";
import FormCampaign from "./components/CreateCampaign/FormCampaign";
import FormCampaign2 from "./components/CreateCampaign/Formcampaign2";
import FormCampaign3 from "./components/CreateCampaign/FormCampaign3";
import CampForm from "./components/YourCampaigns/campForm";
import { useHistory } from "react-router-dom";
import Admin from "./admin";
import CompanyDetail from "./Create_company/allCompanies";

function App() {
  const history = useHistory();
  const [role, setrole] = useState();
  const [isLoggedin, setisLoggedin] = useState(true);
  const data = JSON.parse(localStorage.getItem("login"));
  useEffect(() => {
    function Roles() {
     
      if (localStorage.getItem("token")) {
        setisLoggedin(false);
        
      } else {
        setisLoggedin(true);
        // setrole(data.isAdmin);
      }
      // if ((data.isAdmin = true)) {
      //   setrole(true);
      // } else {
      //   setrole(false);
      // }
      
    }

    Roles();
  }, [data.isAdmin]);
  
  return (
    <Router>
      
      <div>
        {!isLoggedin ? (
          <div>
           {data.isAdmin===true?( <Switch>
                <Route path="/Create-User">
                  <SignUPForm />
                </Route>
                <Route path="/User-List">
                  <UserList />
                </Route>
                <Route path="/User/:id">
                  <EditForm />
                </Route>
                <Route path="/user-company/:id">
                  <Company />
                  </Route>
                <Route path="/companyDetails">
                  <CompanyDetail />
                </Route>
              </Switch>):( <Switch>
                <Route path="/your-campaigns">
                  <CampForm />
                </Route>
                <Route path="/create-campaign">
                  <FormCampaign />
                </Route>
                <Route path="/create-campaign2">
                  <FormCampaign2 />
                </Route>
                <Route path="/create-campaign3">
                  <FormCampaign3 />
                </Route>
                <Route path="/create-campaign4">
                  <CreateCampaign4 />
                </Route>
                <Route path="/marketing-plan">
                  <MarketingPlan />
                </Route>
              </Switch>)}
            
              
            
             
          </div>
        ) : (
          <Route path="/">
            <Login />
            </Route>
        )}

      </div>

    </Router>
  );
}

export default App;
