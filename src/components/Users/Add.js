import React, { useState } from "react";
import { Link } from "react-router-dom";
import UsersList from "./UsersList";

const AddUsers = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      phone === "" ||
      password === "" ||
      status === "" ||
      role === ""
    ) {
      alert("All fields are mandatory!");
      return;
    }

    const newUser = {
      name: name,
      phone: phone,
      password: password,
      status: status,
      role: role,
    };

    setUsers((Users) => [...Users, newUser]);
    setName("");
    setPhone("");
    setPassword("");
    setStatus("");
    setRole("");
  };

  return (
    <div className="users">
      <form onSubmit={add}>
        <h3>Users:</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            className="form-control"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            className="form-control"
            placeholder="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            className="form-control"
            placeholder="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Add
          {/*   here I add route to go to userslist */}
        </button>

        <div className="btn2">
          <Link to="/dashboard">
            <button type="submit" className="btn btn-dark">
              Back to dashboard
            </button>
          </Link>
        </div>
      </form>
      <UsersList users={users} setUsers={setUsers} />{" "}
      {/* Render the UsersList component */}
    </div>
  );
};

export default AddUsers;
