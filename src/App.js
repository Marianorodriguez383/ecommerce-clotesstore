import "./App.css";
import MaterialGrid from "./components/MaterialGrid/MaterialGrid";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  let saludo = "Hola";

  return (
    <div className="App">
      <Navbar saludo={saludo} />
      <ItemListContainer greeting={"Welcome to Clotes Store"} />
      <MaterialGrid />
    </div>
  );
}

export default App;
