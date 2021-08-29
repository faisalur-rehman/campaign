import React from 'react'
import SignUPForm from './CreateUser/SignUPForm'
import UserList from './users/UserList'
import EditForm from './Edit/edit';
import Company from './Create_company/comapny';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
function Admin() {
    return (
        <div>
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
           </Switch>
        </div>
    )
}

export default Admin
