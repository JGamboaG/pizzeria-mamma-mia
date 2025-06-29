import { formatMiles } from '../utils/formatMiles';

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-color">
      <div className="container d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <p className="mb-0 fs-6">Pizzería Mamma Mia!</p>
          <button type="button" className="btn btn-outline-light btn-sm fs-6">🍕 Home</button>
          {token ? (
            <>
              <button type="button" className="btn btn-outline-light btn-sm fs-6">🔓 Profile</button>
              <button type="button" className="btn btn-outline-light btn-sm fs-6">🔓 Logout</button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-outline-light btn-sm fs-6">🔐 Login</button>
              <button type="button" className="btn btn-outline-light btn-sm fs-6">🔐 Register</button>
            </>
          )}
        </div>
        <button type="button" className="btn btn-outline-primary btn-sm fs-6">🛒 Total: ${formatMiles(total)}</button>
      </div>
    </nav>
  )
}

export default Navbar




