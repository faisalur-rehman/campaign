import React,{useEffect,useState} from "react";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api"
import { useParams } from "react-router-dom";
import YourCampaigns from "./YourCampaigns";
const CampForm = () => {
  const [company, setcompany] = useState()
  
  const { id } = useParams();
  
  const form2 = JSON.parse(localStorage.getItem("form2"));
  console.log("id",id)
  
// const { request } = useApi(api.loginUser);
   const request = useApi(api.allCompany)
   const camp = useApi(api.GetCampaign)
    useEffect(() => {
     
        async function fetchData() {
        try {
            // const { data } = await camp.request();
            const { data } = await request.request();
           const { data2 } = await camp.request(company);     
        //    data = request.data.users
            
          } catch (error) {}  
    }
    fetchData()
    }, [company])
    console.log("your_camp",camp.data)
     function handleChange(e){
      e.preventDefault();
      
      setcompany(e.target.value);
      // console.log("company",company);
    
    }

    return(
        <div>
           <Layout>
            <section className="campaign_progress_section" id="campaign_progress">
            <div className="campaign_progress_header">
             <div className="header_logo_part">
               <a>
              <span>Vos campagnes</span>
            </a>
          </div>
          <div className="campaign_progress_campaign_list">
            <a>
              <span>Concession (Car Dealer)</span>
               <select
                onChange={handleChange}
      >
        {request.data && request.data.map((data,index)=>(
        <option value={data.company} label={data.company} />
        ))}
        
      </select>
             {company}
            </a>
          </div>
        </div>
{/* <input type="text" className="searchTerm" placeholder="Search city here"
      onChange={handleChange}/>
      {company} */}
        <div className="campaign_inprogrss_done_detail">
            <div className="campaign_inprogrss_done_detail_heading">
              <h2>In progress</h2>
            </div>
            <div className="campaign_inprogrss_done_detail_list">
      {camp.data && camp.data.inProgress && camp.data.inProgress.map(data=>(
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>{data.thematic}</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>{data.start_date}</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 {data.month} {data.year}</span>
                    </div>
                  </div>
                </div>
                
              </div>
              
              
      ))}
            </div>
          </div>
        <div className="campaign_progress_body">
          
          <div className="campaign_inprogrss_done_detail">
            <div className="campaign_inprogrss_done_detail_heading">
              <h2>Done</h2>
            </div>
            <div className="campaign_inprogrss_done_detail_list">
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>

              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="signle_campaign_box">
                <div className="signle_campaign_box_main">
                  <div className="signle_campaign_box_heading">
                    <strong>Publicité sur NRJ</strong>
                  </div>
                  <div className="signle_campaign_box_detail">
                    <div className="campaign_name">
                      <span>PARTENARIAT</span>
                    </div>
                    <div className="campaign_date">
                      <span>S1 Janvier 2021</span>
                    </div>
                  </div>
                </div>
                <div className="campaign_extra">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
{/*    
          <YourCampaigns
          data={request.data && request.data}
          initialValues={initialValues}
          handleChange={handleChange}
          />   */}
          
        </div>
    )
} ;
export default CampForm;