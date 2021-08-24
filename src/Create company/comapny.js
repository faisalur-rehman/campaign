import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import LoginForm from "./LoginScreen";
import * as api from "../../api/api"

const initialValues = {
name: "",
};

const Company = () => {
  const history = useHistory();
    const { error, request } = useApi(api.CreateCompany);

  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      const { data } = await request({ ...formValues });
      localStorage.setItem("token", data.token);
      history.push("/your-campaigns");
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

export default Company;
