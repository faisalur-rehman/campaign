import React, { useState,useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import Edit from "./EditScreen"
import useApi from "../hooks/useApi";
import "./edit.css"

import * as api from "../api/api"
import { useParams } from "react-router-dom";
import EditC from "./editScreen";
const initialValues = {
        name:"" 
 };
  
function EditCompanyForm() {
    const [, setValue] = useState();
    // const history = useHistory();
    const { id } = useParams();
   
    const UpdateCompany=useApi(api.UpdateCompany)
    
    // const getUser = useApi(api.Getid);
    const UpdateUser=useApi(api.UpdateUser)
 
  async function handleSubmit({ formValues }) {
    // console.log("form", formValues);
    try {
       const {data}= await UpdateCompany.request({ ...formValues,id} );;
    //   localStorage.setItem("token", data.token);
    console.log("update",data)
        //  message=data.message;
    //   history.push("/");
    } catch (_) {}
  }

//   console.log(UpdateUser.data)
  return (
    <div>
      <EditC
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        // updateMessage={UpdateUser.message}
        
        // error={error}
      />
    </div>
  );
}

export default EditCompanyForm;
