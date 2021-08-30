import React,{useEffect,useState} from "react";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const MarketingPlan = () => {
const [company, setcompany] = useState()
const [year, setyear] = useState()
   const request = useApi(api.allCompany)
   const marketing=useApi(api.marketingPlan)
     useEffect(() => {
     
        async function fetchData() {
        try {
            const { data } = await request.request();
                const { data2 } = await marketing.request({company,year});
            
          } catch (error) {}  
    }
    fetchData()
    }, [company])
    console.log(marketing.data)
    function handleYearChange(e){
      e.preventDefault();
      setyear(e.target.value)
      console.log(e.target.value)
    }
     function handleChange(e){
      e.preventDefault();
      
      setcompany(e.target.value);
      console.log("company",company);
    
    } 
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
              <select
                onChange={handleChange}
      >
        {request.data && request.data.map((data,index)=>(
        <option value={data.company} label={data.company} />
        ))}
        
      </select>
      {company}
            </a>
            <button>
              <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div className="marketing_page_detail">
          <div className="marketing_page_container">
            <div className="marketing_page_excel_sheet">
              <div className="marketing_page_excel_sheet_main">
                <div className="marketing_page_excel_data">
                  <div className="marketing_page_year_box">
                    <select onChange={handleYearChange}>
                      <option disabled value="">Select</option>
                      <option value="2021">2021</option>
                      <option value="2021">2021</option>
                    
                    </select>
                    {year}
                  </div>
                  <div className="marketing_page_properties_box">
                    <p>Partenariats</p>
                  </div>
                  <div className="marketing_page_properties_box">
                    <p>Partenariats</p>
                  </div>
                  <div className="marketing_page_properties_box">
                    <p>Partenariats</p>
                  </div>
                </div>
                <div className="marketing_page_excel_detail">
                  <div className="marketing_page_year_box excel_detail_header">
                    <h5>Janvier</h5>
                    <div className="excel_detail_header_list">
                      <div className="excel_detail_header_list_box">
                        <p>S1</p>
                      </div>
                      <div className="excel_detail_header_list_box">
                        <p>S2</p>
                      </div>
                      <div className="excel_detail_header_list_box">
                        <p>S3</p>
                      </div>
                      <div className="excel_detail_header_list_box">
                        <p>S4</p>
                      </div>
                      <div className="excel_detail_header_list_box">
                        <p>Actions over the whole month</p>
                      </div>
                    </div>
                  </div>
                  <div className="marketing_page_excel_detail_body">
                    <div className="marketing_page_excel_detail_body_box">
                      <div className="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <button ><FontAwesomeIcon icon={faPlus} /></button>
                        </a>
                      </div>
                    </div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                    <div className="marketing_page_excel_detail_body_box">
                      <div className="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="marketing_page_excel_detail_body_box">
                      <div className="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                  </div>

                  <div className="marketing_page_excel_detail_body">
                    <div className="marketing_page_excel_detail_body_box"></div>
                    <div className="marketing_page_excel_detail_body_box">
                      <div className="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                  </div>
                  <div className="marketing_page_excel_detail_body">
                    <div className="marketing_page_excel_detail_body_box"></div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                    <div className="marketing_page_excel_detail_body_box">
                      <div className="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                    <div className="marketing_page_excel_detail_body_box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingPlan;
