import { useCart } from '../context/CartContext'
import { formatMiles } from '../utils/formatMiles'

const CartPage = () => {
  const {cart, total, increment, decrement} = useCart()

  const capitalizeFirstLetter = (str) => {
    if (!str) return ""
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  return (
    <main className="content">
      <div className="container mt-4" style={{maxWidth: "600px"}}>
        <h5 className="mb-4 fw-bold">Detalles del pedido:</h5>
        {cart.map(pizza => (
          <div key={pizza.id} className="d-flex align-items-center mb-3">
            <img src={pizza.img} alt={pizza.name} style={{with: "50px", height: "50px", objectFit: "cover", borderRadius: "3px"}} className="me-3"/>
            <span className="me-auto">{capitalizeFirstLetter(pizza.name)}</span>
            <span className="m-3">${formatMiles(pizza.price)}</span>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-danger btn-sm me-1" onClick={() => decrement(pizza)}>-</button>
              <span className="px-2">{pizza.quantity}</span>
              <button className="btn btn-outline-primary btn-sm ms-1" onClick={() => increment(pizza)}>+</button>
            </div>
          </div>
        ))}
        <h5 className="mt-4 fw-bold">Total: ${formatMiles(total)}</h5>
        <button className="btn btn-dark mt-2 mb-4">Pagar</button>
      </div>
    </main>
  )
}

export default CartPage