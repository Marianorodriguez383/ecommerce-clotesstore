import React, { useContext } from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Aca el carrito </h1>
      {cart.map((e) => (
        <h2>{e?.title}</h2>
      ))}
    </div>
  );
};

export default Cart;
