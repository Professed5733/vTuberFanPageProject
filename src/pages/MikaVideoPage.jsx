import React, { useState, useEffect } from "react";
import useGet from "../hooks/useGet";
import { YOUTUBE_PLAYLIST_BASE_URL } from "../utils/apiUrl";
import VideoDetails from "../components/VideoDetails";

const MikaVideoPage = () => {
  // Use state for getting data from YoutubeAPI
  const [mikaData, setMikaData] = useState([]);

  // Fetch data using the useGet Hook
  const fetchMikaData = useGet();

  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const mikaPlaylistId = "UUahgMxSIQ2zIRrPKhM6Mjvg";

  const getMikaData = async () => {
    const data = await fetchMikaData(
      YOUTUBE_PLAYLIST_BASE_URL +
        `&playlistId=${mikaPlaylistId}` +
        `&key=${youtubeApiKey}`
    );
    const itemsData = data.items;
    setMikaData(itemsData);
  };

  useEffect(() => {
    getMikaData();
  }, []);

  return (
    <>
      <VideoDetails mikaData={mikaData}></VideoDetails>
    </>
  );
};

export default MikaVideoPage;
