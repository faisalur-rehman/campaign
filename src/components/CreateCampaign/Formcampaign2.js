import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import Campform2 from "./CreateCampaign2";

let initialValues2 = {
  channel_type: "",
  Volume1: "",
  cost: "",
};

const FormCampaign2 = () => {
  const history = useHistory();
  const [, setValues] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(localStorage.getItem("form21"));
      if (localStorage.getItem("form21")) {
        initialValues2 = data;
        setValues((prev) => ({ ...prev, ...data }));
      }
    }
    fetchData();
  }, []);
  async function handleSubmit({ formValues }) {
    history.push("/create-campaign3");
    localStorage.setItem("form21", JSON.stringify(formValues));
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
