import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="admin_pannel">
      <Sidebar />
      {children}
    </section>
  );
};

export default Layout;
