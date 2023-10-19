import { useEffect, useState } from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import PizzaDetail from "./views/PizzaDetail";
import Cart from "./views/Cart";
import Error404 from "./views/Error404";

function App() {
  const [pizzas, setPizzas] = useState([]);


  // El archivo pizzas.json se encuentra en la carpeta public
  const getPizzas = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
<>
    {pizzas ? "Hay NavBar" : false}
    <Routes>
      <Route index path="/home" element={<Home/>}/>
      <Route path="/pizzas/:id" element={<PizzaDetail/>}/>
      <Route path="/carrito" element={<Cart/>}/>
      <Route path="*" element={<Error404/>}/>

    </Routes>

</>


  );
};
export default App;
