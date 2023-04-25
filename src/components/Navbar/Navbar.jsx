import Cartwitget from "../CartWitget/CartWitget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://img.freepik.com/vector-premium/tienda-ropa-logo-icono-ilustracion_561505-44.jpg?"
            alt="Logo Empresa"
            className={styles.logo}
          />
        </Link>
        <ul style={{ display: "flex", gap: "30px" }}>
          <Link to="/category/Remeras">Remeras</Link>
          <Link to="/category/Buzos">Buzos</Link>
          <Link to="/category/Short">Shorts</Link>
          <Link to="/">Ver Todo</Link>
        </ul>
        <Cartwitget />
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
