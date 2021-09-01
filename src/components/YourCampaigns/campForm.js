import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import YourCampaigns from "./YourCampaigns";

const CampForm = () => {
  const [company, setcompany] = useState();
  // const { request } = useApi(api.loginUser);
  const userCompany = useApi(api.getUserCompany);
  const inProgress = useApi(api.getInProgressCampaign);
  const completed = useApi(api.getCompletedCampaign);
  const deleteCampaign = useApi(api.deleteCampaign);
  useEffect(() => {
    async function fetchData() {
      try {
        // const { data } = await camp.request();
        const { data } = await userCompany.request();
        console.log("user company", data);
        // const { data2 } = await camp.request(company);
      } catch (error) {}
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        // const { data } = await camp.request();
        await inProgress.request(company);
        await completed.request(company);
      } catch (error) {}
    }
    fetchData();
  }, [company]);
  console.log("your_campaign", inProgress.data);
  function handleChange(e) {
    setcompany(e.target.value);
    // console.log("company",company);
  }

  async function handleDelete(id) {
    try {
      const { data } = await deleteCampaign.request(id);
      window.location.reload();
    } catch (_) {}
  }

  return (
    <div>
      {/* <YourCampaigns /> */}
      <Layout>
        <section className="campaign_progress_section" id="campaign_progress">
          <div className="campaign_progress_header">
            <div className="header_logo_part">
              <a>
                <span>Vos campagnes</span>
              </a>
            </div>
            <div className="campaign_progress_campaign_list">
              <a>
                <span>Concession (Car Dealer)</span>
                <select onChange={handleChange}>
                  {userCompany.data && (
                    <>
                      <option value="" selected disabled>
                        Select
                      </option>
                      <option
                        value={userCompany.data.company._id}
                        label={userCompany.data.company.company}
                      />
                    </>
                  )}
                </select>
              </a>
            </div>
          </div>
          <div className="campaign_progress_body">
            <div className="campaign_inprogrss_done_detail">
              <div className="campaign_inprogrss_done_detail_heading">
                <h2>In progress</h2>
              </div>
              <div className="campaign_inprogrss_done_detail_list">
                {inProgress.data &&
                  inProgress.data.campaigns.map((data) => (
                    <div className="signle_campaign_box">
                      <div className="signle_campaign_box_main">
                        <div className="signle_campaign_box_heading">
                          <strong>{data.thematic}</strong>
                        </div>
                        <div className="signle_campaign_box_detail">
                          <div className="campaign_name">
                            <span>{data.campaignType}</span>
                          </div>
                          <div className="campaign_date">
                            <span>
                              S{data.week}{" "}
                              {new Date(data.startDate).toDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <i
                        class="fas fa-trash-alt"
                        style={{ cursor: "pointer", marginTop: 10 }}
                        onClick={() => handleDelete(data._id)}
                      ></i>
                      <Link
                        to={`/edit-campaign/${data._id}`}
                        style={{ marginLeft: 20 }}
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            <div className="campaign_inprogrss_done_detail">
              <div className="campaign_inprogrss_done_detail_heading">
                <h2>Done</h2>
              </div>
              <div className="campaign_inprogrss_done_detail_list">
                {completed.data &&
                  completed.data.campaigns.map((data) => (
                    <div className="signle_campaign_box">
                      <div className="signle_campaign_box_main">
                        <div className="signle_campaign_box_heading">
                          <strong>{data.thematic}</strong>
                        </div>
                        <div className="signle_campaign_box_detail">
                          <div className="campaign_name">
                            <span>{data.campaignType}</span>
                          </div>
                          <div className="campaign_date">
                            <span>
                              S{data.week}{" "}
                              {new Date(data.startDate).toDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
      {/*    
          <YourCampaigns
          data={request.data && request.data}
          initialValues={initialValues}
          handleChange={handleChange}
          />   */}
    </div>
  );
};
export default CampForm;
