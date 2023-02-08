import React from "react";
import SeeMore from "../buttons/seeMore/SeeMore";
import "./VideoInfo.scss";

import VideoItem from "../video-item/VideoInfoItem";

const VideoInfo = ({ icon, title, data }) => {
  return (
    <div className="video-info">
      <div className="heading">
        <div className="title">
          <img src={icon} alt="icon" />
          <p>{title}</p>
        </div>
        <SeeMore />
      </div>

      <div className="content">
        {data.map((video, index) => {
          return <VideoItem video={video} key={index} />;
        })}
      </div>
    </div>
  );
};

export default VideoInfo;
