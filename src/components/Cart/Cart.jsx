import { Button } from "@mui/material";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div>
      <h1>Aca el carrito </h1>
      {cart.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <h4>{product.quantity}</h4>
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      <Button variant="contained" onClick={clearCart}>
        Limpiar Carrtito
      </Button>

      <h2>El total del pedido es:{total} </h2>
    </div>
  );
};

export default Cart;
