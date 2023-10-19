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
            {/* ... (contenido actual) ... */}
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
