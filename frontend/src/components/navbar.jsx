import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ loggedInUserName }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-light bg-light justify-content-between mx-4">
      <div>
        <h3>Weather App</h3>
      </div>
      <div className="d-flex gap-3">
        <h4>{localStorage.getItem("name")}</h4>
        <button
          type="link"
          className="btn btn-outline-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
