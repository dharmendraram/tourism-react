import React from "react";
import logo from "../logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
const Navbar = () => {
  return (
    <>
      {/* heaader section start */}
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="w-100" alt="" />
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
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Destinations
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tour Package
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Package
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Package Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blogs
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Blogs pages
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blogs deatils
                      </a>
                    </li>
                  </ul>
                </li>
                
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Gallery page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Guide page
                      </a>
                    </li>
                  </ul>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="user-icon">
                <ul className="d-flex gap-3">
                  <li>
                    <a href="">
                      <i class="bi bi-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="bi bi-person-fill "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        
      </header>
      {/* header section end */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default Navbar;
