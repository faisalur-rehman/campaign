import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as api from "../api/api";
import Form from "./companyScreen"

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
      
          <Form
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        error={error}
      />
    </div>
  );
};

export default Company;
