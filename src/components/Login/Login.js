import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import LoginForm from "./LoginScreen";
import * as api from "../../api/api"

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const history = useHistory();
    const { error, request } = useApi(api.loginUser);
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      const { data } = await request({ ...formValues });
      // console.log("Login",data.isAdmin)
      localStorage.setItem("token", data.token);
      localStorage.setItem("login",JSON.stringify(data));
     
    if(data.isAdmin===true){
      history.push("/User-List");
    }
  
    else{
      history.push("/create-campaign");
    }
    window.location.reload()
    

    } catch (_) {}
  }

  return (
    <div>
      <LoginForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        error={error}
      />
    </div>
  );
};

export default Login;
