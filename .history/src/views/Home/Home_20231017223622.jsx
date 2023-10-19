import React, { useContext } from "react";
import "./homeStyles.css";
import { AppContext } from "../../context/AppContext";
import PizzaCards from "../../components/PizzaCards/PizzaCards";

export default function Home() {
  const context = useContext(AppContext);
  let allPizzas = context.pizzas;

  return (
    <div className="home">
      <section>Banner</section>
      <section>
        {/* {allPizzas.map((pizzas) => (
          <PizzaCards key={pizzas.id} pizzas={pizzas} />
        ))} */}
      </section>
    </div>
  );
}
