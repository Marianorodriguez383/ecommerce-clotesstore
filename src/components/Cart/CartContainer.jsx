import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  const navigate = useNavigate();

  return (
    <div>
      <Cart
        total={total}
        cart={cart}
        clearCart={clearCart}
        deleteProductById={deleteProductById}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
