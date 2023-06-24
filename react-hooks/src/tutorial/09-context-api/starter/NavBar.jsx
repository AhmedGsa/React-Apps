import React from "react";
import NavLinks from "./NavLinks";
import { useState, createContext } from "react";

export const NavBarContext = createContext();

const NavBar = () => {
  const [user, setUser] = useState({ name: "Ahmed" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavBarContext.Provider value={{user, logout}}>
      <div className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </div>
    </NavBarContext.Provider>
  );
};

export default NavBar;
