import React from "react";
import styles from "./ItemListContainer.module.css";
import {
  // Box,
  // Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className={styles.divItem}>
      {items.map((elemento) => {
        return (
          <div key={elemento.id} className={`${styles.item} item`}>
            <Card>
              <CardMedia component="img" image={elemento.img} alt="" />
              <CardContent>
                <Typography variant="h5" component="h3">
                  {elemento.title}
                </Typography>
                <Typography>{elemento.description}</Typography>
                <Typography variant="h6" component="h4">
                  ${elemento.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/ItemDetail/${elemento.id}`}
                >
                  Ver Detalle
                </Button>
              </CardContent>
            </Card>
          </div>

          // <div key={elemento.id} className={`${styles.item} item`}>
          //   <Box>
          //     <Grid container>
          //       <Grid item xs={4}>
          //         <img src={elemento.img} alt="" />
          //         <h3>{elemento.title}</h3>
          //         <h4>${elemento.price}</h4>
          //         <Link to={`/ItemDetail/${elemento.id}`}>
          //           <button>Ver Detalle</button>
          //         </Link>
          //       </Grid>
          //     </Grid>
          //   </Box>
          // </div>
        );
      })}
    </div>
  );
};

export default ItemList;
