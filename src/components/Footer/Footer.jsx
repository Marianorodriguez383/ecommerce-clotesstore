import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © 2023 Clotes Store. Derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
