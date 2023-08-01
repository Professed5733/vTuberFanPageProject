import React, { useState, useEffect } from "react";
import useGet from "../hooks/useGet";
import {
  YOUTUBE_PLAYLIST_BASE_URL,
  YOUTUBE_VIDEO_BASE_URL,
} from "../utils/apiUrl";
import VideoDetails from "../components/VideoDetails";

const MikaVideoPage = () => {
  const [mikaData, setMikaData] = useState([]);
  //   const [mikaVideoDetails, setMikaVideoDetails] = useState([]);
  const fetchMikaData = useGet();
  //   const fetchMikaVideoDetails = useGet();

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

    // const videoIds = itemsData.map((item) => item.snippet.resourceId.videoId);

    // const videoIdsString = videoIds.join(",");
    // const detailsData = await fetchMikaVideoDetails(
    //   YOUTUBE_VIDEO_BASE_URL + `&id=${videoIdsString}` + `&key=${youtubeApiKey}`
    // );
    // const itemDataDetails = detailsData.items;
    // setMikaVideoDetails(itemDataDetails);
  };

  //   const getMikaDataDetails = async () => {
  //     const videoIds = mikaData.map((item) => item.snippet.resourceId.videoId);

  //     const videoIdsString = videoIds.join(",");

  //     const detailsData = await fetchMikaVideoDetails(
  //       YOUTUBE_VIDEO_BASE_URL + `&id=${videoIdsString}` + `&key=${youtubeApiKey}`
  //     );
  //     const itemDataDetails = detailsData.items;
  //     setMikaVideoDetails(itemDataDetails);
  //   };

  //   useEffect(() => {
  //     getMikaData();
  //   }, [fetchMikaData, fetchMikaVideoDetails, youtubeApiKey, mikaPlaylistId]);

  //   useEffect(() => {
  //     getMikaData().then(getMikaDataDetails);
  //   }, []);

  useEffect(() => {
    getMikaData();
  }, []);

  //   console.log(mikaData);
  // console.log(mikaVideoDetails);

  //   return (
  //     <div>
  //       <h2>Mika Data</h2>

  //       <pre>{JSON.stringify(mikaData, null, 2)}</pre>
  //       <h2>Mika Details</h2>
  //       <pre>{JSON.stringify(mikaVideoDetails, null, 2)}</pre>
  //     </div>
  //   );

  return (
    <>
      <VideoDetails mikaData={mikaData}></VideoDetails>
    </>
  );
};

export default MikaVideoPage;
