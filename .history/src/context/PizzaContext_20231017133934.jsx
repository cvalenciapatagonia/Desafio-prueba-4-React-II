import React, { useState } from "react";
import { createContext } from "react";

export const PizzaContext = createContext();

export default function PizzaContext() {
const [pizzas, setPizzas] = useState(null)
const [cart, setCart] = useState(null)


return (
    <div>
        PizzaContext
    </div>
)

}