import { Field } from "formik";
import React from "react";
import AppForm from "../components/AppForm/AppForm";
import Layout from "../components/Layout/Layout";

const Edit = ({ initialValues, handleSubmit, error ,updateMessage}) => {
    // console.log("error", error)
    return (
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
    <EditScreen error = {error} update={updateMessage} />
      </AppForm>
    );
  };
  export default Edit;
function EditScreen({update}) {
    return (
        <div>
            <Layout>
      <section class="login_section" id="login_section">
        <div class="login_container">
          <div class="login_section_form">
            <div class="login_form">
              <h3>Edit User</h3>
              <div class="login_fields">
              <div class="input_field">
                  <Field name="username" type="email" placeholder="Username" />
                </div>
                <div class="input_field">
                  <Field name="company" type="text" placeholder="compnay" />
                </div>
                <div class="input_field">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
               
                {/* <p style={{color:"red"}}>
                    
                    {
                    error.data &&
                    error.data.message}</p> */}
                   <p>{update}</p> 
                <div class="submit_btn">
                  <button type="submit">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
        </div>
    )
}

