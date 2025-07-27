import { useCart } from '../context/CartContext'
import { formatMiles } from '../utils/formatMiles'
import { useNavigate } from 'react-router-dom'

const CardPizza = (props) => {
  const {addToCart} = useCart()
  const navigate = useNavigate()

  const goToPizza = (id) => {
    navigate(`/pizza/${id}`)
  }

  return (
    <div className="col">
      <div className="card h-100 m-0 p-0">
        <img src={props.pizza.img} alt={`Pizza ${props.pizza.name}`} className="card-img-top w-100"/>
        <div className="card-body p-0">
          <h5 className="card-title fs-5 fw-bold m-3">Pizza {props.pizza.name}</h5>
          <hr/>
          <p className="mb-1 text-center fs-5">Ingredientes:</p>
          <ul className="list-group list-group-flush">
            {props.pizza.ingredients.map((ingrediente, index) => (<li key={index} className="list-group-item fs-6 fw-normal">🍕 {ingrediente}</li>))}
          </ul>
          <hr className='mt-0'/>
          <h5 className="fw-bold text-center fs-4">Precio: ${formatMiles(props.pizza.price)}</h5>
        </div>
        <div className="d-flex justify-content-around p-4">
          <button className="btn btn-outline-secondary btn-sm mx-1" onClick={() => goToPizza(props.pizza.id)}>Ver Más 👀</button>
          <button className="btn btn-dark btn-sm mx-1" onClick={() => addToCart(props.pizza)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza