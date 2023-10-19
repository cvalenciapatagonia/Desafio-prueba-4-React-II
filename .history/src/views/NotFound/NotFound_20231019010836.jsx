import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import "../NotFound/NotFound.css";

export default function NotFound() {
  return (
    <div className="error-container"> {/* Corrige el atributo className */}
      <div>
        <img className="error-img" src="src/assets/img/Error404.png" alt="." />
      </div>
      <div>
        <Link to="/">
          <button type="button" className="btn btn-dark btn-error">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}
