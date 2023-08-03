import React from "react";
import bannerImage from "../assets/banner.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt="Banner"
        style={{ maxWidth: "100%", maxHeight: "200px", width: "100%" }}
      ></img>
      {/* NavBar */}
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid justify-content-center">
          <NavLink
            className="btn btn-outline-success me-2"
            type="button"
            to="/MikaProfilePage"
          >
            Mika's Profile
          </NavLink>
          <NavLink
            className="btn btn-outline-success me-2"
            type="button"
            to="/MikaVideoPage"
          >
            Mika's Videos
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
