import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UsersList = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const updateUser = (user) => {
    navigate(`/users/${user.name}`, { state: user });
    // Logic to update user goes here
  };

  return (
    <div className="userslist">
      <h3>Users List:</h3>
      <table className="table" border="2px">
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
            <td>Password</td>
            <td>Status</td>
            <td>Role</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.password}</td>
              <td>{user.status}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => updateUser(user)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/dashboard">
        <button className="btn btn-dark">Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default UsersList;
