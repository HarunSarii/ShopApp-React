import React, {useState} from "react";
import { SidebarData } from "./SidebarData";


const Sidebar = () => {

  const [sidebar, setSidebar] = useState(true);

  const sidebarToggle = () => setSidebar(!sidebar);



  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   getProducts(SEARCH_API + "jewelery");
  // };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="row"
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              // onClick={() => {
              //   handleSearch;
              // }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
