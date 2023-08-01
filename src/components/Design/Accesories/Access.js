import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import framed from "./A.Images/glasses/framed.jpg";
import party from "./A.Images/glasses/party.jpg";
import shades from "./A.Images/glasses/shades.jpg";
import transparent from "./A.Images/glasses/transparent.png";
import bracelet from "./A.Images/Jewellary/bracelets.jpg";
import erings from "./A.Images/Jewellary/e-rings.jpg";
import crings from "./A.Images/Jewellary/c-rings.jpg";
import ear from "./A.Images/Jewellary/earrings.jpg";
import chain from "./A.Images/Jewellary/chain.jpg";
import mrings from "./A.Images/Jewellary/mens-ring.jpg";
import lrings from "./A.Images/Jewellary/l-rings.jpg";
import set from "./A.Images/Jewellary/set.jpg";
import men from "./A.Images/Watches/menswear.jpg";
import program from "./A.Images/Watches/programmable.jpg";
import pocket from "./A.Images/Watches/pocket.jpg";
import wset from "./A.Images/Watches/set.jpg";

const Accessories = () => {
  return (
    <div className="design">
      <h1 style={{ textAlign: "center" }}>
        <u>Accesories</u>
        <Link to="/design/shop">
          <button className="btn-dark">Back</button>
        </Link>
      </h1>
      <div>
        <h2>Jewellary</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3" style={{ marginLeft: "7%" }}>
              <img src={bracelet} alt="" />
              <h4>
                <i>Bracelets</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={crings} alt="" />
              <h4>
                <i>Couple rings</i>
              </h4>
              <p>Made with love.Cherish your love.</p>
              <p>Ksh.400</p>
              <Link to="/design/a.cart/crings">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={ear} alt="" />
              <h4>
                <i>Earrings</i>
              </h4>
              <p>Elegant and classic earrings.To blend with any wear.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/earrings">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={chain} alt="" />
              <h4>
                <i>Neck Chains</i>
              </h4>
              <p>Gold, silver, diamonds we,ve got them all.</p>
              <p>Ksh.350</p>
              <Link to="/design/a.cart/chain">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3" style={{ marginLeft: "7%" }}>
              <img src={lrings} alt="" />
              <h4>
                <i>Lady Rings</i>
              </h4>
              <p>Ladies we,ve got you.Feminine Elegance.</p>
              <p>Ksh.250</p>
              <Link to="/design/a.cart/lrings">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={mrings} alt="" />
              <h4>
                <i>Men rings</i>
              </h4>
              <p>So do our gentlemen, we have rings for you too.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/mrings">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={erings} alt="" />
              <h4>
                <i>Engagement Rings</i>
              </h4>
              <p>Wedding bells $ Engagement rings..</p>
              <p>Ksh.500</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={set} alt="" />
              <h4>
                <i>Entire set</i>
              </h4>
              <p>Also comes in a package, can buy them all at a fair price.</p>
              <p>Ksh.1500</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <h2>Watches</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3">
              <img src={wset} alt="" />
              <h4>
                <i>Lady Watches</i>
              </h4>
              <p>Feminine watches, keep time will looking amazing.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={men} alt="" />
              <h4>
                <i>Mens Watches</i>
              </h4>
              <p>Masculine watches, no more lateness</p>
              <p>Ksh.400</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={program} alt="" />
              <h4>
                <i>Programmable Watches</i>
              </h4>
              <p>Set all your data conveiniently.</p>
              <p>Ksh.500</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={pocket} alt="" />
              <h4>
                <i>Pocket watches</i>
              </h4>
              <p>Want someting antic & classy, get your collection</p>
              <p>Ksh.900</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <h2>Glasses</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3">
              <img src={framed} alt="" />
              <h4>
                <i>Framed glasses</i>
              </h4>
              <p>Look stylish, while looking all smart!! Get yours.</p>
              <p>Ksh.500</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={party} alt="" />
              <h4>
                <i>Party glasses</i>
              </h4>
              <p>Its party time! Take your pick today.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={shades} alt="" />
              <h4>
                <i>Shades</i>
              </h4>
              <p>No more straining in the sun.Get yours today!</p>
              <p>Ksh.400</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={transparent} alt="" />
              <h4>
                <i>Transparent glasses</i>
              </h4>
              <p>Want someting classy, get your collection</p>
              <p>Ksh.500</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Accessories;
