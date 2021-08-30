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
import EditForm from "./Edit/edit";
import Company from "./Create_company/comapny";
import FormCampaign from "./components/CreateCampaign/FormCampaign";
import FormCampaign2 from "./components/CreateCampaign/Formcampaign2";
import FormCampaign3 from "./components/CreateCampaign/FormCampaign3";
import CampForm from "./components/YourCampaigns/campForm";
import { useHistory } from "react-router-dom";
import Admin from "./admin";
import CompanyDetail from "./Create_company/allCompanies";
import EditCompanyForm from "./Create_company/editCompany";
import ProtectedRoute from "./protected-route";



function App() {
  const history = useHistory();
  const [role, setrole] = useState();
  const [isLoggedin, setisLoggedin] = useState();
  const data = JSON.parse(localStorage.getItem("login"));
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     console.log("token found");
  //     setisLoggedin(true);
  //   } else {
  //     console.log("token not found");
  //     setisLoggedin(false);
  //   }
  // }, []);

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Login} />
        <ProtectedRoute isAuth  path="/marketing-plan" component={MarketingPlan} />
        <ProtectedRoute isAuth  path="/create-campaign" component={FormCampaign } />
        <ProtectedRoute isAuth  path="/create-campaign2" component={FormCampaign2  } />
        <ProtectedRoute isAuth  path="/create-campaign3" component={FormCampaign3 } />
        <ProtectedRoute isAuth  path="/create-campaign4" component={CreateCampaign4 } />



      </Switch>
    </Router>
  )

  if (isLoggedin) {
    return <p>Logged In</p>
  } else {
    return <p>Not Logged In</p>
  }

  return (
    <Router>
      <div>
        {isLoggedin ? (
          <div>
            {data.isAdmin === true ? (
              <Switch>
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
                <Route path="/editCompany/:id">
                  <EditCompanyForm />
                </Route>
                <Route path="/companyDetails">
                  <CompanyDetail />
                </Route>
              </Switch>
            ) : (
              <Switch>
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
              </Switch>
            )}
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
