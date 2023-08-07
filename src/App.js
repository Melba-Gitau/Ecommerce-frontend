import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Design/Home";
import DashBoard from "./components/Design/DashBoard";
import Add from "./components/Users/Add";
import UsersList from "./components/Users/UsersList";
import AddProduct from "./components/Products/AddProduct";
import AddCustomers from "./components/Customers/AddCustomers";
import ProductList from "./components/Products/ProductList";
import Shop from "./components/Design/Shop";
import Women from "./components/Design/Women/Women";
import Men from "./components/Design/Men/Men";
import Access from "./components/Design/Accesories/Access";
import Electronic from "./components/Design/Electronics/Electronic";
import Bracelet from "./components/Design/Accesories/A.Images/A.cart/Bracelet";
import Mrings from "./components/Design/Accesories/A.Images/A.cart/Mrings";
import Crings from "./components/Design/Accesories/A.Images/A.cart/Crings";
import Chain from "./components/Design/Accesories/A.Images/A.cart/Chain";
import Ear from "./components/Design/Accesories/A.Images/A.cart/Ear";
import Lrings from "./components/Design/Accesories/A.Images/A.cart/Lrings";
import Login from "./components/Design/Login";
import Signup from "./components/Design/Signup";
import Cashmere from "./components/Design/Women/ladies/L.cart/Cashmere";
import Duster from "./components/Design/Women/ladies/L.cart/Duster";
import Denim from "./components/Design/Women/ladies/L.cart/Denim";
import Fabric from "./components/Design/Women/ladies/L.cart/Fabric";
import Fashion from "./components/Design/Women/ladies/L.cart/Fashion";
import Overcoat from "./components/Design/Women/ladies/L.cart/Overcoat";
import Varsity from "./components/Design/Women/ladies/L.cart/Varsity";
import Tuttle from "./components/Design/Women/ladies/L.cart/Tuttle";
import Silk from "./components/Design/Women/ladies/L.cart/Tops/Silk";
import Print from "./components/Design/Women/ladies/L.cart/Tops/Print";
import Formal from "./components/Design/Women/ladies/L.cart/Tops/Formal";
import Siphon from "./components/Design/Women/ladies/L.cart/Tops/Siphon";
import Offshoulder from "./components/Design/Women/ladies/L.cart/Tops/Offshoulder";
import Crochet from "./components/Design/Women/ladies/L.cart/Tops/Crochet";
import Apparel from "./components/Design/Women/ladies/L.cart/Tops/Apparel";
import Trendy from "./components/Design/Women/ladies/L.cart/Tops/Trendy";
import Tpiece from "./components/Design/Women/ladies/L.cart/Suits/3piece";
import Blazer from "./components/Design/Women/ladies/L.cart/Suits/Blazer";
import Jumpsuit from "./components/Design/Women/ladies/L.cart/Suits/Jump";
import Casual from "./components/Design/Women/ladies/L.cart/Suits/casual";
import Cargo from "./components/Design/Women/ladies/L.cart/pants/Cargo";
import Leather from "./components/Design/Women/ladies/L.cart/pants/Leather";
import Pallazo from "./components/Design/Women/ladies/L.cart/pants/Pallazo";
import Jeans from "./components/Design/Women/ladies/L.cart/pants/Jeans";
import Wdenim from "./components/Design/Women/ladies/L.cart/pants/Wdenim";
import Psweats from "./components/Design/Women/ladies/L.cart/pants/Psweats";
import Shorts from "./components/Design/Women/ladies/L.cart/pants/Shorts";
import Ripped from "./components/Design/Women/ladies/L.cart/pants/Ripped";
import Plaid from "./components/Design/Men/M.cart/Sweaters/Plaid";
import Patterned from "./components/Design/Men/M.cart/Sweaters/Patterned";
import Knit from "./components/Design/Men/M.cart/Sweaters/Knit";
import Tuttleneck from "./components/Design/Men/M.cart/Sweaters/Tuttlneck";
import Sweats from "./components/Design/Men/M.cart/Sweaters/Sweats";
import CategoryList from "./components/Category/CategoryList";
import AddCategory from "./components/Category/AddCategory";
import SubCategory from "./components/Category/SubCategory";
import SubCategoryList from "./components/Category/SubCategoryList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route exact path="/users/add" element={<Add />} />
          <Route exact path="/users/list" element={<UsersList />} />
          <Route exact path="/products/add" element={<AddProduct />} />
          <Route exact path="/products/list" element={<ProductList />} />
          <Route exact path="/category/add" element={<AddCategory />} />
          <Route exact path="/category/list" element={<CategoryList />} />
          <Route exact path="/subcategory/add" element={<SubCategory />} />
          <Route exact path="/subcategory/list" element={<SubCategoryList />} />
          <Route exact path="/customers/add" element={<AddCustomers />} />
          <Route exact path="/design/l" element={<Login />} />
          <Route exact path="/design/s" element={<Signup />} />
          <Route exact path="/design/shop" element={<Shop />} />
          <Route exact path="/design/women" element={<Women />} />
          <Route exact path="/design/men" element={<Men />} />
          <Route exact path="/design/access" element={<Access />} />
          <Route exact path="/design/elect" element={<Electronic />} />
          <Route exact path="/design/a.cart/brace" element={<Bracelet />} />
          <Route exact path="/design/a.cart/mrings" element={<Mrings />} />
          <Route exact path="/design/a.cart/crings" element={<Crings />} />
          <Route exact path="/design/a.cart/chain" element={<Chain />} />
          <Route exact path="/design/a.cart/earrings" element={<Ear />} />
          <Route exact path="/design/a.cart/lrings" element={<Lrings />} />
          <Route exact path="/design/l.cart/cash" element={<Cashmere />} />
          <Route exact path="/design/l.cart/duster" element={<Duster />} />
          <Route exact path="/design/l.cart/denim" element={<Denim />} />
          <Route exact path="/design/l.cart/fabric" element={<Fabric />} />
          <Route exact path="/design/l.cart/fashion" element={<Fashion />} />
          <Route exact path="/design/l.cart/overcoat" element={<Overcoat />} />
          <Route exact path="/design/l.cart/varsity" element={<Varsity />} />
          <Route exact path="/design/l.cart/tuttle" element={<Tuttle />} />
          <Route exact path="/design/l.cart/silk" element={<Silk />} />
          <Route exact path="/design/l.cart/print" element={<Print />} />
          <Route exact path="/design/l.cart/formal" element={<Formal />} />
          <Route exact path="/design/l.cart/siphon" element={<Siphon />} />
          <Route exact path="/design/l.cart/off" element={<Offshoulder />} />
          <Route exact path="/design/l.cart/crochet" element={<Crochet />} />
          <Route exact path="/design/l.cart/apparel" element={<Apparel />} />
          <Route exact path="/design/l.cart/trendy" element={<Trendy />} />
          <Route exact path="/design/l.cart/3piece" element={<Tpiece />} />
          <Route exact path="/design/l.cart/blazer" element={<Blazer />} />
          <Route exact path="/design/l.cart/jump" element={<Jumpsuit />} />
          <Route exact path="/design/l.cart/casual" element={<Casual />} />
          <Route exact path="/design/l.cart/cargo" element={<Cargo />} />
          <Route exact path="/design/l.cart/leather" element={<Leather />} />
          <Route exact path="/design/l.cart/pallazo" element={<Pallazo />} />
          <Route exact path="/design/l.cart/jeans" element={<Jeans />} />
          <Route exact path="/design/l.cart/wdenim" element={<Wdenim />} />
          <Route exact path="/design/l.cart/psweats" element={<Psweats />} />
          <Route exact path="/design/l.cart/shorts" element={<Shorts />} />
          <Route exact path="/design/l.cart/ripped" element={<Ripped />} />
          <Route exact path="/design/m.cart/plaid" element={<Plaid />} />
          <Route exact path="/design/m.cart/pattern" element={<Patterned />} />
          <Route exact path="/design/m.cart/knit" element={<Knit />} />
          <Route exact path="/design/m.cart/tuttle" element={<Tuttleneck />} />
          <Route exact path="/design/m.cart/sweats" element={<Sweats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
