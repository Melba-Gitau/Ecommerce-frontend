import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState([]);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }

    const newLogin = {
      password: password,
      email: email,
    };

    setLogin((Login) => [...Login, newLogin]);
    setPassword("");
    setEmail("");
  };

  return (
    <div className="login">
      <div className="row">
        <div className="col-sm-6">
          <div className="title">
            <h1>Ecom-Web</h1>
            <p
              style={{
                marginLeft: "10%",
                fontFamily: "Georgia",
                fontSize: "20px",
                marginTop: "15%",
              }}
            >
              Don't have an Account?
            </p>
            <div className="btn">
              <Link to="/dashboard">
                <button type="submit" className="btn btn-dark">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form1">
            <form onSubmit={add}>
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Georgia",
                  fontWeight: "500",
                  fontSize: "30px",
                }}
              >
                Log in:
              </h3>
              <div>
                <label>Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="btn2">
                <Link to="/dashboard">
                  <button type="submit" className="btn btn-dark">
                    Log in
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
