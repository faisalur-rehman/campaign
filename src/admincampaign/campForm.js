import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import useApi from "../hooks/useApi";
import * as api from "../api/api";
import { Link, useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import YourCampaigns from "./YourCampaigns";

const AllCampForm = () => {
  const history = useHistory()
  const [company, setcompany] = useState();
  // const { request } = useApi(api.loginUser);
  const campaigns = useApi(api.getAllCampaign);
  // const userCompany = useApi(ap.getUserCompany);

  const deleteCampaign = useApi(api.deleteCampaign);
  useEffect(() => {
    async function fetchData() {
      try {
        // const { data } = await camp.request();
        // const { data } = await userCompany.request();
        const { data } = await campaigns.request();
        console.log("allCampaign", data);
        // const { data2 } = await camp.request(company);
      } catch (error) {}
    }
    fetchData();
  }, []);
  async function handleEdit(id) {
   history.push(`/edit-campaign/${id}`)
  }

  async function handleDelete(id) {
    try {
      const { data } = await deleteCampaign.request(id);
      window.location.reload();
    } catch (_) {}
  }

  return (
    <div>
      <Layout>
        <section className="purchase_product_history" id="all_product_listing">
          <div className="admin_container">
            <div className="purchase_product_history_table">
              <strong>User List:</strong>
              <div className="table_wrapper_scroll_x my_custom_scrollbar">
                <table>
                  <tr>
                    <th>CampaignType</th>
                    <th>Thematic</th>

                    <th>edit</th>
                    <th>Delete</th>
                  </tr>
                  {campaigns.data &&
                    campaigns.data.campaigns.map((data) => (
                      <>
                        <tr>
                          <td>{data.campaignType}</td>
                          <td>
                            {data.thematic}
                            
                          </td>
                          <td>
                            <button className="button" onClick={()=>handleEdit(data._id)}>Edit</button>
                          </td>
                          <td>
                            <button className="button" onClick={()=>handleDelete(data._id)}>Delete</button>
                          </td>
                        </tr>
                      </>
                    ))}
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
