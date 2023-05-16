import Cartwitget from "../CartWitget/CartWitget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { database } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(database, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://img.freepik.com/vector-premium/tienda-ropa-logo-icono-ilustracion_561505-44.jpg?"
            alt="Logo Empresa"
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navigation}>
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </ul>
        <Cartwitget />
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
