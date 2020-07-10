import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="navbar-brand">
          <Link
            to="/Home"
            className="nav-link"
            style={{ color: "orange", fontWeight: "bold" }}
          >
            <div>Muvesuna</div>
          </Link>
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
            {/* <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{ color: "white", marginLeft: "1rem" }}
              >
                Login
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/About"
                className="nav-link"
                style={{ color: "white", marginLeft: "1rem" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Dark_Mode"
                className="nav-link"
                style={{ color: "white" }}
              >
                Dark Mode
              </Link>
            </li>
            <div style={{ color: "white", paddingTop: "7.5px" }}>||</div>
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Log Out
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
