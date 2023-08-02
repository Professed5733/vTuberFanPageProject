import React, { useState, useEffect } from "react";
import profilePicture from "../assets/Mika_Melatika_Portrait.webp";
import ProfileFetcher from "../components/ProfileFetcher";

const MikaProfilePage = () => {
  const [mikaProfileData, setMikaProfileData] = useState(null);
  const [profileContent, setProfileContent] = useState("");
  const [personalityContent, setPersonalityContent] = useState("");

  const handleDataUpdate = (data) => {
    setMikaProfileData(data);
  };

  useEffect(() => {
    if (mikaProfileData) {
      parseProfileAndPersonalityAndHistory(mikaProfileData);
    }
  }, [mikaProfileData]);

  const parseProfileAndPersonalityAndHistory = (data) => {
    const profileRegex = /==Profile==\n([\s\S]*?)<ref>/;
    const personalityRegex = /==Personality==\n([\s\S]*?)(?=\n==\w+)/i;

    const profileMatch = profileRegex.exec(data);
    const personalityMatch = personalityRegex.exec(data);

    if (profileMatch && profileMatch[1]) {
      setProfileContent(profileMatch[1].trim());
    } else {
      console.log("Profile section not found.");
    }

    if (personalityMatch && personalityMatch[1]) {
      setPersonalityContent(personalityMatch[1].trim());
    } else {
      console.log("Personality section not found.");
    }
  };

  return (
    <>
      <ProfileFetcher onDataUpdate={handleDataUpdate}></ProfileFetcher>

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
            <h1>Mika Melatika</h1>
            <hr />
            <div>
              <p>
                <strong>Profile:</strong>
              </p>
              {/* Use dangerouslySetInnerHTML to render the HTML tags in the content */}
              <p dangerouslySetInnerHTML={{ __html: profileContent }} />
            </div>
            <div>
              <p>
                <strong>Personality:</strong>
              </p>
              <p>{personalityContent}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MikaProfilePage;
