import React from "react";
import AppForm from "../components/AppForm/AppForm";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const DetailForm = ({ initialValues, handleSubmit, data }) => {
  return (
    <AppForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      data={data}
    >
      <CompanyField data={data} />
    </AppForm>
  );
};

export default DetailForm;

function CompanyField({ data }) {
  console.log("error", data);

  return (
    <div>
      <Layout>
        <section className="purchase_product_history" id="all_product_listing">
          <div className="admin_container">
            <div className="purchase_product_history_table">
              <div className="view_Employee_Leave_table">
                <h3>
                  <strong>Companies List:</strong>
                </h3>
                <table>
                  <tr>
                    <th>Company name</th>
                    <th>edit</th>
                    <th>Delete</th>
                  </tr>
                  {data &&
                    data.map((data, index) => (
                      <>
                        <tr>
                          <td>{data.company}</td>
                          <td>{data.company}</td>
                          <td>
                            <Link to={`/editCompany/:${data._id}`}>
                              <button className="btn btn-primary">Edit</button>
                            </Link>
                          </td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      </>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
