import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerList = ({ customers, setCustomers }) => {
  const navigate = useNavigate();

  const deleteCustomer = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers.splice(index, 1);
    setCustomers(updatedCustomers);
  };

  const updatedCustomer = (customer) => {
    navigate(`/customers/${customer.name}`, { state: customer });
    // Logic to update user goes here
  };

  return (
    <div className="customerlist">
      <h3>Customers List:</h3>
      <table className="table" border="2px">
        <thead>
          <tr>
            <td>Name</td>
            <td>Contact</td>
            <td>Location</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.contact}</td>
              <td>{customer.location}</td>
              <td>
                <button onClick={() => updatedCustomer(customer)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteCustomer(index)}>Delete</button>
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

export default CustomerList;
