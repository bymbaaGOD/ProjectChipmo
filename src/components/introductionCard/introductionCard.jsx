import React from "react";
import PropTypes from "prop-types";
import "./introductionCard.css";
import { icon } from "leaflet";

export default function IntroductionCard({icon, width, title, description }) {
  return (
    <div className="custom-card" style={{ width }}>
      <div className="icon-title">
        <h2 className="card-title">{title}</h2>
        <img src={icon} alt={title} className="icon"/>
      </div>
      <p className="card-content">{description}</p>
    </div>
  );
}

IntroductionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};