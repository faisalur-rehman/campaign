import { Field } from "formik";
import React from "react";
import AppForm from "../AppForm/AppForm";
import Layout from "../Layout/Layout";

const Login = ({ initialValues, handleSubmit, error }) => {
  // console.log("error", error)
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields error={error} />
    </AppForm>
  );
};

export default Login;

function FormFields({ error }) {
  return (
    <Layout>
      <section class="login_section" id="login_section">
        <div class="login_container">
          <div class="login_section_form">
            <div class="login_form">
              <h3>Connectez-vous</h3>
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

                <p style={{ color: "red" }}>
                  {error.data && error.data.message}
                </p>
                <div class="submit_btn">
                  <button type="submit">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
