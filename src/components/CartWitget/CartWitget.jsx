import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./CartWitget.module.css";

const Cartwitget = () => {
  return (
    <div>
      <ShoppingCartIcon className={styles.cart} />0
    </div>
  );
};

export default Cartwitget;
