import { Link } from 'react-router-dom'
import { formatMiles } from '../utils/formatMiles'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {total} = useCart()
  const token = false
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-color">
      <div className="container d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="navbar-brand mb-0 fs-6">Pizzería Mamma Mia!</Link>
          <Link to="/">
            <button type="button" className="btn btn-outline-light btn-sm fs-6">🍕 Home</button>
          </Link>
          {token ? (
            <>
              <Link to="/profile">
                <button type="button" className="btn btn-outline-light btn-sm fs-6">🔓 Profile</button>
              </Link>
              <Link to="/">  
                <button type="button" className="btn btn-outline-light btn-sm fs-6">🔓 Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button type="button" className="btn btn-outline-light btn-sm fs-6">🔐 Login</button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn btn-outline-light btn-sm fs-6">🔐 Register</button>
              </Link>
            </>
          )}
        </div>
        <Link to="/cart">
          <button type="button" className="btn btn-outline-primary btn-sm fs-6">🛒 Total: ${formatMiles(total)}</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar




