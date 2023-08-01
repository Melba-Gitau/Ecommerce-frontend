import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import phones from "./E.images/phones.jpg";
import laptops from "./E.images/laptops.jpg";
import earpods from "./E.images/earpods.jpg";
import tablets from "./E.images/tablets.png";
import headphones from "./E.images/headphones.jpg";
import whole from "./E.images/whole set.jpg";

const Electronic = () => {
  const [products, setProducts] = useState([]);
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
    <div className="design">
      <h1 style={{ textAlign: "center" }}>
        <u>Electronics</u>
        <Link to="/design/shop">
          <button className="btn-dark">Back</button>
        </Link>
      </h1>
      <div class="elect">
        <div className="row">
          {products.map((product, index) => (
            <div class="col-sm-3" key={index}>
              <img src={product.image} alt="" style={{ height: "60%" }} />
              <h4>
                <i>{product.product_name}</i>
              </h4>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          ))}

          {/* <div class="col-sm-3">
            <img src={laptops} alt="" style={{ height: "60%" }} />
            <h4>
              <i>Laptops</i>
            </h4>
            <p>Classic gold & silver bracelets, pick your style.</p>
            <p>Ksh.300</p>
            <Link to="/design/a.cart/brace">
              <button className="btn-dark">Add to Cart</button>
            </Link>
          </div>
          <div class="col-sm-3">
            <img src={earpods} alt="" style={{ height: "60%" }} />
            <h4>
              <i>Earpods</i>
            </h4>
            <p>Classic gold & silver bracelets, pick your style.</p>
            <p>Ksh.300</p>
            <Link to="/design/a.cart/brace">
              <button className="btn-dark">Add to Cart</button>
            </Link>
          </div> */}
        </div>
        {/* <div className="row">
          <div class="col-sm-3">
            <img src={tablets} alt="" style={{ height: "60%" }} />
            <h4>
              <i>Tablets & iPads</i>
            </h4>
            <p>Classic gold & silver bracelets, pick your style.</p>
            <p>Ksh.300</p>
            <Link to="/design/a.cart/brace">
              <button className="btn-dark">Add to Cart</button>
            </Link>
          </div>
          <div class="col-sm-3">
            <img src={headphones} alt="" style={{ height: "60%" }} />
            <h4>
              <i>Headphones</i>
            </h4>
            <p>Classic gold & silver bracelets, pick your style.</p>
            <p>Ksh.300</p>
            <Link to="/design/a.cart/brace">
              <button className="btn-dark">Add to Cart</button>
            </Link>
          </div>
          <div class="col-sm-3">
            <img src={whole} alt="" style={{ height: "60%" }} />
            <h4>
              <i>Entire Set</i>
            </h4>
            <p>Classic gold & silver bracelets, pick your style.</p>
            <p>Ksh.300</p>
            <Link to="/design/a.cart/brace">
              <button className="btn-dark">Add to Cart</button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Electronic;
