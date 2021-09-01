import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import UpdateCampform2 from "./UpdateCampaign2";

let initialValues = {
  channelType: "",
  channelVolume: "",
  channelCost: "",
};

const UpdateFormCampaign2 = () => {
  const { id } = useParams();
  const history = useHistory();
  const [, setValues] = useState({});
  const { request, data } = useApi(api.getSingleCompaign);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(id);
        console.log("campaign data", data);
        initialValues = data.campaign.actions[0];
        console.log("i valu", initialValues);
        setValues((prev) => ({ ...prev, ...data.campaign.actions }));
      } catch (_) {}
    }
    if (!localStorage.getItem("updateForm2")) {
      fetchData();
    } else {
      let data = JSON.parse(localStorage.getItem("updateForm2"));
      initialValues = data;
      setValues((prev) => ({ ...prev, ...data }));
    }
  }, []);
  async function handleSubmit({ formValues }) {
    localStorage.setItem("updateForm2", JSON.stringify(formValues));
    history.push(`/edit-campaign3/${id}`);
  }

  return (
    <div>
      <UpdateCampform2
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        // error={error}
      />
    </div>
  );
};

export default UpdateFormCampaign2;
