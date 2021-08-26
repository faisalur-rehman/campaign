import React from "react";
// import { useHistory } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as api from "../api/api";
import Form from "./companyScreen"
import { useParams } from "react-router-dom"
const initialValues = {
name: "",
};

const Company = () => {
  // const history = useHistory();
    const { error, request } = useApi(api.CreateCompany);
    const { id } = useParams();
    // console.log("id",id)
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      const { data } = await request({ ...formValues,id });
      // localStorage.setItem("token", data.token);
      console.log("data",data);
    //   history.push("/your-campaigns");
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
