import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { database } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(database, "productos");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setItem({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
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
