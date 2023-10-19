import { Link } from "react-router-dom";
import PriceFormat from "../../PriceFormat";
import AppContext from "../../context/AppContext";
import React, { useContext } from "react";
import './navStyles.css'


export default function Navbar() {
  const { cart } = useContext(AppContext);
  const total = cart.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );

  return (
    <div className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
      <div className="link">
        <Link to="/" className="logo">
          <h4 className="brand-logo">
            <span className="logo-pizza">🍕</span>Pizzería Mamma Mia!
          </h4>
        </Link>

        <Link to="/cart" className="link-cart">
          <h4 className="total-amount">
            <span className="logo-cart">🛒</span>Total: $
            {PriceFormat(total)}
          </h4>
        </Link>
      </div>
    </div>
  );
}
