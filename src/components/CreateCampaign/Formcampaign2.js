import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import Campform2 from "./CreateCampaign2";
const initialValues2 = {
  // Network:"",
  sms:"",
      channel_type: "", Volume1: "", cost: "" 
  };


const FormCampaign2 = () => {
  const history = useHistory();
  const { error, request } = useApi(api.addAction);
  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(localStorage.getItem("data2"));
       console.log("data2",data)
      if (localStorage.getItem("data2")) {
        initialValues2.channel_type = data.channel_type;
       
        // initialValues2.Network = data.Network;
        initialValues2.Volume1 = data.Volume1;
        
        initialValues2.cost = data.cost;
        // initialValues2.Volume2 = data.Volume2;
      } else {
        // initialValues2.Media = "";
        // initialValues2.Network = "";
        // initialValues2.CostHT = "";
        // initialValues2.Volume = "";
        // initialValues2.Sms = "";
        // initialValues2.costht2 = "";
        // initialValues2.Volume2 = "";
      }
    }
    fetchData();
  }, []);
  async function handleSubmit({ formValues }) {
    history.push("/create-campaign3");
    // console.log("form2", formValues);
    
     localStorage.setItem("form21", JSON.stringify(formValues));
    //  console.log("Media",Media)
    const form =JSON.parse(localStorage.getItem("form1"));
    const action=form.formValues.Action;
    const target= form.formValues.target;
    const addAction={
      action_type:form.formValues.Action,
      target:form.formValues.target,
      channelArray:[
        {
        channel_type:formValues.channel_type,
        Volume:formValues.Volume1,
        cost:formValues.cost
        }
      ]
    } 
    // console.log("form1",addAction)
    try {
      const { data } = await request(addAction);
      console.log("action",data)
      localStorage.setItem("form2", JSON.stringify(data));
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
