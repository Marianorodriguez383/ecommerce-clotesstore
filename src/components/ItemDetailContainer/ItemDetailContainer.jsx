import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { agregarAlCarrito } = useContext(CartContext);
  // let id = 1;

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    let encontrado = productos.find((prod) => prod.id === +id);
    setTimeout(() => {
      setItem(encontrado);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...item,
      quantity: cantidad,
    };

    agregarAlCarrito(data);

    // console.log(`se agregaron ${cantidad} del producto ${item.title}`);
  };

  return (
    <div>
      <ItemDetail product={item} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
