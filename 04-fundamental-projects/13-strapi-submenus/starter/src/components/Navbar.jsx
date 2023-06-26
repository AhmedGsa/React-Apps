import React from "react";
import { GrMenu } from "react-icons/gr";
import { useGlobalContext } from "../Context";
import sublinks from "../data";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <GrMenu />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
