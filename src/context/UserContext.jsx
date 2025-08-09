import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null)
  const [email, setEmail] = useState(localStorage.getItem("email") || null) 

  const login = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if(!response.ok) throw new Error(data.error || "Error en login")
    setToken(data.token)
    setEmail(data.email)
    localStorage.setItem("token", data.token)
    localStorage.setItem("email", data.email)
  }

  const register = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if(!response.ok) throw new Error(data.error || "Error en registro")
    setToken(data.token)
    setEmail(data.email)
    localStorage.setItem("token", data.token)
    localStorage.setItem("email", data.email)
  }

  const logout = () => {
    setToken(null)
    setEmail(null)
    localStorage.removeItem("token")
    localStorage.removeItem("email")
  }

  const getProfile = async () => {
    if(!token) return
    const response = await fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = await response.json()
    if(response.ok && data.email) {
      setEmail(data.email)
      localStorage.setItem("email", data.email)
    }
  }
  
  return(
    <UserContext.Provider value={{token, email, login, register, logout, getProfile}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}

export default UserProvider