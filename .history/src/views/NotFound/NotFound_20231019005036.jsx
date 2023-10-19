import React from "react";
import "../NotFound/NotFound.css";

export default function NotFound() {
  return (
    <div error-container>
      <div>
        <img className="error-img" src="src/assets/img/Error404.png" alt="." />
      </div>
      <div>
        {" "}
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </div>
    </div>
  );
}
