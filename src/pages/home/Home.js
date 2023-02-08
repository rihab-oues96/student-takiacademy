import React from "react";
import HomeWork from "../../components/homework/HomeWork";
import LearningProgress from "../../components/learningProgress/LearningProgress";
import OverView from "../../components/overView/OverView";
import VideoInfo from "../../components/videoInfo/VideoInfo";
import video from "../../assets/icons/video.png";
import youtube from "../../assets/icons/youtube.png";
import "./Home.scss";
import { free } from "../../data";
import { recorded } from "../../data";
import LiveSessionSmall from "../../components/liveSessionSmall/LiveSessionSmall";
import ForumCardInfo from "../../components/forumCardInfo/ForumCardInfo";

const Home = () => {
  return (
    <section className="home">
      <div className="left-side-home">
        <OverView />

        <div className="learning">
          <LearningProgress />
          <HomeWork />
        </div>

        <div className="videos-infos">
          <VideoInfo
            icon={video}
            title="Latest recorded lessons"
            data={recorded}
          />
          <VideoInfo icon={youtube} title="Free videos" data={free} />
        </div>
      </div>

      <div className="right-side-home">
        <LiveSessionSmall />
        <ForumCardInfo />
      </div>
    </section>
  );
};

export default Home;
