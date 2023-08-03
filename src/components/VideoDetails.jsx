import React from "react";
import VideoCard from "./VideoCard";

// The video gird to hold all the Video card Child
const VideoDetails = (props) => {
  // Prop in the Youtube Data from Main Video Page
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
              ></VideoCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
