import React from "react";

const VideoCard = (props) => {
  return (
    <>
      <div class="col-md-3 mt-3 mb-3">
        <div class="card">
          <img src={props.thumbnail} class="card-img-top" alt="Thumbnail"></img>
          <div class="card-body">
            <p class="card-title">{props.title}</p>
            <p class="card-data">{props.publisedDate}</p>
            <a
              href={`https://www.youtube.com/watch?v=${props.videoId}`}
              class="btn btn-primary"
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
