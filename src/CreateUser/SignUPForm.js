
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignUp from "./SignUpScreen"
import useApi from "../hooks/useApi";
import * as api from "../api/api"
const initialValues = {
    username: "",
    company: "",
    password: "",
  };
function SignUPForm() {
    const history = useHistory();
    const { error, request } = useApi(api.CreateUser);

  async function handleSubmit({ formValues }) {
    // console.log("form", formValues);
    try {
      const { data } = await request({ ...formValues });
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (_) {}
  }

  return (
    <div>
      <SignUp
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        error={error}
      />
    </div>
  );
}

export default SignUPForm
