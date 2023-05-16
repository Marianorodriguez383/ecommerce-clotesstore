import "./App.css";
// import MaterialGrid from "./components/MaterialGrid/MaterialGrid";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCountContainer from "./components/ItemCount/ItemCountContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Cart from "./components/Cart/Cart";
import CartContainer from "./components/Cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";

function App() {
  let saludo = "Hola";

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar saludo={saludo} />}>
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
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
// <Navbar saludo={saludo} />
// <ItemListContainer greeting={"Bienvenidos a Clotes Store"} />
// {/* <MaterialGrid /> */}
// <ItemCountContainer />
// <ItemDetailContainer />
// </div>
