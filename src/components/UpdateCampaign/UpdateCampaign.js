import React from "react";
import Layout from "../Layout/Layout";

import { Field } from "formik";
import AppForm from "../AppForm/AppForm";

const EditCampaign = ({ initialValues, handleSubmit }) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <CreateCampaign />
    </AppForm>
  );
};
export default EditCampaign;

const CreateCampaign = () => {
  return (
    <Layout>
      <section
        className="create_campaign_section"
        id="create_campaign_page_one"
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
            <div className="page_one_form_one">
              <div className="input_fields_details">
                <div className="single_field">
                  <label>
                    Campaign type <span>*</span>
                  </label>

                  <Field
                    name="campaignType"
                    as="select"
                    classNameName="my-select"
                    required
                  >
                    <option selected disabled value="" label="Select" />
                    <option value="Partenariats" label="Partenariats" />
                    <option value="Action VN" label="Action VN" />
                    <option value="Action Vo" label="Acyion Vo" />
                    <option value="Action VU" label="Action VU" />
                  </Field>
                </div>

                <div className="single_field">
                  <label>
                    Start date <span>*</span>
                  </label>
                  <div className="page_one_date_field">
                    <Field name="startDate" type="date" required />
                  </div>
                </div>
              </div>
              <div className="input_fields_details">
                <div className="single_field">
                  <label>
                    Thematic <span>*</span>
                  </label>
                  <Field
                    type="text"
                    name="thematic"
                    required
                    placeholder="Thematic"
                  />
                </div>
                <div className="single_field">
                  <label>
                    End date <span>*</span>
                  </label>
                  <div className="page_one_date_field">
                    <Field name="endDate" type="date" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="add_action_section">
              <div className="form_one_add_action_box">
                <h2>Add an action</h2>
                <a>
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="page_one_form_one">
              <div className="input_fields_details">
                <div className="single_field">
                  <label>
                    Add Action <span>*</span>
                  </label>
                  <Field
                    name="actionType"
                    as="select"
                    className="my-select"
                    required
                  >
                    <option value="" label="Select" selected disabled />
                    <option
                      value="Action Constructer"
                      label="Action Constructer"
                    />
                    <option
                      value="Action Concession"
                      label="Action Concession"
                    />
                  </Field>
                </div>
              </div>
              <div className="input_fields_details">
                <div className="target_heading">
                  <h4>Targeting</h4>
                </div>
                <div className="single_field">
                  <Field
                    name="target"
                    as="select"
                    classNameName="my-select"
                    required
                  >
                    <option value="" label="Select" selected disabled />

                    <option value="Clients actifs" label="Clients actifs" />
                    <option value="Clients inactifs" label="Clients inactifs" />
                    <option value="Autres" label="Autres" />
                  </Field>
                </div>
                <div className="single_field">
                  <label>Age</label>
                  <div className="page_one_date_field">
                    <Field
                      name="age"
                      placeholder="Between 25 and 45 years old"
                    />
                  </div>
                </div>
                <div className="single_field">
                  <label>Gender</label>
                  <div className="page_one_date_field">
                    <Field name="gender" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="next_back_button_box">
              <div className="next_back_button">
                <button type="submit">Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// export default CreateCampaign;
