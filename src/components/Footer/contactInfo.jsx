"use client";
import React from "react";
import styles from "./footer.css";

const ContactInfo = () => {
  return (
    <section className={styles.column}>
      <div className={styles.div2}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/573f5ecc94b9420d950045edc52efc1f/52d65ed31872465e53c3dd1f20476a43e4792d6e?placeholderIfAbsent=true"
          alt="Company logo"
          className={styles.img}
        />
        <div className={styles.div3}>
          <h3 className={styles.div4}>Холбогдох</h3>
          <address className={styles.infochipmomn}>info@chipmo.mn</address>
          <p className={styles.css97688108766}>+97688108766</p>
          <p className={styles.css97699192846}>+97699192846</p>
          <button className={styles.div5}>Бидэнтэй холбогдох</button>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
