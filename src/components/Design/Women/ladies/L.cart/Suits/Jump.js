import React from "react";
import { Link } from "react-router-dom";
import jumpsuit from "../../suits/jumpsuit.png";
import QuantityCounter from "../../../../../QuantityCounter";

const Jumpsuit = () => {
  return (
    <div className="brace">
      <h2 style={{ textAlign: "center", padding: "1.5%" }}>Shopping Cart</h2>
      <div className="row">
        <div
          class="col-sm-3"
          style={{ marginLeft: "7%", width: "50%", backgroundColor: "white" }}
        >
          <img src={jumpsuit} alt="" />
          <div className="content">
            <h4>
              <i>
                <u>Jumpsuits</u>
              </i>
            </h4>
            <ul>
              <li>
                Beautiful women jumpsuit, perfect for summer, relaxed days out
                and even carnaval.
              </li>
              <li>Ksh.2500</li>
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
export default Jumpsuit;
