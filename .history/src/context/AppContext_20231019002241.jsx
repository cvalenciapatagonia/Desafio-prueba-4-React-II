import { createContext, useState, useEffect } from "react";

// Context 
const AppContext = createContext();

// Base de datos de provider
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  // Obtener las pizzas
  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };
  //Renderizar lista
  useEffect(() => {
    getPizzas();
  }, []);

  // Codigo de carro de compras
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = cart.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    // Logica respecto a producto solicitado 
    if (productoEcontradoIndex >= 0) {
      cart[productoEcontradoIndex].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, producto]);
    }
  };

  const incrementar = (i) => {
    cart[i].count++;
    setCart([...cart]);
  };

  const decrementar = (i) => {
    const { count } = cart[i];
    if (count === 1) {
      cart.splice(i, 1);
    } else {
      cart[i].count--;
    }
    setCart([...cart]);
  };


  

  console.log(cart);
  return (
    <AppContext.Provider
      value={{ pizzas, cart, setCart, addToCart, incrementar, decrementar }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Export del provider
export { PizzasProvider };

// Export del context
export default AppContext;
