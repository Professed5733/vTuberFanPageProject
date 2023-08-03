import React, { useState, useEffect } from "react";
import profilePicture from "../assets/Mika_Melatika_Portrait.webp";
import ProfileFetcher from "../components/ProfileFetcher";

const MikaProfilePage = () => {
  // Use state for getting main Data from WikiApi
  const [mikaProfileData, setMikaProfileData] = useState(null);
  // Use state for parsed data from the main data
  const [profileContent, setProfileContent] = useState("");
  const [personalityContent, setPersonalityContent] = useState("");

  // Define handle data update to be used to call on Profile fetcher
  const handleDataUpdate = (data) => {
    setMikaProfileData(data);
  };

  // UseEffect to initiate data parse if main data is available
  useEffect(() => {
    if (mikaProfileData) {
      parseProfileAndPersonality(mikaProfileData);
    }
  }, [mikaProfileData]);

  // Parsing data. Using JSON Stringify does not work! Main reason why I stayed up till 3AM
  const parseProfileAndPersonality = (data) => {
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

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src={profilePicture}
              alt="Mika Profile"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </div>
          <div className="col-md-8">
            <h1>Mika Melatika</h1>
            <hr />
            <div>
              <p>
                <strong>Profile:</strong>
              </p>
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
