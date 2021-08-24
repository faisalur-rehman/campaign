import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";

const CreateCampaign2 = () => {
  const history = useHistory();
  return (
    <Layout>
      <section class="create_campaign_section" id="create_campaign_page_two">
        <div class="campaign_progress_header">
          <div class="header_logo_part">
            <a>
              <span>Créer une campagne</span>
            </a>
          </div>
        </div>

        <div class="create_campaign_page_one">
          <div class="create_campaign_page_two_container">
            <div class="page_two_heading">
              <h2>Medias/Channels</h2>
            </div>
            <form class="page_one_form_one">
              <div class="input_fields_details">
                <div class="single_field">
                  <select>
                    <option disabled selected>
                      Select your media
                    </option>
                  </select>
                </div>
              </div>
            </form>

            <form class="page_two_form_two">
              <div class="page_two_input_fields_details">
                <div class="page_two_single_field">
                  <label class="hidden_label">Social networks</label>
                  <input type="text" placeholder="Social networks" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Cost HT (en €)<span>*</span>
                  </label>
                  <input type="text" placeholder="500" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Volume<span>*</span>
                  </label>
                  <input type="text" placeholder="15000" />
                </div>
              </div>
              <div class="page_two_input_fields_details">
                <div class="page_two_single_field">
                  <label class="hidden_label">SMS</label>
                  <input type="text" placeholder="SMS" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Cost HT (en €)<span>*</span>
                  </label>
                  <input type="text" placeholder="200" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Volume<span>*</span>
                  </label>
                  <input type="text" placeholder="5000" />
                </div>
              </div>
            </form>

            <div class="page_two_add_action_btn">
              <div class="page_two_add_action">
                <button>Add the action</button>
              </div>
            </div>

            <div class="next_back_button_box">
              <div class="next_back_button">
                <button onClick={() => history.push("/create-campaign")}>
                  Back
                </button>
                <button onClick={() => history.push("/create-campaign3")}>
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

export default CreateCampaign2;
