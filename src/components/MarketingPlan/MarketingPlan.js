import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import "./Plan.css";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import excel from "exceljs";

const MarketingPlan = () => {
  const [id, setId] = useState("");
  const [, setcompany] = useState();
  const [year, setyear] = useState();
  const userCompany = useApi(api.getUserCompany);
  const marketing = useApi(api.marketingPlan);
  const deleteCompany = useApi(api.deleteCampaign);
  const downloadFile = useApi(api.downloadExcel);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await userCompany.request();
        console.log("company", data);
        // const { data2 } = await marketing.request({company,year});
      } catch (error) {}
    }
    fetchData();
  }, []);

  async function handleDelete(id) {
    try {
      const { data } = await deleteCompany.request(id);
      window.location.reload();
    } catch (_) {}
  }

  // console.log(marketing.data)
  async function handleYearChange(e) {
    e.preventDefault();
    setyear(e.target.value);
    try {
      // console.log("company",data)
      const { data } = await marketing.request({
        companyId: userCompany.data.company._id,
        year: e.target.value,
      });
    } catch (error) {}
  }
  function handleChange(e) {
    e.preventDefault();

    setcompany(e.target.value);
    // console.log("company",company);
  }
  function handleClick(idd) {
    !id ? setId(idd) : setId("");
  }
  async function handleDownload(id) {
    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("campagins");
    worksheet.columns = [
      {
        header: "month",
        key: "month",
        width: 25,
      },
      {
        header: "S1",
        key: "S1",
        width: 25,
      },
      {
        header: "S2",
        key: "S2",
        width: 25,
      },
      {
        header: "S3",
        key: "S3",
        width: 25,
      },
      {
        header: "S4",
        key: "S4",
        width: 25,
      },
    ];
    marketing.data && worksheet.addRows(marketing.data.data);
    const buf = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buf]), "campaigns.xlsx");
  }

  marketing.data && console.log("marketing plan", marketing.data.data);
  return (
    <Layout>
      <section
        className="campaign_progress_section marketing_page_section"
        id="marketing_page"
      >
        <div className="campaign_progress_header">
          <div className="header_logo_part">
            <a>
              <span>Vos campagnes</span>
            </a>
          </div>
          <div className="marketing_list_download">
            <a>
              <span>Dealership</span>
              <select onChange={handleChange}>
                {userCompany.data && (
                  <>
                    <option
                      value={userCompany.data.company._id}
                      label={userCompany.data.company.company}
                    />
                  </>
                )}
              </select>
            </a>
            <a id="downloadLink">
              <i className="fas fa-download" onClick={handleDownload}></i>
            </a>
          </div>
        </div>
        <div style={{ width: "13%", marginLeft: 120 }}>
          <select onChange={handleYearChange}>
            <option disabled value="" selected>
              Select Year
            </option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div class="view_Employee_Leave_table">
          <table>
            <tr class="Employee_Leave_table_header">
              <th>MONTH</th>
              <th>S1</th>
              <th>S2</th>
              <th>S3</th>
              <th>S4</th>
            </tr>
            {marketing.data &&
              marketing.data.data.map((plan, index) => (
                <tr class="Employee_Leave_table_body">
                  <td>{plan.month}</td>
                  <td>
                    {plan.S1.map((data) => (
                      <div class="advertisment_click_box">
                        <div class="advertisment">
                          {data.thematic}{" "}
                          <i
                            class="fas fa-plus"
                            onClick={() => handleClick(data._id)}
                          ></i>
                        </div>
                        <div
                          class="advertisment_click_box_detail"
                          style={{
                            display: id === data._id ? "block" : "none",
                            color: "white",
                          }}
                        >
                          <p>List of actions and cost</p>
                          <div class="click_box_inner_detail">
                            <small>--{data.actions[0].actionType}</small>
                            <small>
                              --Cost HT: ${data.actions[0].channelCost}{" "}
                            </small>
                          </div>
                          <div class="click_box_inner_btn">
                            <Link
                              to={`/edit-campaign/${data._id}`}
                              style={{ color: "white" }}
                            >
                              Edit
                            </Link>
                            <a>
                              <i
                                class="fas fa-trash"
                                onClick={() => handleDelete(data._id)}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td>
                    {plan.S2.map((data) => (
                      <div class="advertisment_click_box">
                        <div class="advertisment">
                          {data.thematic}{" "}
                          <i
                            class="fas fa-plus"
                            onClick={() => handleClick(data._id)}
                          ></i>
                        </div>
                        <div
                          class="advertisment_click_box_detail"
                          style={{
                            display: id === data._id ? "block" : "none",
                            color: "white",
                          }}
                        >
                          <p>List of actions and cost</p>
                          <div class="click_box_inner_detail">
                            <small>--{data.actions[0].actionType}</small>
                            <small>
                              --Cost HT: ${data.actions[0].channelCost}{" "}
                            </small>
                          </div>
                          <div class="click_box_inner_btn">
                            <Link
                              to={`/edit-campaign/${data._id}`}
                              style={{ color: "white" }}
                            >
                              Edit
                            </Link>
                            <a>
                              <i
                                class="fas fa-trash"
                                onClick={() => handleDelete(data._id)}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td>
                    {plan.S3.map((data) => (
                      <div class="advertisment_click_box">
                        <div class="advertisment">
                          {data.thematic}{" "}
                          <i
                            class="fas fa-plus"
                            onClick={() => handleClick(data._id)}
                          ></i>
                        </div>
                        <div
                          class="advertisment_click_box_detail"
                          style={{
                            display: id === data._id ? "block" : "none",
                            color: "white",
                          }}
                        >
                          <p>List of actions and cost</p>
                          <div class="click_box_inner_detail">
                            <small>--{data.actions[0].actionType}</small>
                            <small>
                              --Cost HT: ${data.actions[0].channelCost}{" "}
                            </small>
                          </div>
                          <div class="click_box_inner_btn">
                            <Link
                              to={`/edit-campaign/${data._id}`}
                              style={{ color: "white" }}
                            >
                              Edit
                            </Link>
                            <a>
                              <i
                                class="fas fa-trash"
                                onClick={() => handleDelete(data._id)}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td>
                    {plan.S4.map((data) => (
                      <div class="advertisment_click_box">
                        <div class="advertisment">
                          {data.thematic}{" "}
                          <i
                            class="fas fa-plus"
                            onClick={() => handleClick(data._id)}
                          ></i>
                        </div>
                        <div
                          class="advertisment_click_box_detail"
                          style={{
                            display: id === data._id ? "block" : "none",
                            color: "white",
                          }}
                        >
                          <p>List of actions and cost</p>
                          <div class="click_box_inner_detail">
                            <small>--{data.actions[0].actionType}</small>
                            <small>
                              --Cost HT: ${data.actions[0].channelCost}{" "}
                            </small>
                          </div>
                          <div class="click_box_inner_btn">
                            <Link
                              to={`/edit-campaign/${data._id}`}
                              style={{ color: "white" }}
                            >
                              Edit
                            </Link>
                            <a>
                              <i
                                class="fas fa-trash"
                                onClick={() => handleDelete(data._id)}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingPlan;
