import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import Campform3 from "./CreateCampaign3";
const initialValues3 = {
  // Network:"",
      Campaign_type: "", Thematic: "", startDate: "", endDate:"", Campaign_result:"",recommend:""

  };


const FormCampaign3 = () => {
  const history = useHistory();
//   const { error, request } = useApi(api.addAction);
  useEffect(() => {
    async function fetchData() {
    
    }
    fetchData();
  }, []);
  async function handleSubmit({ formValues }) {
    history.push("/create-campaign4");
    console.log("form3", formValues);
    try {
    
      localStorage.setItem("form3", JSON.stringify(formValues));
    } catch (_) {}
  }

  return (
    <div>
      <Campform3
        handleSubmit={handleSubmit}
        initialValues={initialValues3}
        // error={error}
      />
    </div>
  );
};

export default FormCampaign3;
