import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Field ,select} from "formik";
import AppForm from "../AppForm/AppForm";

const Campform2 = ({initialValues, handleSubmit}) => {
  return ( <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
    <CreateCampaign2/>
  </AppForm> );
}
 
export default Campform2;
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
                <Field
        name={`Media.channel_type`} as="select" className="my-select"
      >
        <option label="Select Channle" />
        <option value="Press" label="Press" />
        <option value="Radio" label="Radio" />
        <option value="TV" label="TV" />
        <option value="Reseaux Sociaux" label="Reseaux Sociaux" />
        <option value="Emails" label="Emails" />
        <option value="Sms" label="Sms" />
       
      </Field>
                </div>
              </div>
            </form>

            <form class="page_two_form_two">
              <div class="page_two_input_fields_details">
                <div class="page_two_single_field">
                  <label class="hidden_label">Social networks</label>
                  <Field name="Network" type="text" placeholder="Social networks" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Cost HT (en €)<span>*</span>
                  </label>
                  <Field name={ `Media.cost`} type="text" placeholder="500" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Volume<span>*</span>
                  </label>
                  <Field name={`Media.Volume`} type="text" placeholder="15000" />
                </div>
              </div>
              <div class="page_two_input_fields_details">
                <div class="page_two_single_field">
                  <label class="hidden_label">SMS</label>
                  <Field name ="Sms" type="text" placeholder="SMS" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Cost HT (en €)<span>*</span>
                  </label>
                  <Field name ="costht2" type="text" placeholder="200" />
                </div>
                <div class="page_two_single_field">
                  <label>
                    Volume<span>*</span>
                  </label>
                  <Field name="Volume2" type="text" placeholder="5000" />
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
                <button type="submit">
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


