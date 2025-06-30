import { Link } from 'react-router-dom'

const ProfilePage = () => {
  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <div className="border p-4 rounded shadow w-100" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold text-center mb-4">Perfil de usuario</h2>
        <p className="text-center">usuario@pizzeriamamamia.cl</p>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/">
            <button className="btn btn-danger btn-sm">Cerrar sesión</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage