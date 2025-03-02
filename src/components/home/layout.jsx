import React from "react";
import SideBar from "./sidebar";
import Search from "./Search";

function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <Search />
    </div>
  );
}

export default Layout;
