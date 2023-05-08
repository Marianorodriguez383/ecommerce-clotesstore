import React, { useState } from "react";
import styles from "./ItemCount.module.css";
import { Button } from "@mui/material";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div className={styles.counter}>
        <Button onClick={incrementar} className={styles.buttons}>
          +
        </Button>
        <h3>{cantidad}</h3>
        <Button onClick={decrementar} className={styles.buttons}>
          -
        </Button>

        <div className={styles.agregarAlCarritoConteiner}>
          <Button
            onClick={() => onAdd(cantidad)}
            disabled={!stock}
            className={styles.agregarAlCarrito}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
