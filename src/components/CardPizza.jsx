import React from 'react'
import { formatMiles } from '../utils/formatMiles'

const CardPizza = (props) => {
  return (
    <div class="col">
      <div class="card h-100 m-0 p-0">
        <img src={props.img} class="card-img-top w-100" alt="Pizza"/>
        <div class="card-body p-0">
          <h5 class="card-title fs-5 fw-bold m-3">Pizza {props.name}</h5>
          <hr/>
          <p class="mb-1 text-center fs-5">Ingredientes:</p>
          <p class="text-center fs-6 fw-normal">🍕 {props.ingredients.filter(Boolean).join(', ')}</p>
          <hr/>
          <h5 class="fw-bold text-center fs-4">Precio: ${formatMiles(props.price)}</h5>
        </div>
        <div class="d-flex justify-content-around p-4">
          <button class="btn btn-outline-secondary btn-sm mx-1">Ver Más 👀</button>
          <button class="btn btn-dark btn-sm mx-1">Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza