import React from "react";
import styles from "./footer.css";
import ContactInfo from "./contactInfo";
import Navigation from "./navigation";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <ContactInfo />
        <Navigation />
      </div>
    </footer>
  );
}

export default Footer;