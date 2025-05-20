import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-content">
        <div className="map-container">
          <h2>Байршил</h2>
          <MapContainer center={[47.9006, 106.9173]} zoom={16} className="map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[47.9006, 106.9173]}>
              <Popup>CHIPMO Байршил - MN Tower</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="contact-info">
          <h2>Холбоо барих</h2>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <p>Хаяг: Улаанбаатар хот, Монгол улс</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <p>
              Утас: <a href="tel:88108766">88108766</a>,{" "}
              <a href="tel:99192846">99192846</a>
            </p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <p>
              Цахим шуудан: <a href="mailto:info@chipmo.mn">info@chipmo.mn</a>
            </p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🕐</span>
            <p>Ажлын цаг: 24/7</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <p>
              <a
                href="https://facebook.com/chipmo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook хуудас
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form-section">
        <h2>Бидэнтэй холбогдох</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Таны Нэр*" required />
            <input type="email" placeholder="Имэйл*" required />
            <input type="text" placeholder="Улс*" required />
            <input type="text" placeholder="Утас/Whatsapp*" />
          </div>
          <textarea placeholder="Мессеж*" rows="6" required></textarea>
          <button type="submit">Илгээх</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
