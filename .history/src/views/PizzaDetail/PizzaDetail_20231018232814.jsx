import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PizzaNavbar from '../../components/NavBar/PizzaNavBar';
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom"; // Importa Link

export default function Detalle() {
  const [pizzaDetalle, setPizzaDetalle] = useState({});
  const { pizzas, addToCart } = useContext(AppContext);
  const { id } = useParams();

  const getDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);
    setPizzaDetalle(datosPizza);
  };

  useEffect(() => {
    getDatos();
  }, [pizzas]);

  return (
    <>
      <PizzaNavbar />
      <div className="card-container">
        <div className="cards">
          <div className="card">
            <img
              className="card-img-top"
              src={pizzaDetalle.img}
              alt={pizzaDetalle.name}
            />
            <div className="card-body">
              <h4 className="card-tittle">Pizza {pizzaDetalle.name}</h4>
              <p>{pizzaDetalle.desc}</p>
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>
              <ul style={{ listStyle: "none" }}>
                {pizzaDetalle.ingredients?.map((ingredient, i) => (
                  <li key={i}> {ingredient}</li>
                ))}
              </ul>
            </div>
            <h2 className="card-precio">
              Precio: $ {pizzaDetalle.price}  
            </h2>
            <div className="buttons">
              <button
                className="btn-añadir"
                onClick={() => addToCart(pizzaDetalle)}
              >
                Añadir
              </button>
              <Link to="/"> {/* Enlace a la página de inicio */}
                <button className="btn-volver">Volver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
