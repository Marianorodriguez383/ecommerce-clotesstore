import React, { useEffect, useState } from "react";
import styles from "./ItemListContainer.module.css";
import ItemList from "./ItemList";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const itemsFiltrados = productos.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? itemsFiltrados : productos);
      }, 1000);
    });

    tarea.then((res) => setItems(res));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div className={styles.loader}>
        <BeatLoader color="#36d7b7" size={40} />
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.titulo}>{greeting}</h1>
      <div>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
