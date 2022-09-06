import React from "react";
import { Nav } from "@fluentui/react";

import { useLocation } from "react-router-dom";
import SidebarWraper from "../common/SidebarWraper";
import SidebarLinks from "../DataBase/SidebarNavLinks";

const SideBar = ({ active }) => {
  const location = useLocation();

  const key = location.pathname.split("").splice(1).join("");
const {navLinks}=SidebarLinks(active);


 
  const navStyles = {
    root: {
      width: "100%",
      height: 350,
      boxSizing: "border-box",
      border: "1px solid #eee",
      overflowY: "auto",
    },
    // these link styles override the default truncation behavior
    link: {
      whiteSpace: "normal",
      lineHeight: "inherit",
    },
  };

  return (
    <>
      <SidebarWraper active={active}>
        <Nav
          selectedKey={key ? key : "/"}
          styles={navStyles}
          groups={navLinks}
        />
      </SidebarWraper>
    </>
  );
};

export default SideBar;
