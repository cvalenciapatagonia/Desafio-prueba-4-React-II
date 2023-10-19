import React from "react";
import { Link } from "react-router-dom";
import "../NotFound/NotFound.css";

export default function NotFound() {
  return (
    <div className="error-container"> -
      <div>
        <img className="error-img" src="src/assets/img/Error404.png" alt="." />
      </div>
      <div>
        <Link to="/">
          <button type="button" className="btn btn-dark btn-error btn-lg">
            Volver a la pagina principal
          </button>
        </Link>
      </div>
    </div>
  );
}
