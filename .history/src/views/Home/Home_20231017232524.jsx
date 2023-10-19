import React from 'react';
import Header from '../../components/Header/Header';
import PizzaNavbar from '../../components/NavBar/PizzaNavBar';
import Card from '../Components/Card'

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
