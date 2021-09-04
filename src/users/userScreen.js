import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

function UserScreen({ data, deleteUser }) {
  return (
    <div>
      <Layout>
        <section className="purchase_product_history" id="all_product_listing">
          <div className="admin_container">
            <div className="purchase_product_history_table">
              <div className="view_Employee_Leave_table">
                <h3>
                  <strong>User List:</strong>
                </h3>
                <table>
                  <tr>
                    <th>Username</th>
                    <th>Company</th>
                    <th>Create Company</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  {data &&
                    data.map((dt) => (
                      <>
                        <tr>
                          <td>{dt.username}</td>
                          <td>{dt.company} </td>
                          <td>
                            <Link to={`/user-company/${dt._id}`}>
                              <button className="btn btn-primary">+</button>
                            </Link>
                          </td>
                          <td>{dt.password}</td>
                          <td>
                            <Link to={`/User/${dt._id}`}>
                              <button className="btn btn-primary">Edit</button>
                            </Link>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteUser(dt._id)}
                            >
                              Delete
                            </button>
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

export default UserScreen;
