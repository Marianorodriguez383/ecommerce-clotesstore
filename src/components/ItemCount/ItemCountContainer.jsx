import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd, inicial = 1 }) => {
  return (
    <div>
      <ItemCount inicial={inicial} stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemCountContainer;
