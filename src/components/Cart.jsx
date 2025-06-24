import { pizzas } from '../data/pizzas'
import { formatMiles } from '../utils/formatMiles';
import { useState } from 'react'

const Cart = () => {
  const pizzaCart = pizzas.map(pizza => ({...pizza, quantity: 1}))

  const [cart, setCart] =useState(pizzaCart)

  const incrementarCantidad = (id) => {
    const actualizarCarrito = cart.map(pizza =>
      pizza.id === id ? {...pizza, quantity: pizza.quantity + 1} : pizza
    )
    setCart(actualizarCarrito)
  }

  const decrementarCantidad = (id) => {
    const actualizarCarrito = cart.map(pizza =>
      pizza.id === id ? {...pizza, quantity: pizza.quantity - 1} : pizza
    ).filter(pizza => pizza.quantity > 0);
    setCart(actualizarCarrito)
  }

  const total = cart.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.quantity,0)

  const primeraLetraMayuscula = (texto) => {
    if (!texto) return ""
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
  }

  return (
    <div className="content">
      <div className="container mt-4" style={{maxWidth: "600px"}}>
        <h5 className="mb-4 fw-bold">Detalles del pedido:</h5>
        {cart.map(pizza => (
          <div key={pizza.id} className="d-flex align-items-center mb-3">
            <img src={pizza.img} alt={pizza.name} style={{with: "50px", height: "50px", objectFit: "cover", borderRadius: "3px"}} className="me-3"/>
            <span className="me-auto">{primeraLetraMayuscula(pizza.name)}</span>
            <span className="m-3">${formatMiles(pizza.price)}</span>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-danger btn-sm me-1" onClick={() => decrementarCantidad(pizza.id)}>-</button>
              <span className="px-2">{pizza.quantity}</span>
              <button className="btn btn-outline-primary btn-sm ms-1" onClick={() => incrementarCantidad(pizza.id)}>+</button>
            </div>
          </div>
        ))}
        <h5 className="mt-4 fw-bold">Total: ${formatMiles(total)}</h5>
        <button className="btn btn-dark mt-2 mb-4">Pagar</button>
      </div>
    </div>
  )
}

export default Cart