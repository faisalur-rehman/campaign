import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";

const UpdateCampaign4 = () => {
  const { id } = useParams();
  const history = useHistory();
  const { error, request, data } = useApi(api.UpdateCampaign);
  const form3 = JSON.parse(localStorage.getItem("updatedForm3"));
  const form2 = JSON.parse(localStorage.getItem("updateForm2"));
  const form1 = JSON.parse(localStorage.getItem("updatedForm1"));
  console.log("form1", form1);
  console.log("form2", form2);
  console.log("form3", form3);
  async function handleSubmit() {
    const campaign = {
      campaignType: form3.campaignType,
      thematic: form3.thematic,
      startDate: form3.startDate,
      endDate: form3.endDate,
      actions: [
        {
          actionType: form1.formValues.actionType,
          target: form1.formValues.target,
          age: form1.formValues.age,
          gender: form1.formValues.gender,
          channelType: form2.channelType,
          channelCost: form2.channelCost,
          channelVolume: form2.channelVolume,
        },
      ],
    };
    console.log("campaign", campaign);
    // console.log("form4", form2);
    try {
      const { data } = await request({ campaign, id });
      console.log("camp", data);
      localStorage.removeItem("updatedForm1");
      localStorage.removeItem("updateForm2");
      localStorage.removeItem("updatedForm3");
    } catch (_) {}
    // window.reload()
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
                    Type de campagne :<span>{form3.campaignType}</span>
                  </span>
                </div>
                <div className="page_four_single_field">
                  <a></a>

                  <span>
                    Type d'action :<span>{form1.formValues.actionType}</span>
                  </span>
                </div>
              </div>
              <div className="input_fields_details">
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    Thematic :<span>{form3.thematic}</span>
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
                  Type d'action <small> {form1.formValues.actionType}</small>
                </p>
                <a>
                  <i className="fas fa-ellipsis-h"></i>
                </a>
              </div>
              <div className="page_two_action_detail">
                <div className="page_two_action_detail_data">
                  <span>Targeting</span>
                  <p>
                    {form1.formValues.target}--{form1.formValues.age}
                  </p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>channel-type</span>
                  <p>{form2.channelType}</p>
                </div>

                <div className="page_two_action_detail_data">
                  <span>cost</span>
                  <p>{form2.channelCost}</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Volume</span>
                  <p>{form2.channelVolume}</p>
                </div>
              </div>
            </div>
            <p style={{ color: "green" }}>{data && data.message}</p>
            <div className="next_back_button_box">
              <div className="next_back_button">
                <button onClick={() => history.push(`/edit-campaign3/${id}`)}>
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

export default UpdateCampaign4;
