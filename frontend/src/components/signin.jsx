import React, { useState } from "react";
import Input from "./common/input";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";
import jwtDecode from "jwt-decode";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const { token } = await loginUser(email, password);
    const decoded = jwtDecode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("name", decoded.name);
    navigate("/home");
  };

  return (
    <section className="h-100">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div
          className="card text-black m-auto"
          style={{ borderRadius: "10px" }}
        >
          <div className="row justify-content-center align-items-center px-5">
            <p className="text-center h1 fw-bold mb-4 mx-1 mt-4">Sign In</p>
            <form className="mx-1" onSubmit={handleLogin}>
              <Input
                label="Your Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-check d-flex justify-content-center mb-4">
                <label className="form-check-label">
                  Don't have an account ? <Link to="/">Sign Up</Link>
                </label>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  // onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
