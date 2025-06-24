import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../data/pizzas'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="container my-4 mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map(pizza => (<CardPizza key={pizza.id} pizza={pizza}/>))}
        </div>
      </div>
    </div>
  )
}

export default Home