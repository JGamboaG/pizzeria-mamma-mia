import { Link } from "react-router-dom"

const NotFoundPage = () => {
return (
    <main className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
      <h1 className="text-danger">404</h1>
      <h2 className="mb-3">¡Oops! Página no encontrada</h2>
      <p className="mb-4 text-muted">La ruta que estás buscando no existe o ha sido movida</p>
      <Link to="/" className="btn btn-primary btn-sm">
        Volver al Home
      </Link>
    </main>
  )
}

export default NotFoundPage