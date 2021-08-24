import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";

const CreateCampaign4 = () => {
  const history = useHistory();
      
  return (
    <Layout>
      <section class="create_campaign_section" id="create_campaign_page_four">
        <div class="campaign_progress_header">
          <div class="header_logo_part">
            <a>
              <span>Créer une campagne</span>
            </a>
          </div>
        </div>

        <div class="create_campaign_page_one">
          <div class="create_campaign_container">
            <div class="page_four_heading">
              <h2>Resume of the campaign</h2>
            </div>
            <form class="page_one_form_one">
              <div class="input_fields_details">
                <div class="page_four_single_field">
                  <a></a>
                  <span>
                    Type de campagne :<span>Partenariat</span>
                  </span>
                </div>
                <div class="page_four_single_field">
                  <a></a>
                  <span>
                    Type d'action :<span> Action Concession</span>
                  </span>
                </div>
              </div>
              <div class="input_fields_details">
                <div class="page_four_single_field">
                  <a></a>
                  <span>
                    Thematic :<span>OV of the week</span>
                  </span>
                </div>
                <div class="page_four_single_field">
                  <a></a>
                  <span>
                    Start Date :<span></span>
                  </span>
                </div>
                <div class="page_four_single_field">
                  <a></a>
                  <span>
                    End Date :<span></span>
                  </span>
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
            <div class="next_back_button_box">
              <div class="next_back_button">
                <button onClick={() => history.push("/create-campaign3")}>
                  Back
                </button>
                <button>Create</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateCampaign4;
