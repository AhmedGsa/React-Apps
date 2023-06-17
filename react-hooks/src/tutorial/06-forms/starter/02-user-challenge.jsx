import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { id: users.length + 1, name }]);
    setName("");
  };
  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id} style={{display: "flex", alignItems:"center", justifyContent: "center", gap: "25px"}}>
          <h4 key={user.id}>{user.name}</h4>
          <button className="btn" onClick={() => {removeUser(user.id)} }>Remove</button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
