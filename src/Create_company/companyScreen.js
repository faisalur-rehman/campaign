import { Field } from "formik";
import React from "react";
import AppForm from "../components/AppForm/AppForm";
import Layout from "../components/Layout/Layout";

const Form = ({ initialValues, handleSubmit, data }) => {
  // console.log("error", error)
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <CompanyFields data={data} />
    </AppForm>
  );
};

export default Form;

function CompanyFields({ data }) {
  return (
    <Layout>
      <section class="login_section" id="login_section">
        <div class="login_container">
          <div class="login_section_form">
            <div class="login_form">
              <h3>Create Company</h3>
              <div class="login_fields">
                <div class="input_field">
                  <Field name="name" type="text" placeholder="Company" />
                </div>
                <p style={{ color: "green" }}>{data && data.message}</p>
                <div class="submit_btn">
                  <button type="submit">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
