import React from "react";
import { useContext } from "react";
import { NavBarContext } from "./NavBar";

const UserComponent = () => {
  const { user, logout } = useContext(NavBarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please login !</p>
      )}
    </div>
  );
};

export default UserComponent;
