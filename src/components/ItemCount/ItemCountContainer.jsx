import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock }) => {
  return (
    <div>
      <ItemCount
        initial={1}
        stock={stock}
        agregar={(cantidad) => console.log("cantidad agregada", cantidad)}
      />
    </div>
  );
};

export default ItemCountContainer;
