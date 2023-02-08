import React from "react";
import "./VideoInfoItem.scss";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <div className="info">
        <img src={video.image} alt="image" />
        <div className="description">
          <p>{video.title}</p>
          <span>{video.professor}</span>
        </div>
      </div>

      <div className="date-info">
        <p>{video.date}</p>
        <span>{video.time}</span>
      </div>
    </div>
  );
};

export default VideoItem;
