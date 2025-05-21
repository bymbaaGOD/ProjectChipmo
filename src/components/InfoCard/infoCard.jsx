import React from "react";
import PropTypes from "prop-types";
import "./infoCard.css";

export default function InfoCard({ image, title, description }) {
  return (
    <div className="info-card">
      <img
        src={image}
        alt={title}
        className="info-card-image"
        draggable={false}
      />

      <div className="info-card-content">
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-description">{description}</p>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export function InfoCard2({ image, title, description }) {
  return (
    <div className="info-card2">
      <div className="info-card-content">
        <h3 className="info-card-title2">{title}</h3>
        <p className="info-card-description">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="info-card-image2"
        draggable={false}
      />
    </div>
  );
}

InfoCard2.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};