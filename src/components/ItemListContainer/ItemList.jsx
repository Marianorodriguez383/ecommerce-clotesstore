import React from "react";
import styles from "./ItemListContainer.module.css";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className={styles.divItem}>
      {items.map((elemento) => {
        return (
          <div key={elemento.id} className={styles.item}>
            <Box>
              <Grid container>
                <Grid item xs={4}>
                  <img src={elemento.img} alt="" style={{ width: "200px" }} />
                  <h3>{elemento.title}</h3>
                  <h4>{elemento.price}</h4>
                  <Link to={`/ItemDetail/${elemento.id}`}>
                    <button>Ver Detalle</button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
