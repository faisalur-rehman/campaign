import { Field } from "formik";
import React from "react";
import AppForm from "../components/AppForm/AppForm";
import Layout from "../components/Layout/Layout";

const SignUp = ({ initialValues, handleSubmit, error }) => {
    // console.log("error", error)
    return (
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
    <SignUpScreen error = {error} />
      </AppForm>
    );
  };
  export default SignUp;
function SignUpScreen({error}) {
    return (
        <div>
            <Layout>
      <section class="login_section" id="login_section">
        <div class="login_container">
          <div class="login_section_form">
            <div class="login_form">
              <h3>Create User</h3>
              <div class="login_fields">
              <div class="input_field">
                  <Field name="username" type="email" placeholder="Username" />
                </div>
                
                <div class="input_field">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
               
                <p style={{color:"red"}}>
                    
                    {
                    error.data &&
                    error.data.message}</p>
                <div class="submit_btn">
                  <button type="submit">Create</button>
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

