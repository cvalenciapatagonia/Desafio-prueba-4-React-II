import { createContext, useState, useEffect } from "react";

// Creación del context
const AppContext = createContext();

// Provider con la fuente de datos para proveer
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  // Obtener las pizzas
  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };
  //Cargar lista
  useEffect(() => {
    getPizzas();
  }, []);

  // Funciones para el carro
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = cart.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    // Si hay respuesta findIndex retorna 0, si no hay nada retorna -1
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
