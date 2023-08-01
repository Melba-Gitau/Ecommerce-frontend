import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomerList from "./CustomerList";

const AddCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || contact === "" || location === "") {
      alert("All fields are mandatory!");
      return;
    }

    const newCustomer = {
      name: name,
      contact: contact,
      location: location,
    };

    setCustomers((Customers) => [...Customers, newCustomer]);
    setName("");
    setContact("");
    setLocation("");
  };

  return (
    <div className="customers">
      <form onSubmit={add}>
        <h3>Customers:</h3>
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
          <label>Contact:</label>
          <input
            type="text"
            className="form-control"
            placeholder="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
      <CustomerList customers={customers} setCustomers={setCustomers} />{" "}
      {/* Render the UsersList component */}
    </div>
  );
};

export default AddCustomers;
