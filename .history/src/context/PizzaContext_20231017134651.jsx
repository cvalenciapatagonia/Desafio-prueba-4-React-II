import React, { Children, useState } from "react";
import { createContext } from "react";

export const PizzaContext = createContext();

export default function PizzaContext() {
const [pizzas, setPizzas] = useState(null)
// const [cart, setCart] = useState(null)

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
    <PizzaContext.Provider value={{pizzas, setPizzas}}>
        {children}
    </PizzaContext.Provider>

)

}