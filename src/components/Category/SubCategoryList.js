import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SubCategoryList = ({ SubCategory, setSubCategory }) => {
  const navigate = useNavigate();

  const deleteSubCategory = (index) => {
    const updatedSubCategory = [...SubCategory];
    updatedSubCategory.splice(index, 1);
    setSubCategory(updatedSubCategory);
  };

  const updatedSubCategory = (SubCategory) => {
    navigate(`/SubCategory/${SubCategory.name}`, { state: SubCategory });
  };

  useEffect(() => {
    const url = "http://localhost:8336/subcategory/list";

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
  return (
    <div className="categorylist">
      <h3>SubCategory List:</h3>
      {SubCategory.length > 0 ? (
        <table className="table" border="2px">
          <thead>
            <tr>
              <td>Category:</td>
              <td>Name:</td>
              <td>Description:</td>
            </tr>
          </thead>
          <tbody>
            {SubCategory.map((SubCategory, index) => (
              <tr key={index}>
                <td>{SubCategory.category_id}</td>
                <td>{SubCategory.name}</td>
                <td>{SubCategory.description}</td>
                <td>
                  <button onClick={() => updatedSubCategory(SubCategory)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteSubCategory(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Subcategory available.</p>
      )}
      <Link to="/dashboard">
        <button className="btn btn-dark">Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default SubCategoryList;
