import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Field } from "formik";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import { useParams } from "react-router-dom";
import AppForm from "../AppForm/AppForm";
import campForm from "./campForm";

const YourCampaigns = ({ data, initialValues, handleChange }) => {
  return (
    // <AppForm data={data}>
    <ComapnyForm
      data={data}
      initialValues={initialValues}
      handleChange={handleChange}
    />
    // </AppForm>
  );
};

export default YourCampaigns;
const ComapnyForm = ({ data, handleChange }) => {
  return (
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
              <select
              // onChange={handleChange}
              >
                {data &&
                  data.map((data, index) => (
                    <option value={data.company} label={data.company} />
                  ))}
              </select>
            </a>
          </div>
        </div>
        <input
          type="text"
          className="searchTerm"
          placeholder="Search city here"
          onChange={handleChange}
        />
        <div className="campaign_progress_body">
          <div className="campaign_inprogrss_done_detail">
            <div className="campaign_inprogrss_done_detail_heading">
              <h2>In progress</h2>
            </div>
            <div className="campaign_inprogrss_done_detail_list">
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="campaign_inprogrss_done_detail">
            <div className="campaign_inprogrss_done_detail_heading">
              <h2>Done</h2>
            </div>
            <div className="campaign_inprogrss_done_detail_list">
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>

              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// export default YourCampaigns;
