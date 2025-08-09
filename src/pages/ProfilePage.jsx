import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const ProfilePage = () => {
  const { email, logout } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <div className="border p-4 rounded shadow w-100" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold text-center mb-4">Perfil de usuario</h2>
        <p className="text-center">{email}</p>
        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage