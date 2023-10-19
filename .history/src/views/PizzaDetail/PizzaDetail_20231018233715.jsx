import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
//import { formatNumber } from "../formatNumber";
import PizzaNavbar from '../../components/NavBar/PizzaNavBar';
import AppContext from "../../context/AppContext";




export default function Detalle() {
  const [pizzaDetalle, setPizzaDetalle] = useState({});
  const { pizzas, addToCart } = useContext(AppContext);
  const { id } = useParams();

  const getDatos = () =>{
    const datosPizza = pizzas.find((pizza) => pizza.id === id);
    setPizzaDetalle(datosPizza);
  };

  useEffect(() =>{
    getDatos();
  },[pizzas]);

  //render del detalle de cada pizza en "Ver Mas"

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
            <h2 className="card-price">
              $ {pizzaDetalle.price}  
            </h2>
            <div className="buttons">
              <button
                className="btn-añadir"
                onClick={() => addToCart(pizzaDetalle)}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
