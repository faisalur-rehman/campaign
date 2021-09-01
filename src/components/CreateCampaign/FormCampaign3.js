import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Campform3 from "./CreateCampaign3";

let initialValues3 = {
  Campaign_type: "",
  Thematic: "",
  startDate: "",
  endDate: "",
  Campaign_result: "",
  recommend: "",
};

const FormCampaign3 = () => {
  const history = useHistory();
  const [, setValues] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(localStorage.getItem("form3"));
      if (data) {
        initialValues3 = data;
        setValues((prev) => ({ ...prev, ...data }));
      }
    }
    fetchData();
  }, []);
  async function handleSubmit({ formValues }) {
    console.log("form3", formValues);
    try {
      localStorage.setItem("form3", JSON.stringify(formValues));
    } catch (_) {}
    history.push("/create-campaign4");
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
