import React from "react";
import { Link } from "react-router-dom"; 
import "../NotFound/NotFound.css";

export default function NotFound() {
  return (
    <div className="error-container"> 
      <div>
        {/* Ruta local original comentada para reemplazarla por la utilizacion de ruta raw 👇*/}
        {/* <img className="error-img" src="src/assets/img/Error404.png" alt="." /> */ } 
        <img className="error-img" src="https://raw.githubusercontent.com/cvalenciapatagonia/Desafio-prueba-4-React-II/ff9d6e9736a55eea251a1d83cac2a42148046cb4/src/assets/img/Error404.png" alt="." /> {/*Ruta Raw compatible con gh-pages*/}

      </div>
      <div>
        <Link to="/Desafio-prueba-4-React-II/">
          <button type="button" className="btn btn-dark btn-error btn-lg">
            Volver a la pagina principal
          </button>
        </Link>
      </div>
    </div>
  );
}
