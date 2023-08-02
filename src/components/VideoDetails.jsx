import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoCard from "./VideoCard";

const VideoDetails = (props) => {
  // const selectedVideo = mikaData.find(
  //   (item) => item.snippet.resourceId.videoId === id
  // );

  return (
    <>
      <div class="container">
        <div class="row">
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
          <VideoCard></VideoCard>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
