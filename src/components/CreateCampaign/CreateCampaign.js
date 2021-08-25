import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../Layout/Layout";
import * as api from "../../api/api"
import useApi from "../../hooks/useApi";
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
           
 
    <Field
        name="Campaign" as="select" className="my-select"
      >
        <option value="Partenariats" label="Partenariats" />
        <option value="Action VN" label="Action VN" />
        <option value="Action Vo" label="Acyion Vo" />
        <option value="Action VU" label="Action VU" />
      </Field>
                </div>
                
                <div class="single_field">
                 
                  <label>
                    Start date <span>*</span>
                  </label>
                  <div class="page_one_date_field">
                    <Field name="startDate" type="date" />
                    <i class="far fa-calendar-alt"></i>
                  </div>
                 
                </div>
                
              </div>
              <div class="input_fields_details">
                <div class="single_field">
                  <label>
                    Thematic <span>*</span>
                  </label>
                  <Field type="text" name="Thematic"/>
                </div>
                <div class="single_field">
                  <label>
                    End date <span>*</span>
                  </label>
                  <div class="page_one_date_field">
                    <Field name="EndDate" type="date" />
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
              <div class="input_fields_details">
                <div class="target_heading">
                  <h4>Targeting</h4>
                </div>
                <div class="single_field">
                <Field
                  name="targeting" as="select" className="my-select"
      >
        <option value="Clients actifs" label="Clients actifs" />
        <option value="Clients inactifs" label="Clients inactifs" />
        <option value="Autres" label="Autres" />
      </Field>
                </div>
                <div class="single_field">
                  <label>Age</label>
                  <div class="page_one_date_field">
                    <Field
                    name="age"
                      type="number"
                      placeholder="Between 25 and 45 years old"
                    />
                  </div>
                </div>
                <div class="single_field">
                  <label>Gender</label>
                  <div class="page_one_date_field">
                    <Field name="Gender" type="text" />
                  </div>
                </div>
              </div>
            </form>
            <div class="next_back_button_box">
              <div class="next_back_button">
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
