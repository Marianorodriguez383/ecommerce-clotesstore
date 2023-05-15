import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div className={styles.container}>
      {cart.map((product) => {
        return (
          <Card key={product.id} className={styles.card}>
            <CardMedia
              component="img"
              className={styles.card__image}
              image={product.img}
              alt={product.title}
            />
            <CardContent className={styles.card__content}>
              <div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.card__title}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={styles.card__description}
                >
                  {product.description}
                </Typography>
                <Typography>{product.quantity} U.</Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  className={styles.card__price}
                >
                  ${product.price}
                </Typography>
              </div>
              <Button
                variant="contained"
                onClick={() => deleteProductById(product.id)}
                className={styles.card__button}
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        );
      })}

      <h2>El total del pedido es: $ {total} </h2>

      {cart.length > 0 ? (
        <div className={styles.cartClearButtonContainer}>
          <Button
            variant="contained"
            onClick={clearCart}
            className={styles.cartClearButton}
          >
            Limpiar Carrito
          </Button>
          <Button variant="contained" className={styles.cartClearButton}>
            Terminar Compra
          </Button>
        </div>
      ) : (
        <Link to="/" className={styles.addButtonLink}>
          <Button variant="contained" className={styles.addButton}>
            Agregar Productos
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
