import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
// import * as api from "../../api/api"
// import useApi from "../../hooks/useApi";
import { Field ,select} from "formik";
import AppForm from "../AppForm/AppForm";

const initialValues={
  date:""
}

// import { useHistory } from "react-router";
const CampForm = ({ initialValues, handleSubmit}) => {
  // console.log("error", error)
  // console.log(initialValues);
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <CreateCampaign/>
    </AppForm>
  );
};
export default CampForm;


const CreateCampaign = () => {


  // const history = useHistory();
  
  return (
    <Layout>
      <section className="create_campaign_section" id="create_campaign_page_one">
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
        name="Campaign" as="select" classNameName="my-select"
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
                  <Field type="text" name="Thematic"/>
                </div>
                <div className="single_field">
                  <label>
                    End date <span>*</span>
                  </label>
                  <div className="page_one_date_field">
                    <Field name="EndDate" type="date" />
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
            </form>
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
                    Add Action <span>*</span>
                  </label>
                  <Field
        name="Action" as="select" className="my-select"
      >
        <option value="Action Constructer" label="Action Constructer" />
        <option value="Action Concession" label="Action Concession" />
       
      </Field>
                </div>
              </div>
              <div className ="input_fields_details">
                <div className="target_heading">
                  <h4>Targeting</h4>
                </div>
                <div className="single_field">
                <Field
                  name="target" as="select" classNameName="my-select"
      >
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
                      type="number"
                      placeholder="Between 25 and 45 years old"
                    />
                  </div>
                </div>
                <div className="single_field">
                  <label>Gender</label>
                  <div className="page_one_date_field">
                    <Field name="Gender" type="text" />
                  </div>
                </div>
              </div>
            </form>
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
