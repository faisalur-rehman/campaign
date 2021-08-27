import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Field ,select} from "formik";
import AppForm from "../AppForm/AppForm";

const Campform2 = ({initialValues, handleSubmit}) => {
  return ( <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
    <CreateCampaign2
  
    />
  </AppForm> );
}
 
export default Campform2;
const CreateCampaign2 = () => {
  const history = useHistory();
  return (
    <Layout>
      <section className="create_campaign_section" id="create_campaign_page_two">
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
           <form className="page_one_form_one">
              <div className="input_fields_details">
                <div className="single_field">
            <Field
        name= "channel_type" as="select" classNameName="my-select"
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

            
            <form className="page_two_form_two">
              <div className="page_two_input_fields_details">
                <div className="page_two_single_field">
                  <label className="hidden_label">Social networks</label>
                  <Field  type="text" placeholder="Social networks" />
                </div>
                <div className="page_two_single_field">
                  <label>
                    Cost HT (en €)<span>*</span>
                  </label>
                  <Field name= "cost" type="text" placeholder="500" />
                </div>
                <div className="page_two_single_field">
                  <label>
                    Volume<span>*</span>
                  </label>
                  <Field name="Volume1" type="text" placeholder="15000" />
                </div>
              </div>
              <div className="page_two_input_fields_details">
              </div>
            </form>

            <div className="page_two_add_action_btn">
              <div className="page_two_add_action">
                <button type="submit">Add the action</button>
              </div>
            </div>

            <div className="next_back_button_box">
              <div className="next_back_button">
                <button onClick={() => history.push("/create-campaign")}>
                  Back
                </button>
                <button >
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


