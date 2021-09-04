import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import useApi from "../hooks/useApi";
import * as api from "../api/api";
import { useHistory } from "react-router-dom";

const AllCampForm = () => {
  const [company, setCompany] = useState("");
  const history = useHistory();
  const campaigns = useApi(api.getAllCampaign);
  const allCompanies = useApi(api.allCompany);
  const singleCompanyCampaign = useApi(api.getCompaignOfSingleCompany);

  const deleteCampaign = useApi(api.deleteCampaign);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await campaigns.request();
        console.log("allCampaign", data);
      } catch (error) {}
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await allCompanies.request();
        console.log("allCompanies", data);
      } catch (error) {}
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await singleCompanyCampaign.request({
          companyId: company,
        });
        console.log("allCampaigns of company", data);
      } catch (error) {}
    }
    fetchData();
  }, [company]);
  async function handleCompanyChange({ target }) {
    setCompany(target.value);
  }
  async function handleEdit(id) {
    history.push(`/edit-campaign/${id}`);
  }

  async function handleDelete(id) {
    try {
      const { data } = await deleteCampaign.request(id);
      window.location.reload();
    } catch (_) {}
  }

  console.log("company", company);

  return (
    <div>
      <Layout>
        <section className="purchase_product_history" id="all_product_listing">
          <div className="admin_container">
            <div style={{ width: "20%", margin: "120px 0 0 0" }}>
              <select onChange={handleCompanyChange}>
                <option disabled value="" selected>
                  Select Company
                </option>
                {allCompanies.data &&
                  allCompanies.data.map((company) => (
                    <option value={company._id}>{company.company}</option>
                  ))}
              </select>
            </div>
            <div className="purchase_product_history_table">
              <div className="view_Employee_Leave_table">
                <h3>
                  <strong>User List:</strong>
                </h3>
                <table>
                  <tr>
                    <th>CampaignType</th>
                    <th>Thematic</th>

                    <th>edit</th>
                    <th>Delete</th>
                  </tr>
                  {singleCompanyCampaign.data ? (
                    singleCompanyCampaign.data.campaigns.map((data) => (
                      <>
                        <tr>
                          <td>{data.campaignType}</td>
                          <td>{data.thematic}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleEdit(data._id)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(data._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <p>Please Select Company</p>
                  )}
                </table>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};
export default AllCampForm;
