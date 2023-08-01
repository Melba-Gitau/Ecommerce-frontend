import React from "react";
import { Link } from "react-router-dom";
import overcoat from "../sweaters/overcoat.jpg";
import QuantityCounter from "../../../../QuantityCounter";

const Overcoat = () => {
  return (
    <div className="brace">
      <h2 style={{ textAlign: "center", padding: "1.5%" }}>Shopping Cart</h2>
      <div className="row">
        <div
          class="col-sm-3"
          style={{ marginLeft: "7%", width: "50%", backgroundColor: "white" }}
        >
          <img src={overcoat} alt="" />
          <div className="content">
            <h4>
              <i>
                <u>Overcoats</u>
              </i>
            </h4>
            <ul>
              <li>Elegant Collar Long Sleeve Woven Fabric overcoats.</li>
              <li>Ksh.700</li>
            </ul>
            <p>
              {" "}
              <QuantityCounter />
            </p>
          </div>
          <Link to="/design/women">
            <button className="btn-dark2">Back to Shop</button>
          </Link>
        </div>
        <div
          class="col-sm-3"
          style={{
            marginLeft: "1.5%",
            width: "30%",
            padding: "2%",
            color: "white",
          }}
        >
          <table
            className="table"
            style={{ paddingTop: "2%", fontSize: "18px" }}
          >
            <thead>
              <h3 style={{ paddingTop: "5%" }}>ORDER SUMMARY:</h3>
              <tr>
                <th>Item:</th>
                <th>Cost:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product</td>
                <td></td>
              </tr>
              <tr>
                <td>Delivery</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h3 style={{ paddingTop: "5%" }}>TOTAL:</h3>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="btn btn-dark">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="boxes">
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div>{" "}
      </div>
    </div>
  );
};
export default Overcoat;
