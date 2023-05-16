import { TextField, Button } from "@mui/material";
import React from "react";
import styles from "./FormCheckout.module.css";

const FormCheckout = () => {
  return (
    <div className={styles.formContainer}>
      <div>
        <TextField
          className={styles.textInput}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className={styles.textInput}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className={styles.textInput}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" color="primary">
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default FormCheckout;
