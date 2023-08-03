import React, { useEffect } from "react";
import useGet from "../hooks/useGet";
import { FANDOM_WIKI_MIKA_URL } from "../utils/apiUrl";

const ProfileFetcher = ({ onDataUpdate }) => {
  // Prop in onDataUpdate from Profile Page
  // fetch data using useGet hook
  const fetchMikaProfile = useGet();

  const getMikaProfile = async () => {
    const apiUrl = FANDOM_WIKI_MIKA_URL;
    const data = await fetchMikaProfile(apiUrl);
    const contentData = data.query.pages[0].revisions[0].slots.main.content;
    // send data back to Profile Page
    onDataUpdate(contentData);
  };

  useEffect(() => {
    getMikaProfile();
  }, []);
  return <div></div>;
};

export default ProfileFetcher;
