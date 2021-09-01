import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import EditCampaign from "./UpdateCampaign";

let initialValues = {
  campaignType: "",
  thematic: "",
  startDate: "",
  endDate: "",
  actionType: "",
  age: "",
  target: "",
  gender: "",
};

const UpdateFormCampaign = () => {
  const { id } = useParams();
  const history = useHistory();
  const [, setValues] = useState({});
  const { request, data } = useApi(api.getSingleCompaign);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(id);
        console.log("campaign data", data);
        initialValues = data.campaign;
        initialValues.actionType = data.campaign.actions[0].actionType;
        initialValues.age = data.campaign.actions[0].age;
        initialValues.gender = data.campaign.actions[0].gender;
        initialValues.target = data.campaign.actions[0].target;
        initialValues.startDate = data.campaign.startDate.split("T")[0];
        initialValues.endDate = data.campaign.endDate.split("T")[0];
        setValues((prev) => ({ ...prev, ...data.campaign }));
      } catch (_) {}
    }
    if (!localStorage.getItem("updatedForm1")) {
      fetchData();
    } else {
      let data = JSON.parse(localStorage.getItem("updatedForm1"));
      initialValues = data.formValues;
      setValues((prev) => ({ ...prev, ...data.formValues }));
    }
  }, []);
  async function handleSubmit({ ...formValues }) {
    // console.log("form1", formValues);
    localStorage.setItem("updatedForm1", JSON.stringify({ ...formValues }));
    history.push(`/edit-campaign2/${id}`);
  }

  return (
    <div>
      <EditCampaign
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        // error={error}
      />
    </div>
  );
};

export default UpdateFormCampaign;
