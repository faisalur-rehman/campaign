import React from "react";
import { useHistory } from "react-router-dom";
import { Field ,select} from "formik";  
import Layout from "../Layout/Layout";
import AppForm from "../AppForm/AppForm";

const Campform3 = ({initialValues, handleSubmit}) => {
  return ( <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
    <CreateCampaign3
    />
  </AppForm> );
}
 
export default Campform3;
const CreateCampaign3 = () => {
  const history = useHistory();
  return (
    <Layout>
      <section className="create_campaign_section" id="create_campaign_page_three">
        <div className="campaign_progress_header">
          <div className="header_logo_part">
            <a>
              <span>Créer une campagne</span>
            </a>
          </div>
        </div>

        <div className="create_campaign_page_one">
          <div className="create_campaign_container">
            <form className="page_one_form_one">
              <div className="input_fields_details">
                <div className="single_field">
                  <label>
                    Campaign type <span>*</span>
                  </label>
                  <Field
        name="Campaign_type" as="select" classNameName="my-select"
      >
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
                    <Field name="startDate" type="date" />
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
              <div className="input_fields_details">
                <div className="single_field">
                  <label>
                    Thematic <span>*</span>
                  </label>
                  <Field name="Thematic" type="text" />
                </div>
                <div className="single_field">
                  <label>
                    End date <span>*</span>
                  </label>
                  <div className="page_one_date_field">
                    <Field name="endDate" type="date" />
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
            </form>

            {/* <div className="page_two_action_list">
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
            </div> */}

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
                  <textarea name="recommend"className="text-area"></textarea>
                </div>
              </div>
            </form>

            <div className="next_back_button_box">
              <div className="next_back_button">
                <button onClick={() => history.push("/create-campaign2")}>
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

// export default CreateCampaign3;
