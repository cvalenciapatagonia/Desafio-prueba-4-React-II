import React, { useContext } from "react";
import PizzaNavbar from "../../components/NavBar/PizzaNavBar";
import AppContext from "../../context/AppContext";
import { PriceFormat } from "../../PriceFormat";
import "../Cart/cart.css";

export default function Cart() {
  const { cart, incrementar, decrementar } = useContext(AppContext);
  const total = cart.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <>
      <PizzaNavbar />
      <div className="cart-container">
      <div className="cart">
        <h4>Detalles del pedido:</h4>
          <div className="cart-list">
            {car.map((item, i) => (
              <div key={i} className="detalles">
                <div className="producto">
                  <img src={item.img} className="cart-img" alt={item.name} />
                  <h6>{item.name}</h6>
                </div>
                <div className="contadores">
                  <h6>$ {PriceFormat(item.price * item.count)}</h6>
                  <button
                    className="decrementar"
                    onClick={() => decrementar(i)}
                  >
                    -
                  </button>
                  <b>{item.count}</b>
                  <button
                    className="incrementar"
                    onClick={() => incrementar(i)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <hr className="line" />
        <div className="totales">
          <h2>Total: ${PriceFormat(total)}</h2>
          <button className="btn-verMas">Ir a Pagar</button>
        </div>
      </div>
      </div>
    </>
  );
}
