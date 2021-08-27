import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";

const CreateCampaign4 = () => {
  const history = useHistory();
  const { error, request } = useApi(api.CreateCampaign);

  async function handleSubmit() {
    const form3 = JSON.parse(localStorage.getItem("form3"));
    const form2 = JSON.parse(localStorage.getItem("form2"));   
    const c_id = JSON.parse(localStorage.getItem("company"));   
    console.log("form4",form3)
    console.log("form2",form2._id)
    const campaign={
      Campaign_type:form3.Campaign_type,
       thematic: form3.Thematic,
       start_date:form3.startDate,
       end_date:form3.endDate,
       actions:[
         
          form2._id
         ],
         company:c_id,
    }
  console.log("campaign",campaign)
    try {
      const { data } = await request(campaign);
      console.log("camp",data)
      // console.log("Login",data.isAdmin)
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("login",JSON.stringify(data));
     } catch (_) {}
  }
  return (
    <Layout>
      <section className="create_campaign_section" id="create_campaign_page_four">
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
                    Type de campagne :<span>Partenariat</span>
                  </span>
                </div>
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    Type d'action :<span> Action Concession</span>
                  </span>
                </div>
              </div>
              <div className="input_fields_details">
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    Thematic :<span>OV of the week</span>
                  </span>
                </div>
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    Start Date :<span></span>
                  </span>
                </div>
                <div className="page_four_single_field">
                  <a></a>
                  <span>
                    End Date :<span></span>
                  </span>
                </div>
              </div>
            </form>

            <div className="page_two_action_list">
              <div className="page_two_action_list_heading">
                <span>Action 1</span>
                <p>
                  Type d'action <small> Action Concession</small>
                </p>
                <a>
                  <i className="fas fa-ellipsis-h"></i>
                </a>
              </div>
              <div className="page_two_action_detail">
                <div className="page_two_action_detail_data">
                  <span>Targeting</span>
                  <p>Between 25 and 35 years old</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Medias/Channels</span>
                  <p>SMS</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Cost</span>
                  <p>500</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Volume</span>
                  <p>15000</p>
                </div>
              </div>
            </div>

            <div className="page_two_action_list">
              <div className="page_two_action_list_heading">
                <span>Action 1</span>
                <p>
                  Type d'action <small> Action Concession</small>
                </p>
                <a>
                  <i className="fas fa-ellipsis-h"></i>
                </a>
              </div>
              <div className="page_two_action_detail">
                <div className="page_two_action_detail_data">
                  <span>Targeting</span>
                  <p>Between 25 and 35 years old</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Medias/Channels</span>
                  <p>SMS</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Cost</span>
                  <p>500</p>
                </div>
                <div className="page_two_action_detail_data">
                  <span>Volume</span>
                  <p>15000</p>
                </div>
              </div>
            </div>
            <div className="next_back_button_box">
              <div className="next_back_button">
                <button onClick={() => history.push("/create-campaign3")}>
                  Back
                </button>
                <button  onClick={handleSubmit} >Create</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateCampaign4;
