import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState([false, false, false, false]);
  function handleActive(index) {
    let arr = [false, false, false, false];
    arr[index] = true;
    setActive([...arr]);
  }
  console.log("active", active);
  return (
    // <section class="admin_pannel">
    <div class="admin_pannel_dashnboard responsive_nav_bar">
      <div class="dashnboard_data_container">
        <div class="sidebar_close_btn">
          <a class="open_close_nav">
            <i class="far fa-times-circle"></i>
            <span>close</span>
          </a>
        </div>
        <div class="dashnboard_data_container_heading">
          <h2>Marketing Campaign Planner</h2>
        </div>
        <div class="dashnboard_data_container_list" id="change_nav_active">
          <div class="data_container_single_list" onclick="login_section()">
            <Link
              to="/"
              onClick={() => handleActive(0)}
              class={`change_active ${
                active[0] ? "data_container_single_list_active" : ""
              }`}
            >
              <i class="fas fa-home"></i>
              <span>Accueil</span>
            </Link>
          </div>
          <div
            class="data_container_single_list"
            onclick="compain_progress_section()"
          >
            <Link
              to="/your-campaigns"
              onClick={() => handleActive(1)}
              class={`change_active ${
                active[1] ? "data_container_single_list_active" : ""
              }`}
            >
              <i class="far fa-chart-bar"></i>
              <span>Vos campagnes</span>
            </Link>
          </div>
          <div
            class="data_container_single_list"
            onclick="create_compain_section()"
          >
            <Link
              to="/create-campaign"
              onClick={() => handleActive(2)}
              class={`change_active ${
                active[2] ? "data_container_single_list_active" : ""
              }`}
            >
              <i class="fas fa-clipboard-list"></i>
              <span>Créer une campagne</span>
            </Link>
          </div>
          <div class="data_container_single_list" onclick="marketing_section()">
            <Link
              to="/marketing-plan"
              onClick={() => handleActive(3)}
              class={`change_active ${
                active[3] ? "data_container_single_list_active" : ""
              }`}
            >
              <i class="far fa-calendar-alt"></i>
              <span>Plan marketing</span>
            </Link>
          </div>
          <div class="data_container_single_list" onclick="marketing_section()">
            <Link
              to="/Create-User"
              onClick={() => handleActive(3)}
              class={`change_active ${
                active[3] ? "data_container_single_list_active" : ""
              }`}
            >
              <i class="far fa-calendar-alt"></i>
              <span>Create User</span>
            </Link>
          </div>
          <div class="data_container_single_list" onclick="marketing_section()">
            <Link
              to="/User-List"
              onClick={() => handleActive(3)}
              class={`change_active ${
                active[3] ? "data_container_single_list_active" : ""
              }`}
            >
              <i class="far fa-calendar-alt"></i>
              <span>User Details  </span>
            </Link>
          </div>
        </div>
        <div class="login_user_field">
          <div class="field_operation_btn">
            <a>
              <i class="fas fa-ellipsis-h"></i>
            </a>
          </div>
          <div class="login_user_data">
            <h2>John Doe</h2>
            <span>User</span>
            <span>Audi France</span>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default Sidebar;
