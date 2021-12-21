import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { SidebarItems } from "./SidebarItems";
import "./Sidebar.css";
function Sidebar() {
  const [role, setRole] = React.useState(localStorage.getItem('role') !== undefined && localStorage.getItem('role') !== null ? localStorage.getItem('role') : '')
  if (role !== null && role !== undefined && role !== ''){
    return (
      <div className="sidebar">
        <div className="SidebarList">
          <ul>
            {role === "Lider" ? (
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
                {role === "Estudiante" ? (
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
                    {role === "Admin" ? (
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
                    ) : (
                      <>
                        <Navigate to="Login" />
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }else{
    return <Navigate to="/login" />
  }

  
}

export default Sidebar;
