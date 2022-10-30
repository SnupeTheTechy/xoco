import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [open, setOpen] = useState(false);
  const logo = (
    <div className="hamburger-logo">
      <h1>XOCO</h1>
    </div>
  );

  const hamburger = (
    <div className="hamburger-content">
      <div className="hamburger-links link">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/">
          Products
        </Link>
        <Link className="link" to="/">
          Best
        </Link>
        <Link className="link" to="/">
          New Arrivals
        </Link>
      </div>
      <div className="hamburger-search-bar">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      {/* <hr /> */}
      <div className="profile">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="profileImage"
          className="profile-image"
        />
        <div className="profile-text">
          <h3>Jeremy Woods</h3>
          <p>jeremywoods@gmail.com</p>
        </div>
      </div>
    </div>
  );

  const regularLinks = (
    <div className="navbar-content">
      <div className="navbar-logo">
        <h1>XOCO</h1>
      </div>
      <div className="navbar-links link">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/">
          Products
        </Link>
        <Link className="link" to="/">
          Best
        </Link>
        <Link className="link" to="/">
          New Arrivals
        </Link>
      </div>
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      {/* <hr /> */}
      <div className="profile">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="profileImage"
          className="profile-image"
        />
        <div className="profile-text">
          <h3>Jeremy Woods</h3>
          <p>jeremywoods@gmail.com</p>
        </div>
      </div>

      <div className="setting">
        <SettingsIcon />
      </div>
    </div>
  );

  return (
    <div className="navbar-container">
      {logo}
      <MenuIcon className="hamburger" onClick={() => setOpen(!open)} />
      {open ? hamburger : regularLinks}
    </div>
  );
}

export default NavBar;
