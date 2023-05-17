import React from "react";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import styles from "./ItemDetailContainer.module.css";

export const ItemDetail = ({ product, onAdd, cantidadEnTotalidad }) => {
  return (
    <div className={styles.container}>
      <img src={product.img} alt="" />
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
      <h2>${product.price}</h2>
      {product.stock > 0 && (
        <ItemCountContainer
          stock={product.stock}
          onAdd={onAdd}
          inicial={cantidadEnTotalidad}
        />
      )}
    </div>
  );
};
