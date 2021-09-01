import React from "react";
import { useHistory } from "react-router-dom";
import { Field, select } from "formik";
import Layout from "../Layout/Layout";
import AppForm from "../AppForm/AppForm";

const Campform3 = ({ initialValues, handleSubmit }) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <CreateCampaign3 />
    </AppForm>
  );
};

export default Campform3;
const CreateCampaign3 = () => {
  const history = useHistory();
  return (
    <Layout>
      <section
        className="create_campaign_section"
        id="create_campaign_page_three"
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
                    name="Campaign_type"
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
                    name="Thematic"
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
            <form className="page_one_form_one">
              <div className="input_fields_details">
                <div className="single_field">
                  <label>
                    Campaign result <span>*</span>
                  </label>
                  <Field name="Campaign_result" type="text" />
                </div>
              </div>
              <div className="input_fields_details">
                <div className="single_field">
                  <label>
                    Do you recommend the service provider ?<span>*</span>
                  </label>
                  <textarea name="recommend" className="text-area"></textarea>
                </div>
              </div>
            </form>

            <div className="next_back_button_box">
              <div className="next_back_button">
                <button onClick={() => history.push("/create-campaign2")}>
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

// export default CreateCampaign3;
