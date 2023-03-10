import React, { useEffect, useState } from "react";
import "./LiveSession.scss";
import right from "../../assets/icons/right.png";
import left from "../../assets/icons/left.png";
import LiveCard from "./liveCard/LiveCard";
import { days, hours } from "../../data";

import {
  now,
  currentYear,
  firstDayOfWeek,
  lastDayOfWeek,
  DaysOfWeek,
  formattedDate,
} from "../../utils";

const LiveSession = () => {
  const [firstday, setFirstdayy] = useState(firstDayOfWeek(new Date()));
  const [lastday, setLastdayy] = useState(lastDayOfWeek(new Date()));

  const [daysOfWeek, setDaysOfWeek] = useState(DaysOfWeek(new Date(firstday)));

  const nextWeek = (firstday, lastday) => {
    const newFirstDay = new Date(
      firstday.getTime() + 7 * 24 * 60 * 60 * 1000
    ).toUTCString();

    setFirstdayy(newFirstDay);

    const newLastDay = new Date(
      lastday.getTime() + 7 * 24 * 60 * 60 * 1000
    ).toUTCString();

    setLastdayy(newLastDay);
  };

  const prevWeek = (firstday, lastday) => {
    const newFirstDay = new Date(
      firstday.getTime() - 7 * 24 * 60 * 60 * 1000
    ).toUTCString();

    setFirstdayy(newFirstDay);
    const newLastDay = new Date(
      lastday.getTime() - 7 * 24 * 60 * 60 * 1000
    ).toUTCString();

    setLastdayy(newLastDay);
  };

  useEffect(() => {
    setDaysOfWeek(DaysOfWeek(new Date(firstday)));
  }, [firstday, lastday]);

  return (
    <section className="session-live">
      <p className="live-session-heading">LiveSession</p>

      <div className="cal">
        <div className="calendar">
          <div className="canlendar-heading">
            <div className="icon ">
              <img
                src={left}
                alt="icon-left"
                onClick={() => {
                  prevWeek(new Date(firstday), new Date(lastday));
                }}
              />
            </div>

            <p>
              {formattedDate(firstday)} - {formattedDate(lastday)} {currentYear}
            </p>

            <div className="icon ">
              <img
                src={right}
                alt="icon-right"
                onClick={() => {
                  nextWeek(new Date(firstday), new Date(lastday));
                }}
              />
            </div>
          </div>

          <div className="calendar-content">
            <div className="first-line">
              <div className="date-time-info">
                <p className="d">Date</p>
                <div className="line"></div>
                <p className="t">Time</p>
              </div>

              <LiveCard />

              {days.map((d, index) => (
                <div className={`day-info day-info-${index}`} key={index}>
                  <p className="day">{d.day}</p>
                  <p className="date">{formattedDate(daysOfWeek[index])}</p>
                </div>
              ))}
            </div>

            {hours.map((h, index) => (
              <div className={`line line-${index}`} key={index}>
                <div className="hour">
                  <p>{h.hour}</p>
                </div>

                {days.map((d, index) => (
                  <div className={`division division-${index}`} key={index}>
                    <div className="h-line"></div>
                  </div>
                ))}
              </div>
            ))}

            <div className="current-time">
              <div className="time">{now}</div>
              <div className="line-red">
                <div className="circle-small"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSession;
