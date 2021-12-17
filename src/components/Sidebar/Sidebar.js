import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../img/avatar.PNG";
import { SidebarItems } from "./SidebarItems";
import "./Sidebar.css";
function Sidebar() {
  let rol = "Estudiante";

  return (
    <div className="sidebar">
      <div className="SidebarList">
        <ul>
          {rol === "Lider" ? (
            <>
              {SidebarItems[0].Lider.map((item, key) => {
                return (
                  <li key={key}>
                    <NavLink to={item.link} activeClassName="active">
                      {/* <div id="icon">{item.icon}</div> */}
                      <div id="sidebar-title">{item.title}</div>{" "}
                    </NavLink>
                  </li>
                );
              })}
            </>
          ) : (
            <>
              {rol === "Estudiante" ? (
                <>
                  {SidebarItems[0].Estudiante.map((item, key) => {
                    return (
                      <li key={key}>
                        <NavLink to={item.link} activeClassName="active">
                          {/* <div id="icon">{item.icon}</div> */}
                          <div id="sidebar-title">{item.title}</div>{" "}
                        </NavLink>
                      </li>
                    );
                  })}
                </>
              ) : (
                <>
                  {SidebarItems[0].Admin.map((item, key) => {
                    return (
                      <li key={key}>
                        <NavLink to={item.link} activeClassName="active">
                          {/* <div id="icon">{item.icon}</div> */}
                          <div id="sidebar-title">{item.title}</div>{" "}
                        </NavLink>
                      </li>
                    );
                  })}
                </>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
