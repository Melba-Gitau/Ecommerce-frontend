import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cwool from "./ladies/sweaters/cashmere-wool.jpg";
import duster from "./ladies/sweaters/duster.jpg";
import denim from "./ladies/sweaters/denim.jpg";
import fabric from "./ladies/sweaters/fabric.jpg";
import fashion from "./ladies/sweaters/fashion.jpg";
import overcoat from "./ladies/sweaters/overcoat.jpg";
import sweats from "./ladies/sweaters/sweats.jpg";
import turtle from "./ladies/sweaters/cozy.jpg";
import pcasual from "./ladies/tops/casual-print.jpg";
import offshoulder from "./ladies/tops/offshoulder.jpg";
import sformal from "./ladies/tops/formal.jpg";
import silk from "./ladies/tops/silk.jpg";
import siphon from "./ladies/tops/siphon.jpg";
import apparel from "./ladies/tops/apparel.jpg";
import crotchet from "./ladies/tops/crochet.jpg";
import bfashion from "./ladies/tops/fashion-blouses.jpg";
import cargo from "./ladies/pants/cargo.png";
import pallazo from "./ladies/pants/pallazo.jpg";
import leatherp from "./ladies/pants/leather pants.jpg";
import skinny from "./ladies/pants/skinny-jeans.jpg";
import pwide from "./ladies/pants/wide-legged.jpg";
import psweats from "./ladies/pants/sweat-pants.jpg";
import ripped from "./ladies/pants/ripped-jeans.jpg";
import shorts from "./ladies/pants/shorts.jpg";
import tpiece from "./ladies/suits/3piece.jpg";
import sprint from "./ladies/suits/print suits.png";
import jumpsuit from "./ladies/suits/jumpsuit.png";
import blazer from "./ladies/suits/blazer.jpg";

const Women = () => {
  return (
    <div className="design">
      <h1 style={{ textAlign: "center" }}>
        <u>Ladies</u>
        <Link to="/design/shop">
          <button className="btn-dark">Back</button>
        </Link>
      </h1>

      <div>
        <h2>Sweaters & Jackets</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={cwool} alt="" style={{ height: "60%" }} />
              <h4>
                <i> Cashmere wool</i>
              </h4>
              <p>Cozy woolen sweaters that define your style.</p>
              <p>Ksh.800</p>
              <Link to="/design/l.cart/cash">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={duster} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Duster sweaters</i>
              </h4>
              <p>
                The cold weather necessitates comfortable, fashionable Sweaters
              </p>
              <p>Ksh.500</p>
              <Link to="/design/l.cart/duster">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={denim} alt="" style={{ height: "60%" }} />
              <h4>
                <i> Denim jackets</i>
              </h4>
              <p>Womens Cropped Stretch Fitted Denim Jacket.</p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/denim">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={fabric} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Fabric sweaters</i>
              </h4>
              <p>Be warm while looking classy with our fabric sweaaters.</p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/fabric">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={fashion} alt="" style={{ height: "60%" }} />
              <h4>
                <i> Fashion sweaters</i>
              </h4>
              <p>Women's Sweater Striped Cutout Cold-Shoulder Tunic Sweater.</p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/fashion">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={overcoat} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Overcoats</i>
              </h4>
              <p>Elegant Collar Long Sleeve Woven Fabric overcoats.</p>
              <p>Ksh.700</p>
              <Link to="/design/l.cart/overcoat">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={sweats} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Varsity jackets</i>
              </h4>
              <p>Girls Letter Patched Striped Trim Varsity Jackets.</p>
              <p>Ksh.450</p>
              <Link to="/design/l.cart/varsity">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "500px" }}>
              <img src={turtle} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Turtleneck Sweaters</i>
              </h4>
              <p>Women's Long Sleeve Turtleneck Knit Oversized Pullover Tops</p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/tuttle">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <h2>Tops</h2>
        <Carousel>
          <div className="row">
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={silk} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Silk tank-tops</i>
              </h4>
              <p>Ladies V-Neck Camisole Blouse Satin Tank Shirt..</p>
              <p>Ksh.300</p>
              <Link to="/design/l.cart/silk">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={pcasual} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Casual print</i>
              </h4>
              <p>Casual print classy blouses, look cool & classy.</p>
              <p>Ksh.350</p>
              <Link to="/design/l.cart/print">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={sformal} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Formal blouses</i>
              </h4>
              <p> Shirts Satin Turtleneck Elegant Plain Blouses And Shirts.</p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/formal">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={offshoulder} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Offshoulder tops</i>
              </h4>
              <p>Off Shoulder Lantern Sleeve Floral Print Top.</p>
              <p>Ksh.350</p>
              <Link to="/design/l.cart/off">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={siphon} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Siphon tops</i>
              </h4>
              <p>
                Elegant Long Lentern Sleeve Tops Women Tunic Cowl Neck Casual
                Office Blouses
              </p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/siphon">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={crotchet} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Crochet tops</i>
              </h4>
              <p>Aesthetic & stylish crochet tops for women.</p>
              <p>Ksh.350</p>
              <Link to="/design/l.cart/crochet">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={apparel} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Apparel Tops</i>
              </h4>
              <p>Tops Sleeve Length:Long Sleeve Apparel tops.</p>
              <p>Ksh.300</p>
              <Link to="/design/l.cart/apparel">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={bfashion} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Trendy tops</i>
              </h4>
              <p>Get the latest, stylish, classy trendy tops in the market.</p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/trendy">
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
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={tpiece} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Three-piece suit</i>
              </h4>
              <p>
                Formal Slim Fit 3 Piece Long Sleeved Elegant Blazer Work Set
              </p>
              <p>Ksh.7500</p>
              <Link to="/design/l.cart/3piece">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={blazer} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Blazer</i>
              </h4>
              <p>
                Elegant Collar Long Sleeve Fabric Plain Regular Embellished
                blazers
              </p>
              <p>Ksh.1000</p>
              <Link to="/design/l.cart/blazer">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={jumpsuit} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Jumpsuits</i>
              </h4>
              <p>
                Beautiful women jumpsuit, perfect for summer, relaxed days out.
              </p>
              <p>Ksh.2500</p>
              <Link to="/design/l.cart/jump">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "480px" }}>
              <img src={sprint} alt="" style={{ height: "58%" }} />
              <h4>
                <i>Casual-print suits</i>
              </h4>
              <p>Casual classic print suits for everyday outing.</p>
              <p>Ksh.6500</p>
              <Link to="/design/l.cart/casual">
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
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={cargo} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Cargo pants</i>
              </h4>
              <p>
                Discover the latest collection of women's cargo style bottoms.
              </p>
              <p>Ksh.500</p>
              <Link to="/design/l.cart/cargo">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={leatherp} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Leather pants</i>
              </h4>
              <p>
                Pants in styles like wide leg pants, skin-tight leather pants.
              </p>
              <p>Ksh.600</p>
              <Link to="/design/l.cart/leather">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={pallazo} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Pallazos</i>
              </h4>
              <p>
                Modern vintage that blends with vintage-styled clothing
                pallazos.
              </p>
              <p>Ksh.800</p>
              <Link to="/design/l.cart/pallazo">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={skinny} alt="" style={{ height: "60%" }} />
              <h4>
                <i>High-waist jeans</i>
              </h4>
              <p>
                {" "}
                Denim Plain Skinny Embellished High Stretch Women Clothing.
              </p>
              <p>Ksh.350</p>
              <Link to="/design/l.cart/jeans">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={pwide} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Wide-legged jeans</i>
              </h4>
              <p>Denim Plain Wide Leg Embellished Women Denim.</p>
              <p>Ksh.350</p>
              <Link to="/design/l.cart/wdenim">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={psweats} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Sweat pants</i>
              </h4>
              <p>Cormfy look, great fashion, get yours today.</p>
              <p>Ksh.300</p>
              <Link to="/design/l.cart/psweats">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={shorts} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Shorts</i>
              </h4>
              <p>Looking for a comfortable yet stylish option for summer?</p>
              <p>Ksh.250</p>
              <Link to="/design/l.cart/shorts">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
            <div class="col-sm-3" style={{ height: "530px" }}>
              <img src={ripped} alt="" style={{ height: "60%" }} />
              <h4>
                <i>Ripped jeans</i>
              </h4>
              <p>Denim Plain Tapered Embellished Non-Stretch Women Denim.</p>
              <p>Ksh.400</p>
              <Link to="/design/l.cart/ripped">
                <button className="btn-dark">Add to Cart</button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Women;
