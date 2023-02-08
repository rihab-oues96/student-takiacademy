import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../features/modal/ModalSlice";
import "./BlueButton.scss";

const BlueButton = ({ content, style }) => {
  const dispatch = useDispatch();

  if (content === "Upgrade") {
    return (
      <Link to="/offres">
        <div className={`blue-btn ${style}`}>
          <p className="btn-content">{content}</p>
        </div>
      </Link>
    );
  }

  return (
    <div className={`blue-btn ${style}`} onClick={() => dispatch(openModal())}>
      <p className="btn-content">{content}</p>
    </div>
  );
};

export default BlueButton;
