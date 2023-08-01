import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="shop">
      <i
        style={{
          marginLeft: "5%",
          fontFamily: "Imperial",
          fontWeight: "700",
          fontSize: "60px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Ecom-Web
      </i>
      <div className="boxes">
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div>{" "}
      </div>
      <h1>The Shop</h1>
      <div className="shopLinks" style={{ textAlign: "center" }}>
        <ul>
          <li>
            <Link to="/design/women" style={{ color: "black" }}>
              LADIES
            </Link>
          </li>
          <li>
            <Link to="/design/men" style={{ color: "black" }}>
              MEN
            </Link>
          </li>
          <li>
            <Link to="/design/access" style={{ color: "black" }}>
              ACCESSORIES
            </Link>
          </li>
          <li>
            <Link to="/design/elect" style={{ color: "black" }}>
              ELECTRONICS
            </Link>
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-sm-4 photo1">
          <h2>
            <Link
              to="/design/women"
              style={{
                color: "white",
                textDecoration: "NONE",
              }}
            >
              <i>Ladies</i>
            </Link>
          </h2>
        </div>
        <div className="col-sm-4 photo2">
          <h2>
            <Link
              to="/design/men"
              style={{ color: "white", textDecoration: "none" }}
            >
              <i>Men</i>
            </Link>
          </h2>
        </div>
        <div className="col-sm-4 photo3">
          <h2>
            <Link
              to="/design/access"
              style={{ color: "white", textDecoration: "none" }}
            >
              <i>Accessories</i>
            </Link>
          </h2>
        </div>
        <div className="col-sm-4 photo4">
          <h2>
            <Link
              to="/design/elect"
              style={{ color: "white", textDecoration: "none" }}
            >
              <i>Electronics</i>
            </Link>
          </h2>
        </div>
      </div>
      <Link to="/dashboard">
        <button
          className="btn-dark"
          style={{
            padding: "7px 30px",
            fontFamily: "sans-serif",
            fontWeight: "700",
            borderRadius: "10px",
            float: "right",
            marginRight: "10%",
            transition: "background-color 0.3s ease",
          }}
        >
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Shop;
