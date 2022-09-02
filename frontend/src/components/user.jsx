import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Input from "./common/input";
import { registerUser } from "../services/api";

function User() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const { token } = await registerUser(name, email, phone, password);
    console.log(token);
    localStorage.setItem("token", token);
    navigate("/home");
  };

  return (
    <>
      <section className="h-100">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div
            className="card text-black m-auto"
            style={{ borderRadius: "10px" }}
          >
            <div className="row justify-content-center align-items-center px-5">
              <p className="text-center h1 fw-bold mb-4 mx-1 mt-4">Sign up</p>
              <form className="mx-1" onSubmit={handleRegister}>
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <Input
                  label="Phone"
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <div className="form-check d-flex justify-content-center mb-4">
                  <label className="form-check-label">
                    Already have an account ? <Link to="/signin">Sign In</Link>
                  </label>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default User;
