import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../src/views/Cart/Cart";
import Detalle from "./Views/Detalle";
import NotFound from "./Views/NotFound";
import Home from "./Views/Home";
import { PizzasProvider } from "./Context/PizzaProvider";

function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  );
}

export default App;
