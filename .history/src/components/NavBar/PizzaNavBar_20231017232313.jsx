import { Link } from "react-router-dom";
import { PriceFormat } from "../../PriceFormat";
import AppContext from "../../context/AppContext";
import React, { useContext } from "react";
import '/navStyles.css'


export default function Navbar() {
  const { carrito } = useContext(AppContext);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );

  return (
    <div className="navbar">
      <div className="link">
        <Link to="/" className="logo">
          <h4 className="nombre-logo">
            <span className="logo-pizza">🍕</span>Pizzería Mamma Mia!
          </h4>
        </Link>

        <Link to="/carrito" className="link-carrito">
          <h4 className="total">
            <span className="logo-carrito">🛒</span>Total: $
            {PriceFormat(total)}
          </h4>
        </Link>
      </div>
    </div>
  );
}
