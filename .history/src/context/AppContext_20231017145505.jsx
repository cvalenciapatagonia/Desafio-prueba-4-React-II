import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function PizzaContext({children}) {
const [pizzas, setPizzas] = useState(null)
const [cart, setCart] = useState(null)

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
    <AppContext.Provider value={{pizzas, cart}}>
        {children}
    </AppContext.Provider>

)

}