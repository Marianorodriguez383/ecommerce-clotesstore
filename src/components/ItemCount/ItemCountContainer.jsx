import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd, inicial = 1 }) => {
  return (
    <div>
      <ItemCount
        inicial={inicial}
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
