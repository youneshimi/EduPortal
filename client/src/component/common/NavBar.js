import React from "react";
import { FaChartBar, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <FaChartBar className="me-2" /> EduPortal
        </Link>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/view-students">
                <FaUser className="me-1" /> View Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                <FaCog className="me-1" /> Settings
              </Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
