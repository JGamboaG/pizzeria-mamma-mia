import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const validarDatos = async (e) =>{
    e.preventDefault()
    setSuccess("")
    setError("")

    if(!email.trim() || !password.trim()){
      setError("Todos los campos son obligatorios")
      return
    }

    if(password.length < 6){
        setError("La contraseña debe tener al menos 6 caracteres")
        return
    }

    try{
      await login(email, password)
      setSuccess("Login correcto")
      navigate("/")

    } catch(err){
      setError("Error al iniciar sesión")
    }
  }

  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <div className="border p-4 rounded shadow w-100" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold text-center mb-4">Login</h2>
        <form onSubmit={validarDatos}>
            {(error || success) && <div className={`alert ${error ? "alert-danger" : "alert-success"}`}>{error || success}</div>}

            <div className="mb-3">
              <label htmlFor="email" className="fw-bold">Email</label>
              <input type="email" className="form-control" placeholder="Ingresa tu correo" onChange={(e) => (
                setEmail(e.target.value)
              )}></input>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="fw-bold">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={(e) => (
                setPassword(e.target.value)
              )}></input>
            </div>

            <button type='submit' className="btn btn-primary btn-sm">Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default LoginPage