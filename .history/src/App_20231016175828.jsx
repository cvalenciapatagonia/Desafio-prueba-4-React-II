import { useEffect, useState } from "react";

import './App.css'
import { Route, Routes } from "react-router-dom";

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
      <Route path="/home" element={}/>
      <Route path="/home" element={}/>
      <Route path="/home" element={}/>
    </Routes>

</>


  );
};
export default App;
