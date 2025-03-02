import React from "react";
import SideBar from "./sidebar";
import Search from "./Search";
import Posts from "./post/posts";

function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <Search />
      <Posts/>
    </div>
  );
}

export default Layout;
