import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  // let id = 1;

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    let encontrado = productos.find((prod) => prod.id === +id);
    setTimeout(() => {
      setItem(encontrado);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail product={item} />
    </div>
  );
};

export default ItemDetailContainer;
