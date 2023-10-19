import React from 'react';
import Header from '../../components/Header/Header';
import PizzaNavbar from '../../components/NavBar/PizzaNavBar';
import PizzaCards from '../../components/PizzaCards/PizzaCards'

export default function Home() {
  return (
    <div>
        <PizzaNavbar />
        <Header />
        <div className='card-container'>
          <PizzaCards />
        </div>

    </div>
  )
}
