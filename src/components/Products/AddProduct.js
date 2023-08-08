import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const BASE_URL = "http://localhost:8336";
    const url = BASE_URL + "/subcategory/list";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.Success) {
          setSubCategory(response.data);
        } else {
          alert("Failed to fetch records");
        }
      })
      .catch((error) => {
        alert("Request Failed");
      });
  }, []);

  const add = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || image === "" || price === "") {
      alert("All fields are mandatory!");
      return;
    }

    const newProduct = {
      subcategory_id: selectedSubCategory,
      product_name: name,
      description: description,
      image: image,
      price: price,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setSelectedSubCategory("");
    setName("");
    setDescription("");
    setImage("");
    setPrice("");

    //navigate("/products/list"); // Navigate to the ProductList page
  };
  return (
    <div className="product">
      <form onSubmit={add}>
        <h3 style={{ textAlign: "center" }}>Products:</h3>
        <div>
          <label>Sub-Category:</label>
          <select
            className="form-control"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            <option value="">Select a subcategory</option>
            {SubCategory.map((SubCategory) => (
              <option key={SubCategory.id} value={SubCategory.id}>
                {SubCategory.name}
              </option>
            ))}
          </select>
        </div>

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
        <div>
          <label>Image Url:</label>
          <input
            type="text"
            className="form-control"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            className="form-control"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
