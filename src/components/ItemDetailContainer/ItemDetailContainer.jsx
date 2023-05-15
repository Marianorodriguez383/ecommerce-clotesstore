import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

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
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Se agrego ${item.title} correctamente`,
      showConfirmButton: true,
      timer: 1500,
    });
  };

  let cantidadEnTotalidad = getQuantityById(item.id);
  console.log(cantidadEnTotalidad);

  return (
    <div>
      <ItemDetail
        product={item}
        onAdd={onAdd}
        cantidadEnTotalidad={cantidadEnTotalidad}
      />
    </div>
  );
};

export default ItemDetailContainer;
