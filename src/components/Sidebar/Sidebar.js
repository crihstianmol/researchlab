import React from 'react'
import { NavLink } from "react-router-dom";

import { SidebarItems } from './SidebarItems';

function Sidebar() {
    return (
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
    )
}

export default Sidebar
