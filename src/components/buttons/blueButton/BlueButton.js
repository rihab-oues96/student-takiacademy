import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../features/modal/ModalSlice";
import "./BlueButton.scss";

const BlueButton = ({ content, style, modalContent }) => {
  const dispatch = useDispatch();

  if (content === "Upgrade") {
    return (
      <Link to="/offres">
        <div className={`blue-btn ${style}`}>
          <p className="btn-content">{content}</p>
        </div>
      </Link>
    );
  } else if (content === "Login") {
    return (
      <Link to="/">
        <div className={`blue-btn ${style}`}>
          <p className="btn-content">{content}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={`blue-btn ${style}`}
        onClick={() => dispatch(openModal(modalContent))}
      >
        <p className="btn-content">{content}</p>
      </div>
    );
  }
};

export default BlueButton;
