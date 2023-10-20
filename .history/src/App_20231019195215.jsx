import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { PizzasProvider }  from "./context/AppContext";
import Cart from "../src/views/Cart/Cart";
import PizzaDetail from "../src/views/PizzaDetail/PizzaDetail";
import NotFound from "./views/NotFound/NotFound";
import Home from "./views/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Routes>
          <Route index path="/Desafio-prueba-4-React-II/" element={<Home />} />
          <Route index path="/Desafio-prueba-4-React-II/home" element={<Home />} />
          <Route path="/Desafio-prueba-4-React-II/home/pizza/:id" element={<PizzaDetail />} />
          <Route path="/Desafio-prueba-4-React-II/home/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  );
}

export default App;
