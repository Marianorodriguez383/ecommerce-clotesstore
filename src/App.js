import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/Cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a Clotes Store"} />
              }
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<CartContainer />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
            <Route path="*" element={<h2>Ruta No Existe</h2>} />
          </Route>
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
