import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card'

export default function Home() {
  return (
    <div>
        <PizzaNavbar />
        <Header />
        <div className='card-container'>
          <Card />
        </div>

    </div>
  )
}
