import React from "react";
import "./Error.scss";
import error from "../../assets/images/notFound.png";

const Error = () => {
  return (
    <section className="error ">
      <div className="error-content">
        <p>Page Not Found</p>
        <img src={error} alt="error-img" />
      </div>
    </section>
  );
};

export default Error;
