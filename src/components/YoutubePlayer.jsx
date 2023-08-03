import React from "react";
import styles from "./YoutubePlayer.module.css";

const OverLay = (props) => {
  const handleBackdropClick = (event) => {
    if (event.target.classList.contains(styles.backdrop)) {
      props.setShowYoutubePlayer(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={`ratio ratio-16x9 ${styles.videoContainer}`}>
          <iframe
            src={`https://www.youtube.com/embed/${props.videoId}?rel=0`}
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const YoutubePlayer = (props) => {
  return (
    <div>
      <OverLay
        setShowYoutubePlayer={props.setShowYoutubePlayer}
        videoId={props.videoId}
      ></OverLay>
    </div>
  );
};

export default YoutubePlayer;
