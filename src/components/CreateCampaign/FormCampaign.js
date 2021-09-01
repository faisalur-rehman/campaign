import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import CampForm from "./CreateCampaign";

let initialValues = {
  Campaign: "",
  Thematic: "",
  startDate: "",
  EndDate: "",
  Action: "",
  age: "",
  target: "",
  Gender: "",
};

const FormCampaign = () => {
  const history = useHistory();
  const [, setValues] = useState({});
  // const { error, request } = useApi(api.loginUser);
  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(localStorage.getItem("form1"));
      if (localStorage.getItem("form1")) {
        initialValues = data.formValues;
        setValues((prev) => ({ ...prev, ...data.formValues }));
      }
    }
    fetchData();
  }, []);
  async function handleSubmit({ ...formValues }) {
    history.push("/create-campaign2");
    console.log("form1", formValues);

    try {
      localStorage.setItem("form1", JSON.stringify(formValues));
    } catch (_) {}
  }

  return (
    <div>
      <CampForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        // error={error}
      />
    </div>
  );
};

export default FormCampaign;
