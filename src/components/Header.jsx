import React from "react";
import bannerImage from "../assets/banner.jpg";

const Header = () => {
  return (
    <>
      <img
        src={bannerImage}
        alt="Banner"
        style={{ maxWidth: "100%", maxHeight: "200px", width: "100%" }}
      ></img>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <form className="container-fluid justify-content-center">
          <button className="btn btn-outline-success me-2" type="button">
            Mika's Profile
          </button>
          <button className="btn btn-outline-success me-2" type="button">
            Mika's Videos
          </button>
        </form>
      </nav>
    </>
  );
};

export default Header;
