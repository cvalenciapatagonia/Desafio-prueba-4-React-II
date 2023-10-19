import React from "react";
import { useHistory } from "react-router-dom";
import "../NotFound/NotFound.css";

export default function NotFound() {
  const history = useHistory();

  const handleReturn = () => {
    history.push("/"); // Cambia la ruta a la página principal
  };

  return (
    <div className="error-container">
      <div>
        <img className="error-img" src="src/assets/img/Error404.png" alt="." />
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleReturn}>
          Volver a la página principal
        </button>
      </div>
    </div>
  );
}
