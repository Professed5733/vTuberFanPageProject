import React, { useEffect } from "react";
import useGet from "../hooks/useGet";
import { FANDOM_WIKI_MIKA_URL } from "../utils/apiUrl";

const ProfileFetcher = ({ onDataUpdate }) => {
  const fetchMikaProfile = useGet();

  const getMikaProfile = async () => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = FANDOM_WIKI_MIKA_URL;
    const data = await fetchMikaProfile(apiUrl);
    const contentData = data.query.pages[0].revisions[0].slots.main.content;
    onDataUpdate(contentData);
  };

  useEffect(() => {
    getMikaProfile();
  }, []);
  return <div></div>;
};

export default ProfileFetcher;
