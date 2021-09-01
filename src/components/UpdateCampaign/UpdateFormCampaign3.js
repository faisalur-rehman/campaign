import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import Editform3 from "./UpdateCampaign3";

let initialValues = {
  campaignType: "",
  thematic: "",
  startDate: "",
  endDate: "",
  campaignResult: "",
  recommend: "",
};

const UpdateFormCampaign3 = () => {
  const { id } = useParams();
  const history = useHistory();
  const [, setValues] = useState({});
  const { request, data } = useApi(api.getSingleCompaign);

  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(localStorage.getItem("updatedForm3"));
      if (data) {
        initialValues = data;
        setValues((prev) => ({ ...prev, ...data }));
      }
    }
    fetchData();
  }, []);
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
    if (!localStorage.getItem("updatedForm3")) {
      fetchData();
    } else {
      let data = JSON.parse(localStorage.getItem("updatedForm3"));
      initialValues = data;
      setValues((prev) => ({ ...prev, ...data }));
    }
  }, []);
  async function handleSubmit({ formValues }) {
    console.log("form3", formValues);
    try {
      localStorage.setItem("updatedForm3", JSON.stringify(formValues));
    } catch (_) {}
    history.push(`/edit-campaign4/${id}`);
  }

  return (
    <div>
      <Editform3
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        // error={error}
      />
    </div>
  );
};

export default UpdateFormCampaign3;
