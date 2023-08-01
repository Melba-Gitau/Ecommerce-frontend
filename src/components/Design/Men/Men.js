import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import trench from "./M.images/jackets/trench.jpg";
import pattern from "./M.images/jackets/patterned.jpg";
import leather from "./M.images/jackets/leather.jpg";
import sweater from "./M.images/jackets/sweater.jpg";
import sporty from "./M.images/jackets/sporty.jpg";
import casual from "./M.images/jackets/casual jacket.png";
import strip from "./M.images/shirts/stripped.jpg";
import gym from "./M.images/shirts/gym.jpg";
import plain from "./M.images/shirts/plain.jpg";
import turtle from "./M.images/shirts/tuttleneck.jpg";
import tcasual from "./M.images/shirts/casual.jpg";
import longsleeve from "./M.images/shirts/long-sleeved.png";
import tshirt from "./M.images/shirts/t-shirts.jpg";
import patterned from "./M.images/shirts/patterned.jpg";
import piece from "./M.images/suits/full-suit.jpg";
import svest from "./M.images/suits/suit and vest.jpg";
import vest from "./M.images/suits/vest.jpg";
import pants from "./M.images/suits/pants.jpg";
import cargo from "./M.images/pants/cargo-pants.jpg";
import fkhakis from "./M.images/pants/formal-khakis.jpg";
import jeans from "./M.images/pants/jeans-pants.jpg";
import pkhakis from "./M.images/pants/pattern-khakis.jpg";
import lpants from "./M.images/pants/leather-pants.jpg";
import sweatpants from "./M.images/pants/sweatpants.jpg";
import wjeans from "./M.images/pants/wide-jeans.jpg";
import goth from "./M.images/pants/goth.png";
import airforce from "./M.images/footwear/airforce.jpg";
import loafers from "./M.images/footwear/loafers.jpg";
import official from "./M.images/footwear/official.jpg";
import boots from "./M.images/footwear/boots.jpg";
import sandals from "./M.images/footwear/sandals.jpg";
import sneakers from "./M.images/footwear/sneakers.jpg";
import Ocasual from "./M.images/footwear/casual-official.jpg";
import htops from "./M.images/footwear/htops.jpg";
import plaid from "./M.images/jackets/trendy-plaid.jpg";
import knit from "./M.images/jackets/Knit jumper.jpg";

const Men = () => {
  return (
    <div className="design">
      <h1 style={{ textAlign: "center" }}>
        <u>Men</u>
        <Link to="/design/shop">
          <button className="btn-dark">Back</button>
        </Link>
      </h1>

      <div>
        <h2>Sweaters & Jackets</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={plaid} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Casual-plaid</i>
              </h4>
              <p>'Daily wear system': look great with minimal effort</p>
              <p>Ksh.900</p>
              <Link to="/design/m.cart/plaid">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={pattern} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Patterned Hoodies</i>
              </h4>
              <p>Multicolor Casual Long Sleeve Cotton Colorblock Pullovers.</p>
              <p>Ksh.800</p>

              <Link to="/design/m.cart/pattern">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={knit} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Knitted jumper</i>
              </h4>
              <p>Long Sleeve Fabric Plain Medium Stretch Knitwear.</p>
              <p>Ksh.700</p>
              <Link to="/design/m.cart/knit">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={sweater} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Turtleneck Sweaters</i>
              </h4>
              <p>Pullover KnitBraided Solid Color Turtleneck Vintage Style</p>
              <p>Ksh.700</p>
              <Link to="/design/m.cart/tuttle">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={sporty} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Sweat shirts</i>
              </h4>
              <p>Overview Men's heather crew neck sweatshirts</p>
              <p>Ksh.400</p>
              <Link to="/design/m.cart/sweats">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={casual} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Classic casual jackets</i>
              </h4>
              <p>Classic masculine casual jackets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={leather} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Leather jackets</i>
              </h4>
              <p>Genuine Black Leather men Jackets</p>
              <p>Ksh.1000</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={trench} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Trench coats</i>
              </h4>
              <p>Woolen Thick Warm Pocket Long Sleeve Business Trench Coats</p>
              <p>Ksh.1500</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <h2>Shirts and T-shirts</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3">
              <img src={plain} alt="" />
              <h4>
                <i>Formal shirts</i>
              </h4>
              <p>
                The wide range of formal shirts for men is made in different
                colour
              </p>
              <p>Ksh.400</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={gym} alt="" />
              <h4>
                <i>Gym Shirts</i>
              </h4>
              <p> Fitness Gym Shirts, Fit Running T-Shirt, Men Sport Shirt .</p>
              <p>Ksh.600</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={strip} alt="" />
              <h4>
                <i>Stripped shirts</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={turtle} alt="" />
              <h4>
                <i>Tuttlenecks</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3">
              <img src={tcasual} alt="" />
              <h4>
                <i>Casual shirts</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={longsleeve} alt="" />
              <h4>
                <i>Long-sleeved shirts</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={tshirt} alt="" />
              <h4>
                <i>Regular T-shirts</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={patterned} alt="" />
              <h4>
                <i>Casual-print Shirts</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <h2>Suits</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3">
              <img src={piece} alt="" />
              <h4>
                <i>Three-piece suit</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={vest} alt="" />
              <h4>
                <i>Vests</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={svest} alt="" />
              <h4>
                <i>Suit jacket & vest</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={pants} alt="" />
              <h4>
                <i>Suit pants</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <h2>Pants</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={cargo} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Cargo-pants</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={fkhakis} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Formal Khakis</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={jeans} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Jeans</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={pkhakis} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Patterned Khakis</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={lpants} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Leather pants</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={sweatpants} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Sweatpants</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={goth} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Gothic pants</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={wjeans} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Baggy jeans</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <h2>Shoes</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3">
              <img src={airforce} alt="" />
              <h4>
                <i>Airforce</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={loafers} alt="" />
              <h4>
                <i>Loafers</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={official} alt="" />
              <h4>
                <i>Official wear</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={boots} alt="" />
              <h4>
                <i>Boots</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3">
              <img src={sandals} alt="" />
              <h4>
                <i>sandals</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={sneakers} alt="" />
              <h4>
                <i>Sneakers</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={Ocasual} alt="" />
              <h4>
                <i>Casual footwear</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
              <Link to="/design/a.cart/brace">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3">
              <img src={htops} alt="" />
              <h4>
                <i>High-Tops</i>
              </h4>
              <p>Classic gold & silver bracelets, pick your style.</p>
              <p>Ksh.300</p>
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

export default Men;
