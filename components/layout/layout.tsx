import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar"
import Content from "./content";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="h-[93vh] flex flex-row justify-start">
        <Sidebar />
        <Content>{children}</Content> 
      </div>
    </>
  );
};

export default Layout;