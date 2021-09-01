import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
import { HashRouter as Router, Switch } from "react-router-dom";
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
import UpdateFormCampaign from "./components/UpdateCampaign/UpdateFormCampaign";
import UpdateFormCampaign2 from "./components/UpdateCampaign/UpdateFormcampaign2";
import UpdateFormCampaign3 from "./components/UpdateCampaign/UpdateFormCampaign3";
import UpdateCampaign4 from "./components/UpdateCampaign/UpdateCampaign4";
import AllCampForm from "./admincampaign/campForm";

function App() {
  // const history = useHistory();
  // const [role, setrole] = useState();
  // const [isLoggedin, setisLoggedin] = useState();
  // const data = JSON.parse(localStorage.getItem("login"));
  // const token = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Login} />
        <ProtectedRoute
          isAuth
          path="/marketing-plan"
          component={MarketingPlan}
        />
        <ProtectedRoute
          isAuth
          exact
          path="/create-campaign"
          component={FormCampaign}
        />
        <ProtectedRoute
          isAuth
          path="/create-campaign2"
          component={FormCampaign2}
        />
        <ProtectedRoute
          isAuth
          path="/create-campaign3"
          component={FormCampaign3}
        />
        <ProtectedRoute
          isAuth
          path="/create-campaign4"
          component={CreateCampaign4}
        />
        <ProtectedRoute isAuth path="/your-campaigns" component={CampForm} />
        <ProtectedRoute
          isAuth
          isAdmin
          path="/Create-User"
          component={SignUPForm}
        />
        <ProtectedRoute
          isAuth
          path={`/edit-campaign/:id`}
          component={UpdateFormCampaign}
        />
        <ProtectedRoute
          isAuth
          path={`/edit-campaign2/:id`}
          component={UpdateFormCampaign2}
        />
        <ProtectedRoute
          isAuth
          path={`/edit-campaign3/:id`}
          component={UpdateFormCampaign3}
        />
        <ProtectedRoute
          isAuth
          path={`/edit-campaign4/:id`}
          component={UpdateCampaign4}
        />
        <ProtectedRoute isAdmin isAuth path="/User-List" component={UserList} />
        <ProtectedRoute isAuth isAdmin path="/User/:id" component={EditForm} />
        <ProtectedRoute
          isAdmin
          isAuth
          path="/user-company/:id"
          component={Company}
        />
        <ProtectedRoute
          isAuth
          isAdmin
          path="/editCompany/:id"
          component={EditCompanyForm}
        />
        <ProtectedRoute
          isAuth
          isAdmin
          path="/companyDetails"
          component={CompanyDetail}
        />
        <ProtectedRoute
          isAuth
          isAdmin
          path="/all-campaign"
          component={AllCampForm}
        />
      </Switch>
    </Router>
  );
}

export default App;
