import React from 'react'
import { Field } from "formik";
// import "./edit.css"
import Layout from "../components/Layout/Layout";
import AppForm from "../components/AppForm/AppForm";

const EditC = ({ initialValues, handleSubmit, error ,updateMessage}) => {
    // console.log("error", error)
    return (
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
    <EditCompany handleSubmit={handleSubmit} />
      </AppForm>
    );
  };
  export default EditC;

function EditCompany({handleSubmit}) {
    return (
        <div>
        <Layout>
  <section className="login_section" id="login_section">
    <div className="login_container">
      <div className="login_section_form">
        <div className="login_form">
          <h3>Edit company name</h3>
          <div className="login_fields">
          <div className="input_field">
              <Field name="name" type="text" placeholder="Company name" />
            </div>
          
           
            {/* <p style={{color:"red"}}>
                
                {
                error.data &&
                error.data.message}</p> */}
               <p></p> 
            <div className="submit_btn">
              <button onClick={handleSubmit} type="submit">Update</button>
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

