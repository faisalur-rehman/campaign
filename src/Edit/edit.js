import React, { useState,useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Edit from "./EditScreen"
import useApi from "../hooks/useApi";
import * as api from "../api/api"
import { useParams } from "react-router-dom";
const initialValues = {
    username: "",
    password: "",
  };
  
function EditForm() {
    const [, setValue] = useState();
    // const history = useHistory();
    const { id } = useParams();
    // console.log(id);
    
    
    const getUser = useApi(api.Getid);
    const UpdateUser=useApi(api.UpdateUser)
    
useEffect(() => {
    async function fetchData(){
         try{
            const {data}= await getUser.request({id})
            // console.log("Id",data.user.company) 
            initialValues.username=data.user.username;
            initialValues.password=data.user.password;
            initialValues.company=data.user.company;
            setValue(initialValues);
        }
         catch(_){
             
         }

    }
 fetchData();
}, [])
// console.log(UpdateUser.data)

  async function handleSubmit({ formValues }) {
    // console.log("form", formValues);
    try {
       const {data}= await api.UpdateUser({ ...formValues,id} );
    //   localStorage.setItem("token", data.token);
    console.log("update",data.message)
        //  message=data.message;
    //   history.push("/");
    } catch (_) {}
  }

  console.log(UpdateUser.data)
  return (
    <div>
      <Edit
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        updateMessage={UpdateUser.message}
        
        // error={error}
      />
    </div>
  );
}

export default EditForm
