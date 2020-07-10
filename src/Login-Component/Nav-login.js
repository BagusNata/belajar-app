import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav style={{paddingTop:"10px",paddingBottom:"10px"}} className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="navbar-brand">
          <div style={{ color: "orange", fontWeight: "bold" }}>Muvesuna</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <div className="welcome">Welcome to Muvesuna Shoes Store</div>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{ color: "white", marginLeft: "21rem" }}
              >
                Login 
              </Link>
            </li>
            <div style={{color:"white",paddingTop:"8px"}}>||</div>
            <li className="nav-item">
              <Link
                to="/Signup"
                className="nav-link"
                style={{ color: "white"}}
              >
                Sign up
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
