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
      <section className="login_section" id="login_section">
        <div className="login_container">
          <div className="login_section_form">
            <div className="login_form">
              <h3>Edit User</h3>
              <div className="login_fields">
              <div className="input_field">
                  <Field name="username" type="email" placeholder="Username" />
                </div>
              
                <div className="input_field">
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
                <div className="submit_btn">
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

