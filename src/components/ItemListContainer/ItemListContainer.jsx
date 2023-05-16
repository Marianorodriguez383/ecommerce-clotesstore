import React, { useEffect, useState } from "react";
import styles from "./ItemListContainer.module.css";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { database } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(database, "productos");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((productos) => {
          return {
            ...productos.data(),
            id: productos.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
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
