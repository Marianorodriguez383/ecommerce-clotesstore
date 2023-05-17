import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (info) => {
    let total = getTotalPrice();

    let infoOrder = {
      buyer: info,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(database, "orders");
    addDoc(ordersCollection, infoOrder).then((res) => setOrderId(res.id));

    cart.map((productos) =>
      updateDoc(doc(database, "productos", productos.id), {
        stock: productos.stock - productos.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(3, "El nombre debe tener como mínimo 3 caracteres"),
      email: Yup.string()
        .email("Debe ser un e-mail valido")
        .required("Campo obligatorio"),
      telefono: Yup.number().required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1>
          Gracias por su compra ! El número de orden de compra es: {orderId}
        </h1>
      ) : (
        <FormCheckout
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
