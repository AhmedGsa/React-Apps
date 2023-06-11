import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const handleLoginBtn = () => {
    setUser({name: "ahmed"})
  }
  const handleLogoutBtn = () => {
    setUser(null)
  }
  return <div className="container">
    <h2>User Challenge</h2>
    {user ? <h2>Welcome {user.name}</h2> : <h2>Please Login</h2>}
    {user ? <button className="btn" onClick={handleLogoutBtn} >Logout</button> : <button className="btn" onClick={handleLoginBtn} >Login</button>}
  </div>;
};

export default UserChallenge;
