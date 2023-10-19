import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Home() {
  const PizzaCards = useContext(AppContext)

  console.log(PizzaCards);


  return (
    <div className='home'>
        <section>Banner</section>
        <section>Cards</section>

    </div>
  )
}
