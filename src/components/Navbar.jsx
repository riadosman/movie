import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "./hamburger.png"
const Navbar = ({ value, setvalue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  py-3">
      <div className="container">
        <Link className="navbar-brand" href="/movie">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={img} alt="collepse" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/movie" className="nav-link active">
                All Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie/Create" className="nav-link active">
                Create Movie
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={(e) => setvalue(e.target.value)}
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
