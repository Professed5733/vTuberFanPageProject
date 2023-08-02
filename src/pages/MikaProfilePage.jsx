import React from "react";
import profilePicture from "../assets/Mika_Melatika_Portrait.webp";

const MikaProfilePage = () => {
  return (
    <>
      {/* Profile Information */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            {/* Mika's Profile Picture */}
            <img
              src={profilePicture} // Replace with the actual path to Mika's profile picture
              alt="Mika Profile"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </div>
          <div className="col-md-8">
            {/* Mika's Profile Details */}
            <h1>Mika's Profile</h1>
            <p>Name: Mika Melatika</p>
            <p>Description: [Add a brief description about Mika here]</p>
            {/* Add more profile details here */}
          </div>
        </div>
      </div>

      {/* Other Profile Sections */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            {/* Add a section for Mika's videos, playlists, etc. */}
          </div>
          <div className="col-md-6">{/* Add other sections as needed */}</div>
        </div>
      </div>
    </>
  );
};

export default MikaProfilePage;
