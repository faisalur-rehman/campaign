import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Field } from "formik";
import AppForm from "../AppForm/AppForm";

const UpdateCampform2 = ({ initialValues, handleSubmit }) => {
  console.log("inside campaign 2nd");
  const { id } = useParams();
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <CreateCampaign2 id={id} />
    </AppForm>
  );
};

export default UpdateCampform2;
const CreateCampaign2 = ({ id }) => {
  const history = useHistory();
  return (
    <Layout>
      <section
        className="create_campaign_section"
        id="create_campaign_page_two"
      >
        <div className="campaign_progress_header">
          <div className="header_logo_part">
            <a>
              <span>Créer une campagne</span>
            </a>
          </div>
        </div>

        <div className="create_campaign_page_one">
          <div className="create_campaign_page_two_container">
            <div className="page_two_heading">
              <h2>Medias/Channels</h2>
            </div>
            <div className="page_two_form_two">
              <div className="page_two_input_fields_details">
                <div className="page_two_single_field">
                  <label className="hidden_label">Social networks</label>
                  <Field
                    name="channelType"
                    as="select"
                    classNameName="my-select"
                    required
                  >
                    <option selected disabled label="Select Channel" />
                    <option value="Press" label="Press" />
                    <option value="Radio" label="Radio" />
                    <option value="TV" label="TV" />
                    <option value="Reseaux Sociaux" label="Reseaux Sociaux" />
                    <option value="Emails" label="Emails" />
                    <option value="Sms" label="Sms" />
                  </Field>
                </div>
                <div className="page_two_single_field">
                  <label>
                    Cost HT (en €)<span>*</span>
                  </label>
                  <Field
                    name="channelCost"
                    type="text"
                    placeholder="500"
                    required
                  />
                </div>
                <div className="page_two_single_field">
                  <label>
                    Volume<span>*</span>
                  </label>
                  <Field
                    name="channelVolume"
                    type="text"
                    placeholder="15000"
                    required
                  />
                </div>
              </div>
              <div className="page_two_input_fields_details"></div>
            </div>

            <div className="page_two_add_action_btn">
              <div className="page_two_add_action">
                <button type="submit">Add the action</button>
              </div>
            </div>

            <div className="next_back_button_box">
              <div className="next_back_button">
                <button onClick={() => history.push(`/edit-campaign/${id}`)}>
                  Back
                </button>
                <button type="submit">Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
