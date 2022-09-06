import React from "react";

import person from "../../images/download.png";


import { SearchBox } from "@fluentui/react";
import PersonaProfile from "./Persona";
import MenuButton from "./MenuButton";






const NavBar = ({active,setActive}) => {
  const examplePersona = {
    imageUrl: person,
    imageInitials: "AL",
  };

  return (
    <div className={`navBarWraper`} data-testid="navBar">
      <div className="nav">
      <div className="menuBtn">
       <MenuButton active={active} setActive={setActive} />

        <div className="logo">
          <h5>Privazy</h5>
        </div>
      </div>

      <div className="topSearchbar">
        <SearchBox
          className="search"
          placeholder="Search"
          onSearch={(newValue) => console.log("value is " + newValue)}
        />
      </div>

      <div className="topNavRight">
      {/*profile image */}
      <PersonaProfile examplePersona={examplePersona}/>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
