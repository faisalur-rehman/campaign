import "./App.css";
import React,{useState,useEffect} from 'react';
import Login from "./components/Login/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import YourCampaigns from "./components/YourCampaigns/YourCampaigns";
import CreateCampaign3 from "./components/CreateCampaign/CreateCampaign3";
import CreateCampaign4 from "./components/CreateCampaign/CreateCampaign4";
import MarketingPlan from "./components/MarketingPlan/MarketingPlan";
import SignUPForm from "./CreateUser/SignUPForm"
import UserList from "./users/UserList";
// import Edit from "./Edit/EditScreen";
import EditForm from "./Edit/edit";
import Company from "./Create_company/comapny";
import FormCampaign from "./components/CreateCampaign/FormCampaign";
import FormCampaign2 from "./components/CreateCampaign/Formcampaign2";
import FormCampaign3 from "./components/CreateCampaign/FormCampaign3";



function App() {
  const [role, setrole] = useState()
  const [isLoggedin, setisLoggedin] = useState(true)
  useEffect(() => {
    function Roles (){
      
      const data =JSON.parse(localStorage.getItem("login"));
      if(localStorage.getItem("token")){
        setisLoggedin(false);
      }
      else{
        setisLoggedin(true)
        setrole(data.isAdmin)

      }
     
      // setrole(data.isAdmin);
      console.log("role",data.isAdmin)
      
    }
    
    Roles();
   
  }, [])
  // console.log("res",role)
  return (  

    
      <Router>
         {/* <Route exact path="/">
    <Login />
  </Route> */}
        <div>
    {!isLoggedin?(
    <div>
      <p>login</p>
      <Switch>
      <Route path="/your-campaigns">
        <YourCampaigns />
      </Route>
      <Route path="/create-campaign">
        <FormCampaign />
      </Route>
      <Route path="/create-campaign2">
        <FormCampaign2/>
      </Route>
      <Route path="/create-campaign3">
        <FormCampaign3/>
      </Route>
      <Route path="/create-campaign4">
        <CreateCampaign4 />
      </Route>
      <Route path="/marketing-plan">
        <MarketingPlan />
        </Route>
      
 
     <Route exact path="/">
        <Login />
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
 <Route path="/user-company/:id">
   <Company/>
 </Route>
</Switch>
    </div>):(
    <p>logout\</p>,
    <Route exact path="/">
    <Login />
  </Route>
  
 
  )}
  
      {/* {role?( */}
      
        </div>
      


      {/* )} */}
</Router>        
      

  );
}

export default App;
