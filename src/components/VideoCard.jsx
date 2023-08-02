import React from "react";

const VideoCard = () => {
  return (
    <>
      <div class="col-md-3 mt-3 mb-3">
        <div class="card">
          <img
            src="https://i.ytimg.com/vi/as6DU3h9bzM/maxresdefault.jpg"
            class="card-img-top"
            alt="Thumbnail"
          ></img>
          <div class="card-body">
            <p class="card-title">Video Title</p>
            <p class="card-data">Published Date</p>
            <a href="#" class="btn btn-primary">
              Play Video
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
