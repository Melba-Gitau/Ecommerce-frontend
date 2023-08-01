import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      contact === "" ||
      password === "" ||
      email === "" ||
      role === ""
    ) {
      alert("All fields are mandatory!");
      return;
    }

    const newSignup = {
      name: name,
      contact: contact,
      password: password,
      email: email,
      role: role,
    };

    setSignup((Signup) => [...Signup, newSignup]);
    setName("");
    setContact("");
    setPassword("");
    setEmail("");
    setRole("");
  };

  return (
    <div className="login">
      <div className="row" style={{ paddingTop: "2%" }}>
        <div className="col-sm-6">
          <div className="title" style={{ marginTop: "15%" }}>
            <h1>Ecom-Web</h1>
            <div className="btn" style={{ marginTop: "20%" }}>
              <button
                type="submit"
                className="btn btn-dark"
                style={{ borderRadius: "5px" }}
              >
                Welcome
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form2">
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
                Sign up:
              </h3>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Contact:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
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
              <div>
                <label>Role:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="btn2">
                <Link to="/dashboard">
                  <button type="submit" className="btn btn-dark">
                    Submit
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

export default Signup;
