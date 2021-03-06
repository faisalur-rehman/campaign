import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";

const CreateCampaign4 = () => {
  const history = useHistory();
  const { request, data } = useApi(api.CreateCampaign);
  const form3 = JSON.parse(localStorage.getItem("form3"));
  const form21 = JSON.parse(localStorage.getItem("form21"));
  const form1 = JSON.parse(localStorage.getItem("form1"));
  console.log("form1", form1);
  console.log("form3", form3);
  async function handleSubmit() {
    const campaign = {
      campaignType: form3.Campaign_type,
      thematic: form3.Thematic,
      startDate: form3.startDate,
      endDate: form3.endDate,
      actions: [
        {
          actionType: form1.formValues.Action,
          target: form1.formValues.target,
          age: form1.formValues.age,
          gender: form1.formValues.Gender,
          channelType: form21.channel_type,
          channelCost: form21.cost,
          channelVolume: form21.Volume1,
        },
      ],
    };

    try {
      const { data } = await request(campaign);
      console.log("camp", data);
      localStorage.removeItem("form1");
      localStorage.removeItem("form21");
      localStorage.removeItem("form3");
    } catch (_) {}
  }
  return (
    <Layout>
      <section
        className="create_campaign_section"
        id="create_campaign_page_four"
      >
        <div className="campaign_progress_header">
          <div className="header_logo_part">
            <a>
              <span>Créer une campagne</span>
            </a>
          </div>
        </div>

        <div className="create_campaign_page_one">
          <div className="create_campaign_container">
            <div className="page_four_heading">
              <h2>Resume of the campaign</h2>
            </div>
            <form className="page_one_form_one">
              <div className="input_fields_details">
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    Type de campagne :<span>{form3.Campaign_type}</span>
                  </span>
                </div>
                <div className="page_four_single_field">
                  <a></a>

                  <span>
                    Type d'action :<span>{form1.formValues.Action}</span>
                  </span>
                </div>
              </div>
              <div className="input_fields_details">
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    Thematic :<span>{form3.Thematic}</span>
                  </span>
                </div>
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    Start Date :<span>{form3.startDate}</span>
                  </span>
                </div>
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    End Date :<span>{form3.endDate}</span>
                  </span>
                </div>
              </div>
            </form>

            <div className="page_two_action_list">
              <div className="page_two_action_list_heading">
                <span>Action 1</span>
                <p>
                  Type d'action <small> {form1.formValues.Action}</small>
                </p>
                <a>
                  <i className="fas fa-ellipsis-h"></i>
                </a>
              </div>
              <div className="page_two_action_detail">
                <div className="page_two_action_detail_data">
                  <span>Targeting</span>
                  <p>
                    {form1.formValues.target}/{form1.age}
                  </p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>channel-type</span>
                  <p>{form21.channel_type}</p>
                </div>

                <div className="page_two_action_detail_data">
                  <span>cost</span>
                  <p>{form21.cost}</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Volume</span>
                  <p>{form21.Volume1}</p>
                </div>
              </div>
            </div>
            {data && <p style={{ color: "green" }}>{data.message}</p>}
            <div className="next_back_button_box">
              <div className="next_back_button">
                <button onClick={() => history.push("/create-campaign3")}>
                  Back
                </button>
                <button onClick={handleSubmit}>Create</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateCampaign4;
