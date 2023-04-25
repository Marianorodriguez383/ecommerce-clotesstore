import "./App.css";
// import MaterialGrid from "./components/MaterialGrid/MaterialGrid";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCountContainer from "./components/ItemCount/ItemCountContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let saludo = "Hola";

  return (
    <BrowserRouter>
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
          <Route path="*" element={<h2>Ruta No Existe</h2>} />
        </Route>
      </Routes>
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
