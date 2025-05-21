import React from "react";
import "./footer.css";
import logo from "../../assets/logos/chipmo_logo.webp"

function Footer() {
  return (
    <footer>
       <section className="content">
            <div className="contact">
              <img src={logo} alt="chipmo_logo" className="footer-logo" />
              <a>info@chipmo.mn</a>
              <a>+97688108766</a>
              <a>+97699192846</a>
              <button>Бидэнтэй холбогдох</button>
            </div>
            <div className="links">
              <div className="title">Холбооосууд</div>
              <a>Нүүр</a>
              <a>RFID Тухай</a>
              <a>Систем</a>
              <a>Тооцоолуур</a>
            </div>
            <div>
              <div className="title">СОШИАЛ СУВГУУД</div>
            </div>
       </section>
    </footer>
  );
}

export default Footer;