import React, { useEffect } from "react";
import "./ChapterContent.scss";

import dotsVertical from "../../../../assets/icons/dotsVertical.png";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { chapterContentLinks, chapterDetailsLinks } from "../../../../data";
import { useDispatch, useSelector } from "react-redux";
import { getchapterContent } from "../../../../features/chapters/chapterSlice";
import Apropos from "./components/apropos/Apropos";
import Comments from "./components/comments/Comments";
import Qa from "./components/q&a/Qa";
import Annonces from "./components/annonces/Annonces";
import { getSubjectContent } from "../../../../features/subjects/subjectContentSlice";

const ChapterContent = () => {
  const { loading } = useSelector((state) => state.chapterLessons);
  const { videoTitle } = useSelector((state) => state.lessonVideos);
  const { subjectContent } = useSelector((state) => state.subjectContent);

  const dispatch = useDispatch();

  const url = useLocation();
  const id = url.pathname.slice(35, 59);

  let { subjectId, lessonName, videoName } = useParams();
  const isExist = url.pathname;

  useEffect(() => {
    dispatch(getchapterContent(id));
    dispatch(getSubjectContent(subjectId));
  }, []);

  if (loading) {
    return (
      <section className="chapter-content">
        <p className="main-title">Loading ... </p>
      </section>
    );
  } else {
    return (
      <section className="chapter-content">
        <p className="main-title">Your Subjects</p>

        <div className="chapter-content-details">
          <div className="left-side">
            <div className="chapter-content-video">
              <div className="chapter-content-video-header">
                <p>
                  {videoTitle}
                  {videoTitle && <span> | </span>}
                  {subjectContent.name}
                </p>
                <img src={dotsVertical} alt="icon" />
              </div>
              <div className="chapter-content-video-conent">
                <div className="chapter-content-video-conent-play"></div>
              </div>
            </div>
            <div className="chapter-content-video-infos">
              <div className="chapter-content-video-infos-links">
                <ul>
                  {videoName
                    ? chapterDetailsLinks.map((link, index) => (
                        <NavLink
                          to={`${lessonName}/${videoName}/${link.link}`}
                          key={index}
                        >
                          <li>{link.name}</li>
                        </NavLink>
                      ))
                    : ""}
                </ul>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="chapter-content-pages">
              <div className="chapter-content-links-header">
                <ul>
                  {chapterContentLinks.map((link, index) => (
                    <NavLink to={link.link} key={index}>
                      <li>{link.name}</li>
                    </NavLink>
                  ))}
                </ul>
              </div>

              <div className="chapter-content-links-content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>

        <div className="chapter-lesson-infos">
          {isExist.includes("apropos") && <Apropos />}
          {isExist.includes("commentaires") && <Comments />}
          {isExist.includes("Qa") && <Qa />}
          {isExist.includes("annonces") && <Annonces />}
        </div>
      </section>
    );
  }
};

export default ChapterContent;
