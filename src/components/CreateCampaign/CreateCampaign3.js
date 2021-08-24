import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";

const CreateCampaign3 = () => {
  const history = useHistory();
  return (
    <Layout>
      <section class="create_campaign_section" id="create_campaign_page_three">
        <div class="campaign_progress_header">
          <div class="header_logo_part">
            <a>
              <span>Créer une campagne</span>
            </a>
          </div>
        </div>

        <div class="create_campaign_page_one">
          <div class="create_campaign_container">
            <form class="page_one_form_one">
              <div class="input_fields_details">
                <div class="single_field">
                  <label>
                    Campaign type <span>*</span>
                  </label>
                  <select>
                    <option></option>
                  </select>
                </div>
                <div class="single_field">
                  <label>
                    Start date <span>*</span>
                  </label>
                  <div class="page_one_date_field">
                    <input type="date" />
                    <i class="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
              <div class="input_fields_details">
                <div class="single_field">
                  <label>
                    Thematic <span>*</span>
                  </label>
                  <input type="text" />
                </div>
                <div class="single_field">
                  <label>
                    End date <span>*</span>
                  </label>
                  <div class="page_one_date_field">
                    <input type="date" />
                    <i class="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
            </form>

            <div class="page_two_action_list">
              <div class="page_two_action_list_heading">
                <span>Action 1</span>
                <p>
                  Type d'action <small> Action Concession</small>
                </p>
                <a>
                  <i class="fas fa-ellipsis-h"></i>
                </a>
              </div>
              <div class="page_two_action_detail">
                <div class="page_two_action_detail_data">
                  <span>Targeting</span>
                  <p>Between 25 and 35 years old</p>
                </div>
                <div class="page_two_action_detail_data">
                  <span>Medias/Channels</span>
                  <p>SMS</p>
                </div>
                <div class="page_two_action_detail_data">
                  <span>Cost</span>
                  <p>500</p>
                </div>
                <div class="page_two_action_detail_data">
                  <span>Volume</span>
                  <p>15000</p>
                </div>
              </div>
            </div>

            <div class="add_action_section">
              <div class="form_one_add_action_box">
                <h2>Add an action</h2>
                <a>
                  <i class="fas fa-plus"></i>
                </a>
              </div>
            </div>
            <form class="page_one_form_one">
              <div class="input_fields_details">
                <div class="single_field">
                  <label>
                    Campaign result <span>*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div class="input_fields_details">
                <div class="single_field">
                  <label>
                    Do you recommend the service provider ?<span>*</span>
                  </label>
                  <textarea></textarea>
                </div>
              </div>
            </form>

            <div class="next_back_button_box">
              <div class="next_back_button">
                <button onClick={() => history.push("/create-campaign2")}>
                  Back
                </button>
                <button onClick={() => history.push("/create-campaign4")}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateCampaign3;
