import React from "react";
import PropTypes from "prop-types";
import "./profileCard.css";

export default function ProfileCard({ image, title, description }) {
  return (
    <div className="profile-card">
      <img
        src={image}
        alt={title}
        className="profile-card-image"
        draggable={false}
      />

      <div className="profile-card-content">
        <h3 className="profile-card-title">{title}</h3>
        <p className="profile-card-description">{description}</p>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};