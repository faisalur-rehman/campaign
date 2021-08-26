import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const [role, setrole] = useState();
  const  [isMember, setisMember] = useState();

  useEffect(() => {
    function Roles (){
   
      const data =JSON.parse(localStorage.getItem("login"));
      // setrole(data.isAdmin)
      setrole(data.isAdmin);
      console.log("member",data.isMember)
      // console.log("role",data.isAdmin)
      
    }
    
    Roles();
   
  }, [role])
  console.log("user",role)

  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/");
  }
  const [active, setActive] = useState([false, false, false, false]);
  function handleActive(index) {
    // window.location.reload()
    let arr = [false, false, false, false];
    arr[index] = true;
    setActive([...arr]);
  }
  console.log("active", active);
  return (
    // <section classNameName="admin_pannel">
    <div>
      {!role?(
        <div className="admin_pannel_dashnboard responsive_nav_bar">
      <div className="dashnboard_data_container">
        <div className="sidebar_close_btn">
          <a className="open_close_nav">
            <i className="far fa-times-circle"></i>
            <span>close</span>
          </a>
        </div>
        
          <div>
        <div className="dashnboard_data_container_heading">
        <h2>Marketing Campaign Planner</h2>
      </div>
      <div className="dashnboard_data_container_list" id="change_nav_active">
        <div className="data_container_single_list" onclick="login_section()">
          <Link
            to="/"
            onClick={() => handleActive(0)}
            className={`change_active ${
              active[0] ? "data_container_single_list_active" : ""
            }`}
          >
            <i className="fas fa-home"></i>
            <span>Accueil</span>
          </Link>
        </div>
        <div
          className="data_container_single_list"
          onclick="compain_progress_section()"
        >
          <Link
            to="/your-campaigns"
            onClick={() => handleActive(1)}
            className={`change_active ${
              active[1] ? "data_container_single_list_active" : ""
            }`}
          >
            <i className="far fa-chart-bar"></i>
            <span>Vos campagnes</span>
          </Link>
        </div>
        <div
          className="data_container_single_list"
          onclick="create_compain_section()"
        >
          <Link
            to="/create-campaign"
            onClick={() => handleActive(2)}
            className={`change_active ${
              active[2] ? "data_container_single_list_active" : ""
            }`}
          >
            <i className="fas fa-clipboard-list"></i>
            <span>Créer une campagne</span>
          </Link>
        </div>
        <div className="data_container_single_list" onclick="marketing_section()">
          <Link
            to="/marketing-plan"
            onClick={() => handleActive(3)}
            className={`change_active ${
              active[3] ? "data_container_single_list_active" : ""
            }`}
          >
            <i className="far fa-calendar-alt"></i>
            <span>Plan marketing</span>
          </Link>
        </div> 
        <div className="data_container_single_list" onclick="Logout()">
          <Link
            to="/"
            onClick={() => handleActive(3)}
            className={`change_active ${
              active[3] ? "data_container_single_list_active" : ""
            }`}
          >
            <i className="far fa-calendar-alt"></i>
            <button onClick={handleLogout}>Logout</button>
          </Link>
        </div> 
      </div>  
          <div>
         
        </div>
        </div>
       
          
        <div className="login_user_field">
          <div className="field_operation_btn">
            <a>
              <i className="fas fa-ellipsis-h"></i>
            </a>
          </div>
          <div className="login_user_data">
            <h2>John Doe</h2>
            <span>User</span>
            <span>Audi France</span>
          </div>
        </div>
      </div>
    </div>

      ):(
        
        <div className="admin_pannel_dashnboard responsive_nav_bar">
        <div className="dashnboard_data_container">
          <div className="sidebar_close_btn">
            <a className="open_close_nav">
              <i className="far fa-times-circle"></i>
              <span>close</span>
            </a>
            
          </div> 
          <div className="dashnboard_data_container_heading">
        <h2>Marketing Campaign Planner</h2>
      </div>
          <div className="data_container_single_list" onclick="login_section()">
          <Link
            to="/"
            onClick={() => handleActive(0)}
            className={`change_active ${
              active[0] ? "data_container_single_list_active" : ""
            }`}
          >
            <i className="fas fa-home"></i>
            <span>Accueil</span>
          </Link>
        </div>
          <div className="data_container_single_list" onclick="marketing_section()">
            <Link
              to="/Create-User"
              onClick={() => handleActive(3)}
              className={`change_active ${
                active[3] ? "data_container_single_list_active" : ""
              }`}
            >
              <i className="far fa-calendar-alt"></i>
              <span>Create User</span>
            </Link>
          </div>
          <div className="data_container_single_list" onclick="marketing_section()">
            <Link
              to="/User-List"
              onClick={() => handleActive(3)}
              className={`change_active ${
                active[3] ? "data_container_single_list_active" : ""
              }`}
            >
              <i className="far fa-calendar-alt"></i>
              <span>User Details</span>
            </Link>
          </div>
          

          </div>
          </div>
      )}
        </div>

);
};

export default Sidebar;
