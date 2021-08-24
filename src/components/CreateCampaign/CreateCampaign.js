import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
import * as api from "../../api/api"
import useApi from "../../hooks/useApi";
// import { useHistory } from "react-router";
const CreateCampaign = () => {
  const history = useHistory();
  function handleNext() {
    history.push("/create-campaign2");
  }
  // const history = useHistory();
  
  return (
    <Layout>
      <section class="create_campaign_section" id="create_campaign_page_one">
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
                    Campaign type <span>*</span>
                  </label>
                  <select>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="input_fields_details">
                <div class="target_heading">
                  <h4>Targeting</h4>
                </div>
                <div class="single_field">
                  <select>
                    <option selected disabled>
                      Select your target
                    </option>
                  </select>
                </div>
                <div class="single_field">
                  <label>Age</label>
                  <div class="page_one_date_field">
                    <input
                      type="number"
                      placeholder="Between 25 and 45 years old"
                    />
                  </div>
                </div>
                <div class="single_field">
                  <label>Gender</label>
                  <div class="page_one_date_field">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </form>
            <div class="next_back_button_box">
              <div class="next_back_button">
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateCampaign;
