import React from "react";
import menubtn from "../images/String-icon-waffle.png";

import person from "../images/download.png";


import { SearchBox } from "@fluentui/react";
import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react";



const NavBar = ({active,setActive}) => {
  const examplePersona = {
    imageUrl: person,
    imageInitials: "AL",
  };

  return (
    <div className={`navBarWraper`} data-testid="navBar">
      <div className="nav">
      <div className="menuBtn">
        <div>
          <img src={menubtn} alt="" onClick={()=>setActive(!active)} />
        </div>

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
        <Persona
          {...examplePersona}
          size={PersonaSize.size32}
          presence={PersonaPresence.online}
          imageAlt="Annie Lindqvist, status is away"
        />
      </div>
      </div>
    </div>
  );
};

export default NavBar;
