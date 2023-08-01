import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = ({ products, setProducts }) => {
  const navigate = useNavigate();

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const updatedProduct = (product) => {
    navigate(`/products/${product.name}`, { state: product });
    // Logic to update user goes here
  };
  useEffect(() => {
    const url = "http://localhost:8336/products/list";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.Success) {
          setProducts(response.data);
        } else {
          alert("Failed to fetch records");
        }
      })
      .catch((error) => {
        alert("Request Failed");
      });
  }, []);
  return (
    <div className="productlist">
      <h3>Products List:</h3>
      {products.length > 0 ? (
        <table className="table" border="2px">
          <thead>
            <tr>
              <td>Product Name:</td>
              <td>Description:</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.product_name}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => updatedProduct(product)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteProduct(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
      <Link to="/dashboard">
        <button className="btn btn-dark">Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default ProductList;
