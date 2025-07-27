import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
  const [token, setToken] = useState(true)
  console.log(token)

  const logout = () => setToken(false)
  
  return(
    <UserContext.Provider value={{token, logout}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}

export default UserProvider