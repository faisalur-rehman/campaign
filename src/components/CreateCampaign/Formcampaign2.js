import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import Campform2 from "./CreateCampaign2";
const initialValues2 = {
  Media: "",
  Network: "",

  Sms: "",
  costht2: "",
  Volume2: "",
      Media: [{ channel_type: "", Volume1: "", cost: "" }],
  }


const FormCampaign2 = () => {
  const history = useHistory();
  // const { error, request } = useApi(api.loginUser);
  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(localStorage.getItem("data2"));
       console.log("data2",data)
      if (localStorage.getItem("data2")) {
        initialValues2.Media.channel_type = data.Media.channel_type;
        initialValues2.Network = data.Network;
        // initialValues2.CostHT = data.Media.cost;
        initialValues2.Media.Volume1 = data.Media.Volume1;
        initialValues2.Sms = data.Sms;
        initialValues2.Media.cost = data.Media.cost;
        initialValues2.Volume2 = data.Volume2;
      } else {
        initialValues2.Media = "";
        initialValues2.Network = "";
        initialValues2.CostHT = "";
        initialValues2.Volume = "";
        initialValues2.Sms = "";
        initialValues2.costht2 = "";
        initialValues2.Volume2 = "";
      }
    }
    fetchData();
  }, []);
  async function handleSubmit({ formValues }) {
    history.push("/create-campaign3");
    console.log("form", formValues);
    try {
      localStorage.setItem("data2", JSON.stringify(formValues));
    } catch (_) {}
  }

  return (
    <div>
      <Campform2
        handleSubmit={handleSubmit}
        initialValues={initialValues2}
        // error={error}
      />
    </div>
  );
};

export default FormCampaign2;
