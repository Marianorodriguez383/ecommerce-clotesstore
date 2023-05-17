import { TextField, Button } from "@mui/material";
import React from "react";
import styles from "./FormCheckout.module.css";

const FormCheckout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div className={styles.formContainer}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <TextField
            className={styles.textInput}
            id="outlined-basic"
            label="Nombre"
            name="nombre"
            variant="outlined"
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            className={styles.textInput}
            id="outlined-basic"
            label="E-mail"
            name="email"
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            className={styles.textInput}
            id="outlined-basic"
            label="Telefono"
            name="telefono"
            variant="outlined"
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary" type="">
            Comprar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
