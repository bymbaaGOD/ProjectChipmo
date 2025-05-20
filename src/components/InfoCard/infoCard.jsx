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