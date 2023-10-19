import { useEffect, useState } from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import PizzaDetail from "./views/PizzaDetail";
import Cart from "./views/Cart";
import Error404 from "./views/Error404";
import AppContext from "./context/AppContext";
import PizzaNavBar from "./components/NavBar/PizzaNavBar";

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
<AppContext>
  <PizzaNavBar />
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/pizzas/:id" element={<PizzaDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
</AppContext>
</>


  );
};
export default App;
