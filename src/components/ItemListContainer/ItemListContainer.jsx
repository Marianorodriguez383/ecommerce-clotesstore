import React from "react";
import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className={styles.titulo}>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
