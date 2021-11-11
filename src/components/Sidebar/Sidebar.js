import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../img/avatar.PNG"
import { SidebarItems } from "./SidebarItems";
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="SidebarList">
        <ul>
          {SidebarItems.map((item, key) => {
            return (
              <li key={key}>
                <NavLink to={item.link} activeClassName="active">
                  <div id="icon">{item.icon}</div>
                  <div id="sidebar-title">{item.title}</div>{" "}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
