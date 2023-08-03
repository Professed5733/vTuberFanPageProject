import React, { useState } from "react";
import YoutubePlayer from "./YoutubePlayer";

// Card to render the individual videos
const VideoCard = (props) => {
  // Define the use state for Youtube Player Overlay child later on
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);

  return (
    <>
      <div class="col-md-3 mt-3 mb-3">
        <div class="card">
          <img src={props.thumbnail} class="card-img-top" alt="Thumbnail"></img>
          <div class="card-body">
            <p class="card-title">{props.title}</p>
            <p class="card-data">{props.publisedDate}</p>
            <a
              class="btn btn-primary"
              onClick={() => setShowYoutubePlayer(true)}
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
      {showYoutubePlayer && (
        <YoutubePlayer
          showYoutubePlayer={showYoutubePlayer}
          setShowYoutubePlayer={setShowYoutubePlayer}
          videoId={props.videoId}
        ></YoutubePlayer>
      )}
    </>
  );
};

export default VideoCard;
