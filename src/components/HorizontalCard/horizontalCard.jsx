import React from "react";
import PropTypes from "prop-types";
import "./horizontalCard.css";

export default function HorizontalCard({ image, title, description }) {
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-content">
        <h3 className="horizontal-card-title">{title}</h3>
        <p className="horizontal-card-description">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="horizontal-card-image"
        draggable={false}
      />
    </div>
  );
}

HorizontalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export function HorizontalCard2({image, title,subTitle, description1, description2, description3, description4, description5}) {
   return (
    <div className="horizontal-card">
      <div className="horizontal-card-content">
        <h3 className="horizontal-card-title">{title}</h3>
        <h4 className="horizontal-card-Subtitle">{subTitle}</h4>
        <p className="horizontal-card-description">{description1}</p>
        <p className="horizontal-card-description">{description2}</p>
        <p className="horizontal-card-description">{description3}</p>
        <p className="horizontal-card-description">{description4}</p>
        <p className="horizontal-card-description">{description5}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="horizontal-card-image"
        draggable={false}
      />
    </div>
  );
}

HorizontalCard2.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  description3: PropTypes.string.isRequired,
  description4: PropTypes.string.isRequired,
  description5: PropTypes.string.isRequired,
};