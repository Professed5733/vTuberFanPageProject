import React, { useEffect } from "react";
import useGet from "../hooks/useGet";
import { YOUTUBE_PLAYLIST_BASE_URL } from "../utils/apiUrl";

const DataFetcher = ({ onDataUpdate }) => {
  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const mikaPlaylistId = "UUahgMxSIQ2zIRrPKhM6Mjvg";
  const fetchMikaData = useGet();

  const getMikaData = async () => {
    const data = await fetchMikaData(
      YOUTUBE_PLAYLIST_BASE_URL +
        `&playlistId=${mikaPlaylistId}` +
        `&key=${youtubeApiKey}`
    );
    onDataUpdate(data); // Pass the data to the parent component
  };

  useEffect(() => {
    getMikaData();
  }, []);

  return null; // We don't need to render anything in DataFetcher
};

export default DataFetcher;
