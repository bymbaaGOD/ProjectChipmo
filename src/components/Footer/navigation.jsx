"use client";
import React from "react";
import styles from "./footer.css";

const Navigation = () => {
  return (
    <section className={styles.column2}>
      <div className={styles.div6}>
        <nav className={styles.div7}>
          <a href="#" className={styles.div8}>Холбооосууд</a>
          <a href="#" className={styles.div9}>Систем</a>
          <a href="#" className={styles.div10}>Үнийн санал</a>
          <a href="#" className={styles.div11}>Нэвтрэх</a>
          <button className={styles.mnen}>MN/EN</button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/573f5ecc94b9420d950045edc52efc1f/3f901d50ab37dcb744dee15ffd45ec873f4fcc19?placeholderIfAbsent=true"
            alt="QR code"
            className={styles.img2}
          />
        </nav>
        <nav className={styles.div12}>
          <a href="#" className={styles.div13}>Нүүр</a>
          <a href="#" className={styles.rfid}>RFID Тухай</a>
          <a href="#" className={styles.div14}>Систем</a>
          <a href="#" className={styles.div15}>Тооцоолуур</a>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
