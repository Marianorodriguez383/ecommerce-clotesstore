import React, { useEffect, useState } from "react";
import styles from "./ItemListContainer.module.css";
import ItemList from "./ItemList";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const itemsFiltrados = productos.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? itemsFiltrados : productos);
      }, 2000);
    });

    tarea.then((res) => setItems(res));
  }, [categoryName]);

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
