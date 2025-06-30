import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PizzaPage from './pages/PizzaPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/pizza/p001" element={<PizzaPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/404" element={<NotFoundPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
