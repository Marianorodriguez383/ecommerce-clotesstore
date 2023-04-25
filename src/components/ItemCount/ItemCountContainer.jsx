import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = () => {
  return (
    <div>
      <ItemCount
        initial={1}
        stock={10}
        agregar={(cantidad) => console.log("cantidad agregada", cantidad)}
      />
    </div>
  );
};

export default ItemCountContainer;
