import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoCard from "./VideoCard";

const VideoDetails = (props) => {
  const mikaData = props.mikaData;

  return (
    <>
      <div class="container">
        <div class="row">
          {mikaData.map((item) => {
            return (
              <VideoCard
                key={item.id}
                publisedDate={item.snippet.publishedAt}
                title={item.snippet.title}
                thumbnail={item.snippet.thumbnails.maxres.url}
                videoId={item.snippet.resourceId.videoId}
                // showYoutubePlayer={props.showYoutubePlayer}
                // setShowYoutubePlayer={props.setShowYoutubePlayer}
              ></VideoCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
