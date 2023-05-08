import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd }) => {
  return (
    <div>
      <ItemCount
        initial={1}
        stock={stock}
        // agregar={(cantidad) =>
        //   console.log("cantidad agregada al carrito", cantidad)
        // }
        onAdd={onAdd}
      />
    </div>
  );
};

export default ItemCountContainer;
