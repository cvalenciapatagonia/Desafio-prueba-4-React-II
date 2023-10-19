import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Home() {
  const PizzaCards = useContext(AppContext)



  return (
    <div className='home'>
        <section>Banner</section>
        <section>
          {PizzaCards.map((pizzas) => (
            <PizzaCards pizzas={pizzas} />
          ))}
          
          </section>

    </div>
  )
}
