import Cartwitget from "../CartWitget/CartWitget";
import styles from "./Navbar.module.css";

import React from "react";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://img.freepik.com/vector-premium/tienda-ropa-logo-icono-ilustracion_561505-44.jpg?"
        alt=""
        className={styles.logo}
      />
      <ul style={{ display: "flex", gap: "60px" }}>
        <li>Remeras</li>
        <li>Buzos</li>
        <li>Shorts</li>
      </ul>
      <Cartwitget />
    </div>
  );
};

export default Navbar;
