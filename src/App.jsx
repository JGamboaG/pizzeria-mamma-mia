import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PizzaPage from './pages/PizzaPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import { useUser } from './context/UserContext'

function App() {
  const {token} = useUser()

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={!token ? <RegisterPage/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!token ? <LoginPage/> : <Navigate to="/"/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/pizza/:id" element={<PizzaPage/>}/>
        <Route path="/profile" element={token ? <ProfilePage/> : <Navigate to="/login"/>}/>
        <Route path="/404" element={<NotFoundPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
