import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || description === "") {
      alert("All fields are mandatory!");
      return;
    }

    const newProduct = {
      product_name: name,
      description: description,
    };

    // const data = `{
    //   "product_name":"test",
    //   "description":"desc"
    // }`;

    const url = "http://localhost:8336/products/create";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.Success) {
          alert("Added successfully");
        } else {
          alert("Failed to add Product!!!!");
        }
      })
      .catch((error) => {
        alert("error occured");
      });

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setName("");
    setDescription("");

    //navigate("/products/list"); // Navigate to the ProductList page
  };
  return (
    <div className="product">
      <form onSubmit={add}>
        <h3 style={{ textAlign: "center" }}>Products:</h3>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark" onClick={add}>
          Add
        </button>

        <div className="btn2">
          <Link to="/dashboard">
            <button type="submit" className="btn btn-dark">
              Back to dashboard
            </button>
          </Link>
        </div>
      </form>
      <ProductList products={products} setProducts={setProducts} />
      {/* Render the ProductList component */}
    </div>
  );
};
export default AddProduct;
