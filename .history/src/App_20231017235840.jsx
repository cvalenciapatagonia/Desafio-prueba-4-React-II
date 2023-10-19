import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../src/views/Cart/Cart";
import PizzaDetail from "../src/views/PizzaDetail/PizzaDetail";
import NotFound from "./views/NotFound/NotFound";
import Home from "./views/Home/Home";
import  AppContext  from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContext.Pizzasprovider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Pizzasprovider>
    </BrowserRouter>
  );
}

export default App;
