import React from "react";
import { Link } from "react-router-dom";
import mrings from "../Jewellary/mens-ring.jpg";

const Mrings = () => {
  return (
    <div className="brace">
      <h2 style={{ textAlign: "center", padding: "1.5%" }}>Shopping Cart</h2>
      <div className="row">
        <div
          class="col-sm-3"
          style={{ marginLeft: "5%", width: "60%", backgroundColor: "white" }}
        >
          <img src={mrings} alt="" />
          <div className="content">
            <h4>
              <i>
                <u>Men rings</u>
              </i>
            </h4>
            <ul>
              <li>Classic men rings.</li>
              <li>Quantity = 1</li>
              <li>Ksh.300</li>
            </ul>
            <p>Quantity</p>
          </div>
          <Link to="/design/access">
            <button className="btn-dark2">Back to Shop</button>
          </Link>
        </div>
        <div
          class="col-sm-3"
          style={{
            marginLeft: "2%",
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
    </div>
  );
};
export default Mrings;
