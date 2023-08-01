import React, { useState } from "react";
import { Link } from "react-router-dom";
import dollar from "../../images/dollar.png";
import cart from "../../images/cart.png";
import Sbag from "../../images/Sbag.png";

const DashBoard = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="dash">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <i>
              <h2
                style={{
                  fontFamily: "Imperial",
                  fontSize: "40px",
                  fontWeight: "600",
                  textShadow: "2px 12px 2px solid white",
                }}
              >
                Ecom-Web
              </h2>
            </i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="details">
        <div className="row">
          <div className="col-sm-4">
            <ul>
              <li onClick={toggleSubMenu}>
                Products
                {showSubMenu && (
                  <ul>
                    <li>
                      <Link
                        to="/products/add"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/list"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Products List
                      </Link>
                    </li>
                    <li>Edit list</li>
                  </ul>
                )}
              </li>
              <li onClick={toggleSubMenu}>
                Users
                {showSubMenu && (
                  <ul>
                    <li>
                      <Link
                        to="/users/add"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Add User
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/users/list"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Users list
                      </Link>
                    </li>
                    <li>Edit Info</li>
                  </ul>
                )}
              </li>
              <li onClick={toggleSubMenu}>
                Customers
                {showSubMenu && (
                  <ul>
                    <li>
                      <Link
                        to="/customers/add"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Add Customer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/customers/list"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Customers List
                      </Link>
                    </li>
                    <li>Edit info</li>
                  </ul>
                )}
              </li>
              <li onClick={toggleSubMenu}>Orders</li>
            </ul>
            <Link to="/design/shop">
              <button className="btn-dark">Sign Out</button>
            </Link>
          </div>
          <div className="col-sm-8">
            <h3
              style={{ marginLeft: "2%", marginTop: "0.5%", fontWeight: "700" }}
            >
              DashBoard
            </h3>
            <div className="row">
              <div
                className="col-sm-3"
                style={{
                  backgroundColor: "#9C3780",
                  color: "white",
                  marginLeft: "7%",
                }}
              >
                <i>
                  <h2 style={{ textAlign: "center", marginTop: "10%" }}>
                    <img src={dollar} alt="" />
                    Total Sales
                  </h2>
                </i>
              </div>
              <div
                className="col-sm-3"
                style={{
                  backgroundColor: "#6944A5",
                  color: "white",
                }}
              >
                <i>
                  <h2 style={{ textAlign: "center", marginTop: "10%" }}>
                    <img src={cart} alt="" />
                    Total Orders
                  </h2>
                </i>
              </div>
              <div
                className="col-sm-3"
                style={{ backgroundColor: "#856A6A", color: "white" }}
              >
                <i>
                  <h2 style={{ textAlign: "center", marginTop: "10%" }}>
                    <img src={Sbag} alt="" />
                    Total Products
                  </h2>
                </i>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6" style={{ marginLeft: "7%" }}>
                <h3 style={{ paddingTop: "5%", fontSize: "20px" }}>
                  <i>Latest orders:</i>
                </h3>
                <table
                  className="table"
                  style={{
                    paddingTop: "2%",
                    fontSize: "18px",
                    border: "2px solid black",
                  }}
                >
                  {" "}
                  <thead>
                    <tr>
                      <th>Id:</th>
                      <th>Username:</th>
                      <th>Email:</th>
                      <th>Amount(Kshs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-2" style={{ backgroundColor: "#D9D9D9" }}>
                <i>Men</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
