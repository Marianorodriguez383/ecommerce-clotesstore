import React, { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ initial, stock, agregar }) => {
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
        <button onClick={incrementar} className={styles.buttons}>
          +
        </button>
        <h3>{cantidad}</h3>
        <button onClick={decrementar} className={styles.buttons}>
          -
        </button>

        <div className={styles.agregarAlCarritoConteiner}>
          <button
            onClick={() => agregar(cantidad)}
            disabled={!stock}
            className={styles.agregarAlCarrito}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
