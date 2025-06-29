import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const validarDatos = (e) =>{
    e.preventDefault()

    setSuccess("")
    setError("")

    if(!email.trim() || !password.trim() || !confirmPassword.trim()){
      setError("Todos los campos son obligatorios")
      return
    }

    if(password.length < 6){
        setError("La contraseña debe tener al menos 6 caracteres")
        return
    }

    if(password !== confirmPassword){
      setError("Las contraseñas no coinciden")
      return
    }
    setSuccess("Formulario enviado")
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <div className="border p-4 rounded shadow w-100" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold text-center mb-4">Registro</h2>
        <form onSubmit={validarDatos}>
            {(error || success) && <div className={`alert ${error ? "alert-danger" : "alert-success"}`}>{error || success}</div>}

            <div className="mb-3">
              <label for="email" className="fw-bold">Email</label>
              <input type="email" className="form-control" placeholder="Ingresa tu correo" onChange={(e) => (
                setEmail(e.target.value)
              )}></input>
            </div>

            <div className="mb-3">
              <label for="password" className="fw-bold">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={(e) => (
                setPassword(e.target.value)
              )}></input>
            </div>

            <div className="mb-3">
              <label for="confirm-password" className="fw-bold">Confirmar contraseña</label>
              <input type="password" className="form-control" id="confirm-password" placeholder="Repite la contraseña" onChange={(e) => (
                setConfirmPassword(e.target.value)
              )}></input>
            </div>

            <button type='submit' className="btn btn-primary btn-sm">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Register