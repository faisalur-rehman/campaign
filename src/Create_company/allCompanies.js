import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import * as api from "../api/api";
import { useParams } from "react-router-dom";
import DetailForm from "./allCompaniesScreen";
const initialValues = {
  name: "",
};

const CompanyDetail = () => {
  const request = useApi(api.allCompany);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request.request();
      } catch (error) {}
    }
    fetchData();
  }, []);
  console.log("company", request.data);

  return (
    <div>
      <DetailForm
        data={request.data && request.data}
        initialValues={initialValues}
      />
    </div>
  );
};

export default CompanyDetail;
