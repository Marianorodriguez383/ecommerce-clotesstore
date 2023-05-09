import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartWitget.module.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cartwitget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/Cart">
      <div>
        <ShoppingCartIcon className={styles.cart} />
        <span>{total}</span>
      </div>
    </Link>
  );
};

export default Cartwitget;
